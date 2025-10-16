# Quick Reference Card - SoCal NAM Website

## Start Working

```bash
docker-compose up
```

Then open: **http://localhost:8000**

## Stop Working

Press `Ctrl+C` or run:
```bash
docker-compose down
```

## Deploy to Live Site

```bash
# 1. Commit changes
git add .
git commit -m "Description of changes"
git push origin main

# 2. Deploy
docker-compose up -d
docker-compose exec gatsby-dev npm run deploy

# 3. Wait 2-3 minutes, then visit www.socalnam.org
```

## Common Locations

| What | Where |
|------|-------|
| Images | `static/img/` |
| Pages | `src/pages/` |
| Homepage | `src/pages/index.md` |
| Navigation | `src/components/Navbar.js` |
| Footer | `src/components/Footer/Footer.js` |
| Blog posts | `src/pages/blog/` |
| CMS Admin | http://localhost:8000/admin |

## Ask Claude Code

```bash
claude
```

**Example prompts:**
- "Change the header image to banner-2024.jpg"
- "Update the phone number in the footer"
- "Change button colors from blue to green"
- "Fix the broken link on the About page"

## Emergency Reset

```bash
docker-compose down
git reset --hard
docker-compose up --build
```

## Get Help

- **Detailed Guide:** `HANDOFF-README.md`
- **Deploy Guide:** `DEPLOYMENT-GUIDE.md`
- **Developer:** austin.th.liu@gmail.com
