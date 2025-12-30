# Echo Cursor Projects

This repository contains multiple web projects built with HTML, CSS, and JavaScript.

## Projects

- **callsetter-landing** - Landing page project
- **cro-exploration-TM** - CRO exploration project
- **echo-design-hackathon-2026** - Design hackathon website
- **innomedio-revamp** - Innomedio revamp project
- **pos_ui-explore** - POS UI exploration

## Hosting on GitHub Pages

### Option 1: Host Each Project Separately (Recommended)

Each project can be hosted as a separate GitHub Pages site:

1. **Create a GitHub repository** for each project
2. **Push the project folder** to its repository
3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Select the branch (usually `main` or `master`)
   - Select the folder (usually `/root` or the project folder)
   - Save

### Option 2: Host All Projects in One Repository

You can host all projects in a single repository with multiple GitHub Pages sites:

1. **Push this entire repository** to GitHub
2. **Enable GitHub Pages** for the root
3. Access projects at: `https://yourusername.github.io/Echo_Cursor/project-name/`

### Quick Setup Steps

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., `Echo_Cursor`)
   - **Don't** initialize with README, .gitignore, or license

3. **Connect and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Echo_Cursor.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select:
     - Branch: `main`
     - Folder: `/root` (for all projects) or `/project-name` (for specific project)
   - Click **Save**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/Echo_Cursor/`

### Project-Specific URLs

If hosting all projects in one repo:
- `https://YOUR_USERNAME.github.io/Echo_Cursor/callsetter-landing/`
- `https://YOUR_USERNAME.github.io/Echo_Cursor/cro-exploration-TM/`
- `https://YOUR_USERNAME.github.io/Echo_Cursor/echo-design-hackathon-2026/`
- `https://YOUR_USERNAME.github.io/Echo_Cursor/innomedio-revamp/`
- `https://YOUR_USERNAME.github.io/Echo_Cursor/pos_ui-explore/`

## Running Locally

Each project can be run locally by opening the `index.html` file in a browser, or using a local server:

```bash
# For Python 3
python3 -m http.server 8000

# For Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

## Notes

- All projects are static HTML/CSS/JS sites
- No build process required
- GitHub Pages will automatically serve them
- Custom domains can be configured in repository Settings → Pages

