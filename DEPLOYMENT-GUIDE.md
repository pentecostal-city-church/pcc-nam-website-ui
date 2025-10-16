# GitHub Pages Deployment Guide

This guide explains how to deploy the SoCal NAM website to GitHub Pages using the `gh-pages` package.

## Overview

Your site is configured to deploy to GitHub Pages at **www.socalnam.org** using the `gh-pages` branch.

## How It Works

The deployment script does three things:

1. **Builds the production site** - `gatsby build --prefix-paths`
2. **Adds .nojekyll file** - Tells GitHub not to use Jekyll processing
3. **Pushes to gh-pages branch** - `gh-pages -d public` publishes the `public` folder

## Prerequisites

### 1. Git Configuration (One-Time Setup)

Make sure Git knows who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2. GitHub Authentication (One-Time Setup)

You need permission to push to the repository. Set up authentication using one of these methods:

**Option A: Personal Access Token (Recommended)**

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "SoCal NAM Deployment"
4. Select scopes: `repo` (Full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. When deploying for the first time, use this token as your password

**Option B: SSH Key**

1. Generate SSH key: `ssh-keygen -t ed25519 -C "your.email@example.com"`
2. Add to ssh-agent: `eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519`
3. Copy public key: `cat ~/.ssh/id_ed25519.pub`
4. Add to GitHub: Settings → SSH and GPG keys → New SSH key
5. Change git remote to SSH:
   ```bash
   git remote set-url origin git@github.com:pentecostal-city-church/pcc-nam-website-ui.git
   ```

### 3. Verify Repository Access

```bash
git remote -v
```

Should show:
```
origin  https://github.com/pentecostal-city-church/pcc-nam-website-ui.git (fetch)
origin  https://github.com/pentecostal-city-church/pcc-nam-website-ui.git (push)
```

Or with SSH:
```
origin  git@github.com:pentecostal-city-church/pcc-nam-website-ui.git (fetch)
origin  git@github.com:pentecostal-city-church/pcc-nam-website-ui.git (push)
```

## Deployment Methods

### Method 1: Deploy from Docker (Recommended)

If you're using Docker (which you should be), deploy from inside the container:

```bash
# Make sure Docker is running
docker-compose up -d

# Run deploy command inside container
docker-compose exec gatsby-dev npm run deploy
```

This will:
- Build the site inside the Docker container
- Push to the `gh-pages` branch
- Take 3-5 minutes depending on your internet speed

**What you'll see:**
```
> gatsby build --prefix-paths && touch public/.nojekyll && gh-pages -d public

success Building production JavaScript and CSS bundles - 45.234s
success Building HTML renderer - 5.392s
success Building static HTML for pages - 12.854s
success Generating image thumbnails - 23.123s
success onPostBuild - 0.034s
info Done building in 86.789 sec

Published
```

### Method 2: Deploy Locally (Without Docker)

If you have Node.js installed locally:

```bash
npm run deploy
```

**Note:** This requires Node.js 14+ and all dependencies installed locally.

## After Deployment

### 1. Verify the gh-pages Branch

```bash
git fetch origin
git branch -r
```

You should see `origin/gh-pages` in the list.

### 2. Configure GitHub Pages (One-Time Setup)

**Important:** This needs to be done after the FIRST deployment.

1. Go to https://github.com/pentecostal-city-church/pcc-nam-website-ui/settings/pages
2. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click "Save"
4. Under "Custom domain", enter: `www.socalnam.org`
5. Click "Save"
6. Wait for DNS check (green checkmark will appear when ready)
7. Optional: Check "Enforce HTTPS" (recommended)

### 3. DNS Configuration (One-Time Setup)

**If you haven't already**, configure your domain's DNS:

Add these records to your DNS provider (wherever you bought socalnam.org):

**For apex domain (socalnam.org):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain (www.socalnam.org):**
```
Type: CNAME
Name: www
Value: pentecostal-city-church.github.io
```

**Note:** DNS changes can take 24-48 hours to propagate worldwide.

### 4. Wait for Deployment

GitHub Pages builds and deploys automatically after you push to `gh-pages`.

- Usually takes 1-3 minutes
- Watch progress at: https://github.com/pentecostal-city-church/pcc-nam-website-ui/actions

### 5. Verify Live Site

After deployment completes, visit:
- https://pentecostal-city-church.github.io/pcc-nam-website-ui/ (direct GitHub Pages URL)
- https://www.socalnam.org (once DNS is configured)

**Clear your browser cache** (Ctrl+Shift+R / Cmd+Shift+R) to see latest changes.

## Complete Workflow Example

Here's the full workflow from making changes to going live:

```bash
# 1. Start Docker and make your changes
docker-compose up

# 2. Test locally at http://localhost:8000
# (Make your edits using Decap CMS or Claude Code)

# 3. Stop Docker (Ctrl+C or in another terminal)
docker-compose down

# 4. Commit your changes to main branch
git add .
git commit -m "Update homepage content and fix broken links"
git push origin main

# 5. Deploy to GitHub Pages
docker-compose up -d
docker-compose exec gatsby-dev npm run deploy

# 6. Wait 1-3 minutes, then check www.socalnam.org
```

## Deployment Checklist

Use this checklist every time you deploy:

- [ ] All changes committed to Git
- [ ] Changes pushed to `main` branch
- [ ] Tested locally (Docker or npm run start)
- [ ] No console errors in browser
- [ ] All images loading correctly
- [ ] All links working
- [ ] Run `npm run deploy` or `docker-compose exec gatsby-dev npm run deploy`
- [ ] Wait for GitHub Actions to complete
- [ ] Clear browser cache and verify live site
- [ ] Check site on mobile device

## Troubleshooting

### Problem: "Permission denied" or "Authentication failed"

**Solution:** Set up GitHub authentication (see Prerequisites above)

```bash
# If using HTTPS, you need a Personal Access Token
# When prompted for password, use your PAT, not your GitHub password

# Or switch to SSH:
git remote set-url origin git@github.com:pentecostal-city-church/pcc-nam-website-ui.git
```

### Problem: "Failed to build"

**Solution:** Check for syntax errors in your code

```bash
# Run build locally to see detailed errors
docker-compose exec gatsby-dev gatsby build --verbose
```

Common causes:
- Syntax errors in JavaScript/JSX files
- Missing closing tags in components
- Broken imports
- Invalid markdown in content files

### Problem: "Deploy succeeds but site shows old content"

**Solution:** Clear your browser cache

1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Or clear all cache in browser settings
3. Or open in private/incognito window

### Problem: "404 Not Found" after deployment

**Solution:** Check GitHub Pages settings

1. Go to repo Settings → Pages
2. Verify source is set to `gh-pages` branch
3. Verify custom domain is `www.socalnam.org`
4. Wait a few more minutes (can take up to 10 minutes)

### Problem: Custom domain not working

**Solution:** Check DNS configuration

```bash
# Check if DNS is configured correctly
nslookup www.socalnam.org

# Should return GitHub's IP addresses
# 185.199.108.153, 185.199.109.153, etc.
```

If not:
1. Log in to your domain registrar
2. Verify DNS records are correct (see DNS Configuration above)
3. Wait 24-48 hours for DNS propagation

### Problem: "Cannot read properties of undefined"

**Solution:** This usually means the Gatsby cache is corrupted

```bash
# Clean cache and rebuild
docker-compose down
docker-compose up --build
```

Or inside Docker:
```bash
docker-compose exec gatsby-dev gatsby clean
docker-compose exec gatsby-dev gatsby build
```

### Problem: Images not loading on live site

**Solution:** Check image paths

Images should use paths starting with `/img/` not `img/`

**Correct:**
```jsx
<img src="/img/my-photo.jpg" />
```

**Wrong:**
```jsx
<img src="img/my-photo.jpg" />
<img src="./img/my-photo.jpg" />
<img src="../img/my-photo.jpg" />
```

### Problem: Deploy is very slow

This is normal! Building a Gatsby site can take 3-10 minutes depending on:
- Number of pages
- Number of images
- Internet speed
- Computer performance

To speed it up:
- Close other applications
- Use wired internet connection
- Deploy during off-peak hours

## Advanced: Deploy to Different Branch

If you want to test deployment without affecting the live site:

```bash
# Deploy to a test branch
docker-compose exec gatsby-dev npx gh-pages -d public -b gh-pages-test

# View at: https://pentecostal-city-church.github.io/pcc-nam-website-ui/
# (You'd need to change GitHub Pages settings to use gh-pages-test branch)
```

## Rollback (Undo a Deployment)

If you deployed something broken and need to undo it:

### Method 1: Redeploy Previous Version

```bash
# Find the commit hash before the bad deployment
git log --oneline

# Check out that commit
git checkout abc123

# Redeploy
docker-compose exec gatsby-dev npm run deploy

# Go back to main
git checkout main
```

### Method 2: Revert gh-pages Branch

```bash
# Fetch latest
git fetch origin

# Check out gh-pages branch
git checkout gh-pages

# Reset to previous commit
git log --oneline
git reset --hard abc123

# Force push
git push origin gh-pages --force

# Go back to main
git checkout main
```

**Warning:** Force pushing is dangerous. Only do this in emergencies!

## Deployment Frequency

**How often should you deploy?**

- **After every significant change** - So the live site stays up to date
- **Before events or announcements** - Give yourself time to test
- **Not too frequently** - Each deploy takes 3-5 minutes

**Best practice:**
- Make multiple changes locally
- Test thoroughly
- Commit everything
- Deploy once

## GitHub Actions Monitoring

Watch your deployment progress:

1. Go to https://github.com/pentecostal-city-church/pcc-nam-website-ui/actions
2. You'll see "pages build and deployment" workflows
3. Green checkmark = success
4. Red X = failed (click to see error logs)

## Custom Deploy Script (Optional)

You can create a simplified deploy script. Create `deploy.sh`:

```bash
#!/bin/bash

echo "🚀 Starting deployment process..."

# Make sure we're on main branch
if [ "$(git branch --show-current)" != "main" ]; then
    echo "❌ Error: You must be on the main branch to deploy"
    exit 1
fi

# Make sure everything is committed
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ Error: You have uncommitted changes"
    echo "Please commit or stash your changes before deploying"
    exit 1
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Deploy
echo "🏗️  Building and deploying..."
docker-compose exec gatsby-dev npm run deploy

echo "✅ Deployment complete!"
echo "🌐 Your site will be live in 1-3 minutes at www.socalnam.org"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Then deploy with:
```bash
./deploy.sh
```

## Need Help?

If deployment fails and you can't figure out why:

1. **Check GitHub Actions logs** - Most detailed error info
2. **Run build locally** - `docker-compose exec gatsby-dev gatsby build --verbose`
3. **Check git status** - `git status` and `git log`
4. **Contact the developer** - austin.th.liu@gmail.com

## Summary

**Quick Deploy Command:**
```bash
docker-compose up -d && docker-compose exec gatsby-dev npm run deploy
```

That's it! Your site will be live in a few minutes. 🎉
