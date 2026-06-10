# Rebuild my-website deploy folder from source (English demo_pic names required)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$dest = Join-Path $root 'my-website'

Write-Host "Syncing deploy bundle -> $dest"

if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest | Out-Null }

# HTML entry + case pages (must use English demo_pic paths in source)
Copy-Item (Join-Path $root 'portfolio-ai-pm.html') (Join-Path $dest 'index.html') -Force
Copy-Item (Join-Path $root 'projects') (Join-Path $dest 'projects') -Recurse -Force

# Static assets
foreach ($dir in @('assets', 'demo_pic')) {
  $from = Join-Path $root $dir
  $to = Join-Path $dest $dir
  if (-not (Test-Path $from)) { throw "Missing source folder: $from" }
  if (Test-Path $to) { Remove-Item $to -Recurse -Force }
  Copy-Item $from $to -Recurse -Force
}

# Drop large videos from deploy bundle
Get-ChildItem (Join-Path $dest 'demo_pic') -Filter '*.mp4' -Recurse -ErrorAction SilentlyContinue |
  Remove-Item -Force

$files = (Get-ChildItem $dest -Recurse -File).Count
$sizeMB = [math]::Round((Get-ChildItem $dest -Recurse -File | Measure-Object Length -Sum).Sum / 1MB, 1)
Write-Host "Done: $files files, ${sizeMB}MB"
Write-Host "Upload everything inside my-website/ to Tencent static hosting ROOT."
