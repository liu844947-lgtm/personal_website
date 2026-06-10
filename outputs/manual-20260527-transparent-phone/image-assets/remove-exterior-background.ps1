param(
    [Parameter(Mandatory = $true)]
    [string]$InputPath,
    [Parameter(Mandatory = $true)]
    [string]$OutputPath
)

Add-Type -AssemblyName System.Drawing

$source = [System.Drawing.Bitmap]::new($InputPath)
$output = [System.Drawing.Bitmap]::new(
    $source.Width,
    $source.Height,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
)
$graphics = [System.Drawing.Graphics]::FromImage($output)
$graphics.DrawImageUnscaled($source, 0, 0)
$graphics.Dispose()
$source.Dispose()

$width = $output.Width
$height = $output.Height
$visited = [bool[]]::new($width * $height)
$queue = [System.Collections.Generic.Queue[int]]::new()

function Test-ExteriorBackground([System.Drawing.Color]$color) {
    $maxChannel = [Math]::Max($color.R, [Math]::Max($color.G, $color.B))
    $minChannel = [Math]::Min($color.R, [Math]::Min($color.G, $color.B))
    return $color.R -ge 230 -and $color.G -ge 230 -and $color.B -ge 230 -and ($maxChannel - $minChannel) -le 16
}

function Add-Seed([int]$x, [int]$y) {
    if ($x -lt 0 -or $x -ge $width -or $y -lt 0 -or $y -ge $height) {
        return
    }
    $index = $y * $width + $x
    if (-not $visited[$index] -and (Test-ExteriorBackground ($output.GetPixel($x, $y)))) {
        $visited[$index] = $true
        $queue.Enqueue($index)
    }
}

# The screenshot has a thin dark capture frame at the edge. Seed the light
# exterior just inside it, while the phone itself remains enclosed by its bezel.
for ($x = 6; $x -lt $width - 6; $x++) {
    Add-Seed $x 10
    Add-Seed $x ($height - 11)
}
for ($y = 6; $y -lt $height - 6; $y++) {
    Add-Seed 10 $y
    Add-Seed ($width - 11) $y
}

$neighbors = @(@(-1, 0), @(1, 0), @(0, -1), @(0, 1))
while ($queue.Count -gt 0) {
    $index = $queue.Dequeue()
    $x = $index % $width
    $y = [Math]::Floor($index / $width)
    $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))

    foreach ($offset in $neighbors) {
        $nextX = $x + $offset[0]
        $nextY = $y + $offset[1]
        Add-Seed $nextX $nextY
    }
}

# Remove the capture frame itself, which surrounds the external canvas only.
for ($x = 0; $x -lt $width; $x++) {
    for ($y = 0; $y -le 5; $y++) {
        $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        $output.SetPixel($x, $height - 1 - $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    }
}
for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -le 5; $x++) {
        $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        $output.SetPixel($width - 1 - $x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    }
}

# Some exported captures include a single horizontal canvas rule below the
# device. It lies outside the phone silhouette in the bottom margin.
for ($y = [Math]::Max(0, $height - 12); $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    }
}

$output.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$output.Dispose()
