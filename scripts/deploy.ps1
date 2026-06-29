# Run from project folder: npm run deploy

$branch = git branch --show-current
if ($branch -ne "source") {
    Write-Host ""
    Write-Host "ERROR: You must be on the 'source' branch." -ForegroundColor Red
    Write-Host "Run: git checkout source" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

$status = git status --porcelain
if ($status) {
    Write-Host ""
    Write-Host "ERROR: You have uncommitted changes. Commit first:" -ForegroundColor Red
    Write-Host "  git add ."
    Write-Host "  git commit -m `"Update portfolio`""
    Write-Host ""
    exit 1
}

Write-Host "Pushing to origin/source..." -ForegroundColor Cyan
git push origin source

if ($LASTEXITCODE -ne 0) {
    Write-Host "Push failed." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Deploy started!" -ForegroundColor Green
Write-Host "1. Wait 1-2 minutes for GitHub Actions to finish"
Write-Host "2. Check: https://github.com/JoseRodriguez224/joserodriguez224.github.io/actions"
Write-Host "3. Open: https://joserodriguez224.github.io"
Write-Host "4. Hard refresh: Ctrl + Shift + R"
Write-Host ""
Write-Host "IMPORTANT: Never push to 'main' — that branch is auto-generated." -ForegroundColor Yellow
Write-Host ""
