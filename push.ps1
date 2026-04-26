param(
    [string]$msg = "Update site content"
)

$gitPath = "C:\Program Files\Git\bin\git.exe"
$repoPath = "c:\Users\Selcuk\Documents\Antigravity Projects\ozy-patent"

Set-Location $repoPath

Write-Host ">>> git add ." -ForegroundColor Cyan
& $gitPath add .

Write-Host ">>> git commit -m '$msg'" -ForegroundColor Cyan
& $gitPath commit -m $msg

Write-Host ">>> git push origin master" -ForegroundColor Cyan
& $gitPath push origin master

Write-Host ">>> DONE! Vercel'e gonderildi." -ForegroundColor Green
