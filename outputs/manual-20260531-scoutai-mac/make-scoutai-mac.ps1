param(
    [Parameter(Mandatory = $true)]
    [string]$InputPath,
    [Parameter(Mandatory = $true)]
    [string]$OutputPath
)

Add-Type -AssemblyName System.Drawing

function New-RoundRectPath([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $d = $r * 2
    $path.AddArc($x, $y, $d, $d, 180, 90)
    $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
    $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $path.CloseFigure()
    return $path
}

function Color-Distance([System.Drawing.Color]$a, [System.Drawing.Color]$b) {
    return [Math]::Sqrt(
        [Math]::Pow($a.R - $b.R, 2) +
        [Math]::Pow($a.G - $b.G, 2) +
        [Math]::Pow($a.B - $b.B, 2)
    )
}

$src = [System.Drawing.Bitmap]::new($InputPath)
$w = $src.Width
$h = $src.Height
$out = [System.Drawing.Bitmap]::new($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($out)
$g.Clear([System.Drawing.Color]::FromArgb(0, 0, 0, 0))
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$outerPath = New-RoundRectPath 3 3 ($w - 6) ($h - 6) 30
$shadowPath = New-RoundRectPath 6 8 ($w - 12) ($h - 14) 28
$shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(70, 0, 0, 0))
$g.FillPath($shadowBrush, $shadowPath)
$shadowBrush.Dispose()

$caseBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Rectangle]::new(3, 3, $w - 6, $h - 6),
    [System.Drawing.Color]::FromArgb(255, 30, 31, 35),
    [System.Drawing.Color]::FromArgb(255, 5, 5, 7),
    [System.Drawing.Drawing2D.LinearGradientMode]::Vertical
)
$g.FillPath($caseBrush, $outerPath)
$caseBrush.Dispose()

$highlightPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(80, 255, 255, 255), 1.4)
$g.DrawPath($highlightPen, $outerPath)
$highlightPen.Dispose()

$g.DrawImageUnscaled($src, 0, 0)
$g.Dispose()
$src.Dispose()

$bg = $out.GetPixel(0, 0)
$visited = [bool[]]::new($w * $h)
$queue = [System.Collections.Generic.Queue[int]]::new()

function Add-ExteriorSeed([int]$x, [int]$y) {
    if ($x -lt 0 -or $x -ge $w -or $y -lt 0 -or $y -ge $h) { return }
    $idx = $y * $w + $x
    if ($visited[$idx]) { return }
    $c = $out.GetPixel($x, $y)
    if ((Color-Distance $c $bg) -le 34 -or ($c.R -gt 238 -and $c.G -gt 232 -and $c.B -gt 235)) {
        $visited[$idx] = $true
        $queue.Enqueue($idx)
    }
}

for ($x = 0; $x -lt $w; $x++) {
    Add-ExteriorSeed $x 0
    Add-ExteriorSeed $x ($h - 1)
}
for ($y = 0; $y -lt $h; $y++) {
    Add-ExteriorSeed 0 $y
    Add-ExteriorSeed ($w - 1) $y
}

$neighborOffsets = @(@(-1, 0), @(1, 0), @(0, -1), @(0, 1))
while ($queue.Count -gt 0) {
    $idx = $queue.Dequeue()
    $x = $idx % $w
    $y = [Math]::Floor($idx / $w)
    $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    foreach ($off in $neighborOffsets) {
        Add-ExteriorSeed ($x + $off[0]) ($y + $off[1])
    }
}

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $c = $out.GetPixel($x, $y)
        if ($c.A -eq 0) { continue }
        $max = [Math]::Max($c.R, [Math]::Max($c.G, $c.B))
        $min = [Math]::Min($c.R, [Math]::Min($c.G, $c.B))
        $isNeutralShell = $max - $min -le 18 -and $c.R -ge 135 -and $c.R -le 230
        $isShellZone = $y -lt 43 -or $y -gt ($h - 31) -or $x -lt 28 -or $x -gt ($w - 29)
        if ($isNeutralShell -and $isShellZone) {
            $vertical = [Math]::Min(1.0, [Math]::Max(0.0, $y / [double]$h))
            $tone = [int](18 - 10 * $vertical)
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($c.A, $tone, $tone, $tone + 2))
        }
    }
}

$g2 = [System.Drawing.Graphics]::FromImage($out)
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$cameraBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 7, 8, 10))
$cameraHighlight = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(120, 75, 78, 84), 1)
$g2.FillEllipse($cameraBrush, ($w / 2) - 5, 24, 10, 10)
$g2.DrawEllipse($cameraHighlight, ($w / 2) - 5, 24, 10, 10)
$lipBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new(
    [System.Drawing.Rectangle]::new(45, $h - 8, $w - 90, 6),
    [System.Drawing.Color]::FromArgb(210, 46, 47, 52),
    [System.Drawing.Color]::FromArgb(210, 8, 8, 10),
    [System.Drawing.Drawing2D.LinearGradientMode]::Vertical
)
$g2.FillRectangle($lipBrush, 45, $h - 8, $w - 90, 5)
$lipBrush.Dispose()
$cameraBrush.Dispose()
$cameraHighlight.Dispose()
$g2.Dispose()

$left = 3
$top = 3
$right = $w - 4
$bottom = $h - 4
$radius = 30
$r2 = $radius * $radius
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $inside = $false
        if ($x -ge ($left + $radius) -and $x -le ($right - $radius) -and $y -ge $top -and $y -le $bottom) {
            $inside = $true
        } elseif ($x -ge $left -and $x -le $right -and $y -ge ($top + $radius) -and $y -le ($bottom - $radius)) {
            $inside = $true
        } else {
            $cx = if ($x -lt ($left + $radius)) { $left + $radius } elseif ($x -gt ($right - $radius)) { $right - $radius } else { $x }
            $cy = if ($y -lt ($top + $radius)) { $top + $radius } elseif ($y -gt ($bottom - $radius)) { $bottom - $radius } else { $y }
            $inside = ([Math]::Pow($x - $cx, 2) + [Math]::Pow($y - $cy, 2)) -le $r2
        }
        if (-not $inside) {
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$out.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$out.Dispose()
