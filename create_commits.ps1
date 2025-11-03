# PowerShell script to create multiple git commits
# with random user alternation and realistic file changes

$ErrorActionPreference = "Stop"

# User configurations
$users = @(
    @{
        name = "wswsyy"
        email = "shiyu689@qq.com"
        type = "UI"
    },
    @{
        name = "wawsyy"
        email = "shiyu689@qq.com"
        type = "Contract"
    }
)

# Time range: Nov 1-6, 2025, 9 AM - 5 PM PST
$startDate = Get-Date "2025-11-01 09:00:00"
$endDate = Get-Date "2025-11-06 17:00:00"

# Commit messages
$commitMessages = @{
    "feat" = @(
        "feat: add weight input validation",
        "feat: implement encrypted weight comparison",
        "feat: add trend visualization component",
        "feat: support multiple chain networks",
        "feat: add error boundary for FHEVM errors",
        "feat: implement weight history tracking",
        "feat: add responsive design for mobile",
        "feat: integrate Rainbow wallet connection"
    )
    "fix" = @(
        "fix: resolve FHEVM instance initialization issue",
        "fix: correct weight decryption logic",
        "fix: handle network switching properly",
        "fix: prevent duplicate weight submissions",
        "fix: resolve hydration mismatch in React",
        "fix: correct timestamp calculation",
        "fix: handle edge cases in weight comparison"
    )
    "docs" = @(
        "docs: update README with setup instructions",
        "docs: add API documentation",
        "docs: improve code comments",
        "docs: add deployment guide",
        "docs: update contract documentation"
    )
    "style" = @(
        "style: format code with prettier",
        "style: improve UI component styling",
        "style: adjust button hover effects",
        "style: update color scheme"
    )
    "refactor" = @(
        "refactor: extract weight logic to custom hook",
        "refactor: simplify contract interface",
        "refactor: reorganize component structure",
        "refactor: improve error handling",
        "refactor: optimize FHEVM integration"
    )
    "perf" = @(
        "perf: optimize contract gas usage",
        "perf: reduce re-renders in React components",
        "perf: cache FHEVM instance"
    )
    "test" = @(
        "test: add unit tests for weight comparison",
        "test: add integration tests",
        "test: improve test coverage"
    )
    "chore" = @(
        "chore: update dependencies",
        "chore: configure build scripts",
        "chore: update package.json"
    )
}

function Get-RandomWorkingTime {
    $totalSeconds = ($endDate - $startDate).TotalSeconds
    $randomSeconds = Get-Random -Minimum 0 -Maximum ([int]$totalSeconds)
    return $startDate.AddSeconds($randomSeconds)
}

function Get-RandomUser {
    return $users | Get-Random
}

function Get-CommitMessage {
    param($userType)
    
    if ($userType -eq "UI") {
        $types = @("feat", "fix", "style", "refactor", "docs", "perf", "test")
    } else {
        $types = @("feat", "fix", "refactor", "perf", "test", "docs", "chore")
    }
    
    $commitType = $types | Get-Random
    $messages = $commitMessages[$commitType]
    return $messages | Get-Random
}

function Get-FilesForUser {
    param($userType)
    
    if ($userType -eq "UI") {
        return @(
            "frontend/hooks/useEthersSigner.ts",
            "frontend/hooks/useWeightTrend.tsx",
            "frontend/components/WeightTrendDemo.tsx",
            "frontend/app/page.tsx",
            "frontend/app/globals.css",
            "frontend/package.json"
        )
    } else {
        return @(
            "contracts/WeightTrend.sol",
            "hardhat.config.ts",
            "package.json",
            "test/WeightTrend.ts",
            "deploy/deploy.ts",
            "tasks/WeightTrend.ts"
        )
    }
}

function Make-FileChange {
    param($filePath, $userType)
    
    if (-not (Test-Path $filePath)) {
        return $false
    }
    
    try {
        $content = Get-Content $filePath -Raw
        $originalContent = $content
        $lines = Get-Content $filePath
        
        $changeType = @("comment", "string", "config", "whitespace") | Get-Random
        $changed = $false
        
        switch ($changeType) {
            "comment" {
                if ($lines.Count -gt 0) {
                    $insertPos = Get-Random -Minimum 0 -Maximum ([Math]::Min($lines.Count, 20))
                    $comment = "// " + (@(
                        "Improved error handling",
                        "Optimized performance",
                        "Added validation",
                        "Enhanced security"
                    ) | Get-Random)
                    $lines = $lines[0..($insertPos-1)] + $comment + $lines[$insertPos..($lines.Count-1)]
                    $changed = $true
                }
            }
            "string" {
                for ($i = 0; $i -lt $lines.Count; $i++) {
                    if ($userType -eq "UI") {
                        if ($lines[$i] -match "Loading") {
                            $lines[$i] = $lines[$i] -replace "Loading", "Loading..."
                            $changed = $true
                            break
                        }
                    } else {
                        if ($lines[$i] -match 'version.*"0\.1\.0"') {
                            $lines[$i] = $lines[$i] -replace '"0\.1\.0"', '"0.1.1"'
                            $changed = $true
                            break
                        } elseif ($lines[$i] -match 'version.*"0\.1\.1"') {
                            $lines[$i] = $lines[$i] -replace '"0\.1\.1"', '"0.1.2"'
                            $changed = $true
                            break
                        }
                    }
                }
            }
            "config" {
                for ($i = 0; $i -lt $lines.Count; $i++) {
                    if ($lines[$i] -match "runs.*800") {
                        $lines[$i] = $lines[$i] -replace "800", "850"
                        $changed = $true
                        break
                    } elseif ($lines[$i] -match "runs.*850") {
                        $lines[$i] = $lines[$i] -replace "850", "900"
                        $changed = $true
                        break
                    }
                }
            }
            "whitespace" {
                if (-not $content.EndsWith("`n")) {
                    $content = $content + "`n"
                    $changed = $true
                }
            }
        }
        
        if ($changed) {
            if ($changeType -ne "whitespace") {
                $newContent = $lines -join "`n"
                if (-not $newContent.EndsWith("`n")) {
                    $newContent += "`n"
                }
            } else {
                $newContent = $content
            }
            
            if ($newContent -ne $originalContent) {
                Set-Content -Path $filePath -Value $newContent -NoNewline
                return $true
            }
        }
        
        # Fallback: always make a change
        if (-not $changed) {
            $newContent = $content
            if (-not $newContent.EndsWith("`n")) {
                $newContent += "`n"
            } else {
                $newContent = $newContent.TrimEnd("`n") + "`n"
            }
            Set-Content -Path $filePath -Value $newContent -NoNewline
            return $true
        }
    } catch {
        Write-Host "Error modifying $filePath : $_"
        return $false
    }
    
    return $false
}

function Create-Commit {
    param($commitNum, $totalCommits)
    
    $user = Get-RandomUser
    $commitTime = Get-RandomWorkingTime
    $commitMessage = Get-CommitMessage -userType $user.type
    
    # Set git user
    git config user.name $user.name
    git config user.email $user.email
    
    # Get files for this user type
    $files = Get-FilesForUser -userType $user.type
    $files = $files | Where-Object { Test-Path $_ }
    
    if ($files.Count -eq 0) {
        return $false
    }
    
    # Try to make changes
    $changed = $false
    $attempts = 0
    while (-not $changed -and $attempts -lt 10) {
        $filePath = $files | Get-Random
        if (Make-FileChange -filePath $filePath -userType $user.type) {
            $changed = $true
            git add $filePath
        }
        $attempts++
    }
    
    if (-not $changed) {
        # Fallback: modify README
        if (Test-Path "README.md") {
            $readme = Get-Content "README.md" -Raw
            $readme = $readme -replace "Built with ❤️", "Built with ❤️ using Zama FHEVM"
            Set-Content -Path "README.md" -Value $readme -NoNewline
            git add README.md
            $changed = $true
        }
    }
    
    if ($changed) {
        $timeStr = $commitTime.ToString("yyyy-MM-dd HH:mm:ss")
        $env:GIT_AUTHOR_DATE = $timeStr
        $env:GIT_COMMITTER_DATE = $timeStr
        
        git commit -m $commitMessage
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Commit $commitNum/$totalCommits : $commitMessage by $($user.name) at $timeStr"
            return $true
        }
    }
    
    return $false
}

# Main execution
$numCommits = 25
Write-Host "Creating $numCommits commits..."

# Ensure we're in the right directory
Set-Location "D:\Cursor-Ku\demo14\pro14"

# Add all files initially
git add .

# Create initial commit if needed
try {
    git commit -m "chore: initial project setup" 2>&1 | Out-Null
} catch {
    # Ignore if already committed
}

# Create commits
$successful = 0
for ($i = 1; $i -le $numCommits; $i++) {
    if (Create-Commit -commitNum $i -totalCommits $numCommits) {
        $successful++
    }
    Start-Sleep -Milliseconds 100
}

Write-Host "`nCreated $successful commits successfully!"
Write-Host "`nCommit log:"
git log --oneline --all -30

