param(
    [Parameter(Mandatory = $true)]
    [string]$InputPath,
    [Parameter(Mandatory = $true)]
    [string]$OutputPath
)

Add-Type -AssemblyName System.Drawing

$bitmap = [System.Drawing.Bitmap]::new($InputPath)
$w = $bitmap.Width
$h = $bitmap.Height
$out = [System.Drawing.Bitmap]::new($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($out)
$g.DrawImageUnscaled($bitmap, 0, 0)
$g.Dispose()
$bitmap.Dispose()

function Is-KeyLike([System.Drawing.Color]$c) {
    $dr = [Math]::Abs($c.R - 253)
    $dg = [Math]::Abs($c.G - 3)
    $db = [Math]::Abs($c.B - 251)
    $dist = [Math]::Sqrt($dr * $dr + $dg * $dg + $db * $db)
    $magentaDominant = $c.R -ge 150 -and $c.B -ge 145 -and $c.G -le 95 -and (($c.R + $c.B) - ($c.G * 2)) -ge 260
    return $dist -le 145 -or $magentaDominant
}

$visited = [bool[]]::new($w * $h)
$queue = [System.Collections.Generic.Queue[int]]::new()

function Add-Seed([int]$x, [int]$y) {
    if ($x -lt 0 -or $x -ge $w -or $y -lt 0 -or $y -ge $h) { return }
    $idx = $y * $w + $x
    if ($visited[$idx]) { return }
    if (Is-KeyLike ($out.GetPixel($x, $y))) {
        $visited[$idx] = $true
        $queue.Enqueue($idx)
    }
}

for ($x = 0; $x -lt $w; $x++) {
    Add-Seed $x 0
    Add-Seed $x ($h - 1)
}
for ($y = 0; $y -lt $h; $y++) {
    Add-Seed 0 $y
    Add-Seed ($w - 1) $y
}

$neighbors = @(@(-1, 0), @(1, 0), @(0, -1), @(0, 1), @(-1, -1), @(1, -1), @(-1, 1), @(1, 1))
while ($queue.Count -gt 0) {
    $idx = $queue.Dequeue()
    $x = $idx % $w
    $y = [Math]::Floor($idx / $w)
    $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    foreach ($n in $neighbors) {
        Add-Seed ($x + $n[0]) ($y + $n[1])
    }
}

# Clean leftover antialiasing halo only at the cutout boundary. Interior brand
# pink remains untouched because it is not near transparent background.
$copy = [System.Drawing.Bitmap]::new($out)
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $c = $copy.GetPixel($x, $y)
        if ($c.A -eq 0 -or -not (Is-KeyLike $c)) { continue }
        $nearTransparent = $false
        for ($dy = -5; $dy -le 5 -and -not $nearTransparent; $dy++) {
            for ($dx = -5; $dx -le 5; $dx++) {
                $nx = $x + $dx
                $ny = $y + $dy
                if ($nx -lt 0 -or $nx -ge $w -or $ny -lt 0 -or $ny -ge $h) { continue }
                if ($copy.GetPixel($nx, $ny).A -eq 0) {
                    $nearTransparent = $true
                    break
                }
            }
        }
        if ($nearTransparent) {
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}
$copy.Dispose()

$out.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$out.Dispose()
