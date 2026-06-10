$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Collections

$inputs = @(
  @{ Path = 'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_12 (2).png'; Out = 'E:\vibe_coding\profilo\demo_pic\乡村AI文化导览_透明底.png' },
  @{ Path = 'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_13 (3).png'; Out = 'E:\vibe_coding\profilo\demo_pic\乡村活动预约_透明底.png' },
  @{ Path = 'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_13 (4).png'; Out = 'E:\vibe_coding\profilo\demo_pic\乡村村民共创_透明底.png' },
  @{ Path = 'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_14 (5).png'; Out = 'E:\vibe_coding\profilo\demo_pic\乡村运营洞察_透明底.png' },
  @{ Path = 'C:\Users\Liuying\Downloads\ChatGPT Image 2026年6月1日 08_21_12 (1).png'; Out = 'E:\vibe_coding\profilo\demo_pic\茶韵莲乡首页_透明底.png' }
)

function Is-BackgroundLike([System.Drawing.Color]$c) {
  $max = [Math]::Max($c.R, [Math]::Max($c.G, $c.B))
  $min = [Math]::Min($c.R, [Math]::Min($c.G, $c.B))
  if ($c.R -ge 236 -and $c.G -ge 236 -and $c.B -ge 236) { return $true }
  if ($min -ge 204 -and ($max - $min) -le 38) { return $true }
  if ($min -ge 188 -and ($max - $min) -le 18) { return $true }
  return $false
}

function Make-Transparent($inPath, $outPath) {
  $src = [System.Drawing.Bitmap]::new($inPath)
  $width = $src.Width
  $height = $src.Height
  $out = [System.Drawing.Bitmap]::new($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($out)
  $g.DrawImage($src, 0, 0, $width, $height)
  $g.Dispose()

  $visited = New-Object 'bool[,]' $width, $height
  $q = [System.Collections.Queue]::new()
  for ($x = 0; $x -lt $width; $x++) {
    $q.Enqueue(@($x, 0))
    $q.Enqueue(@($x, ($height - 1)))
  }
  for ($y = 1; $y -lt ($height - 1); $y++) {
    $q.Enqueue(@(0, $y))
    $q.Enqueue(@(($width - 1), $y))
  }

  $removed = 0
  while ($q.Count -gt 0) {
    $p = $q.Dequeue()
    $x = [int]$p[0]
    $y = [int]$p[1]
    if ($x -lt 0 -or $x -ge $width -or $y -lt 0 -or $y -ge $height) { continue }
    if ($visited[$x, $y]) { continue }
    $visited[$x, $y] = $true
    $c = $out.GetPixel($x, $y)
    if (-not (Is-BackgroundLike $c)) { continue }
    $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $c.R, $c.G, $c.B))
    $removed++
    $q.Enqueue(@(($x + 1), $y))
    $q.Enqueue(@(($x - 1), $y))
    $q.Enqueue(@($x, ($y + 1)))
    $q.Enqueue(@($x, ($y - 1)))
  }

  $out.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $src.Dispose()
  $out.Dispose()
  [PSCustomObject]@{ File = [IO.Path]::GetFileName($outPath); RemovedPixels = $removed; Output = $outPath }
}

New-Item -ItemType Directory -Force -Path 'E:\vibe_coding\profilo\demo_pic' | Out-Null
$results = foreach ($item in $inputs) { Make-Transparent $item.Path $item.Out }
$results | Format-Table -AutoSize
