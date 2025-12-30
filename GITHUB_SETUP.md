# GitHub Setup Guide

Follow these steps to link your local repository with GitHub:

## Step 1: Configure Git (if not already done)

If you haven't set up your git identity, run these commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 2: Stage and Commit Your Files

```bash
git add .
git commit -m "Initial commit: Add all projects"
```

## Step 3: Create a GitHub Repository

### Option A: Using GitHub Website (Recommended)

1. Go to https://github.com/new
2. Repository name: `Echo_Cursor` (or any name you prefer)
3. Description: "Web projects collection"
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize this repository with a README" (we already have files)
6. Click **"Create repository"**

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create Echo_Cursor --public --source=. --remote=origin --push
```

## Step 4: Link Your Local Repository to GitHub

After creating the repository on GitHub, you'll see a page with setup instructions. Use these commands:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Echo_Cursor.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password. For password, use a **Personal Access Token** (not your GitHub password).

### Getting a Personal Access Token:

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name (e.g., "Echo_Cursor")
4. Select scopes: Check **"repo"** (this gives full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/Echo_Cursor`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**:
   - Branch: Select `main`
   - Folder: Select `/root`
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/Echo_Cursor/`

## Troubleshooting

### If you get "remote origin already exists":
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/Echo_Cursor.git
```

### If you need to update the remote URL:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/Echo_Cursor.git
```

### If push fails due to authentication:
- Make sure you're using a Personal Access Token, not your password
- Or set up SSH keys for easier authentication

## Quick Reference Commands

```bash
# Check remote connection
git remote -v

# View your commits
git log --oneline

# Push future changes
git add .
git commit -m "Your commit message"
git push
```

