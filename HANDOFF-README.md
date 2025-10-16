# SoCal NAM Website - Non-Developer Handoff Guide

Welcome! This guide will help you maintain and update the SoCal NAM website using Docker and Claude Code. No prior development experience required.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [Two Ways to Make Changes](#two-ways-to-make-changes)
4. [Common Tasks](#common-tasks)
5. [Working with Claude Code](#working-with-claude-code)
6. [Deploying Changes](#deploying-changes)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, install these tools on your computer:

1. **Docker Desktop** - [Download here](https://www.docker.com/products/docker-desktop/)
   - This runs the website in a container so you don't need to install Node.js or other dependencies
   - After installing, make sure Docker Desktop is running (you'll see a whale icon in your system tray)

2. **Git** - [Download here](https://git-scm.com/downloads)
   - This manages code versions and syncs with GitHub

3. **A Code Editor** (Choose one):
   - [Visual Studio Code](https://code.visualstudio.com/) (Recommended)
   - [Sublime Text](https://www.sublimetext.com/)
   - Any text editor you prefer

4. **GitHub Account** - You should already have access to this repository

---

## Quick Start

### First Time Setup

1. **Clone the repository to your computer:**
   ```bash
   git clone https://github.com/pentecostal-city-church/pcc-nam-website-ui.git
   cd pcc-nam-website-ui
   ```

2. **Start the website with Docker:**
   ```bash
   docker-compose up
   ```

   The first time will take 5-10 minutes as it downloads and installs everything.

   When you see `You can now view gatsby-starter-decap-cms in the browser`, the site is ready!

3. **View the website:**
   - Open your browser and go to: http://localhost:8000
   - The CMS admin interface is at: http://localhost:8000/admin

4. **Stop the website:**
   - Press `Ctrl+C` in the terminal
   - Or run: `docker-compose down`

---

## Two Ways to Make Changes

You have **two options** for updating the website:

### Option A: Decap CMS (Web Interface) - Easiest

**Best for:** Editing text, images, and page content

**How to use:**
1. Start the website: `docker-compose up`
2. Go to http://localhost:8000/admin
3. Log in (you'll need Netlify Identity set up, or use the local backend)
4. Click on the page you want to edit
5. Make your changes using the visual editor
6. Click "Publish"
7. Commit and push your changes (see [Deploying Changes](#deploying-changes))

**What you can edit:**
- Page titles, headings, and body text
- Images (upload new ones or swap existing)
- Blog posts
- Committee member info
- Contact information
- Navigation links

### Option B: Direct Code Editing with Claude Code

**Best for:**
- Styling changes (colors, fonts, layouts)
- Adding new components or features
- Bulk updates across multiple files
- Fixing broken links or images

**How to use:** See [Working with Claude Code](#working-with-claude-code) section below.

---

## Common Tasks

### Task 1: Change Button Text

**Using Decap CMS:**
1. Go to http://localhost:8000/admin
2. Find the page with the button
3. Edit the button text field
4. Save and publish

**Using Claude Code:**
```
Tell Claude: "Change the 'Contact Us' button text to 'Get In Touch' on the homepage"
```

### Task 2: Update an Image

**Location of images:** All images are stored in `static/img/`

**Using Decap CMS:**
1. Go to the page editor
2. Click the image field
3. Upload a new image or select from existing ones
4. Save

**Using Claude Code:**
```
Tell Claude: "Replace the header image on the homepage with the new file banner-2024.jpg from static/img/"
```

**Manual Method:**
1. Add your new image to `static/img/`
2. Open the relevant markdown file (e.g., `src/pages/index.md`)
3. Find the image line: `image: /img/old-image.jpg`
4. Change it to: `image: /img/banner-2024.jpg`

### Task 3: Change Link URLs

**Common link locations:**
- Navigation menu: `src/components/Navbar.js`
- Footer: `src/components/Footer/Footer.js`
- Individual pages: `src/pages/[page-name]/index.md`

**Using Claude Code:**
```
Tell Claude: "Update the 'Give' page link in the navigation menu to point to /donate instead of /give"
```

### Task 4: Update Text Content

**Location of page content:** `src/pages/[page-name]/index.md`

Example pages:
- Homepage: `src/pages/index.md`
- About: `src/pages/about/index.md`
- Committee: `src/pages/committee/index.md`
- Ministries: `src/pages/ministries/index.md`

**Using Claude Code:**
```
Tell Claude: "Change the heading on the Ministries page from 'Our Ministries' to 'NAM Ministries'"
```

### Task 5: Change Colors or Fonts

**Styling files location:**
- Global styles: `src/styles/GlobalStyles.js`
- Component-specific styles: `src/components/[component-name]/[component-name]Styles.js`

**Using Claude Code:**
```
Tell Claude: "Change the primary button color from blue to green throughout the site"
```

Or:
```
Tell Claude: "Change all headings to use the font 'Heebo' instead of the current font"
```

### Task 6: Add a New Blog Post

**Using Decap CMS:**
1. Go to http://localhost:8000/admin
2. Click "Blog" in the sidebar
3. Click "New Blog"
4. Fill in the fields:
   - Title
   - Publish Date
   - Description
   - Body (use the rich text editor)
   - Upload a featured image
   - Add tags
5. Click "Publish"

**Manual Method:**
1. Create a new file in `src/pages/blog/`
2. Name it: `YYYY-MM-DD-title-of-post.md`
3. Copy the format from an existing blog post
4. Fill in your content

---

## Working with Claude Code

### What is Claude Code?

Claude Code is an AI assistant that can help you make changes to the website by understanding natural language instructions.

### Setup Claude Code

1. **Install Claude Code CLI:**
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

2. **Start Claude Code in this project:**
   ```bash
   cd pcc-nam-website-ui
   claude
   ```

3. **Make sure Docker is running:**
   Before asking Claude Code to make changes, start the website:
   ```bash
   docker-compose up
   ```

### How to Ask Claude Code for Help

**Be specific and clear.** Here are good examples:

#### Example 1: Simple Text Change
```
"Change the phone number in the footer from (555) 123-4567 to (555) 987-6543"
```

#### Example 2: Style Change
```
"Make all the buttons on the site have rounded corners instead of sharp corners"
```

#### Example 3: Image Update
```
"I added a new logo file called 'new-logo-2024.png' to the static/img folder.
Replace the old logo with this new one everywhere it appears on the site."
```

#### Example 4: Link Update
```
"Update all instances of the old website link 'http://oldsite.com' to 'https://newsite.com'"
```

#### Example 5: Multiple Changes
```
"I need to update the Committee page:
1. Change the page title to 'NAM Committee 2024'
2. Update John Smith's title from 'Secretary' to 'Treasurer'
3. Add a new committee member: Jane Doe, Role: Secretary"
```

### Tips for Working with Claude Code

1. **Start the Docker container first** - Always run `docker-compose up` before asking Claude Code to make changes

2. **Test changes locally** - After Claude makes changes, view them at http://localhost:8000

3. **Ask questions** - If you're not sure how to phrase something, just ask:
   ```
   "How do I change the background color of the homepage hero section?"
   ```

4. **Request explanations** - Have Claude explain what it's doing:
   ```
   "Explain what files you're changing and why"
   ```

5. **Break down complex tasks** - If you have a lot of changes, do them in steps:
   ```
   Step 1: "First, update all the text content on the About page"
   Step 2: "Now update the images on that same page"
   Step 3: "Finally, change the page background color"
   ```

### What Claude Code Can Help With

✅ **Can do easily:**
- Changing text, links, and button labels
- Updating colors, fonts, and spacing
- Swapping images (if you provide the new image)
- Fixing broken links
- Updating CSS styles
- Adding or removing content sections
- Modifying page layouts

⚠️ **Needs more guidance:**
- Adding completely new page types
- Integrating third-party services
- Major structural changes to the site

❌ **Should not do without developer help:**
- Changing the build system or dependencies
- Modifying security settings
- Major performance optimizations

### Working with Image Data in Claude Code

Claude Code can analyze and work with images in multiple ways, making it easy to update pictures or create designs based on visual references.

#### How to Share Images with Claude Code

There are **three ways** to send images to Claude Code:

1. **Provide a file path:**
   ```
   "Analyze this screenshot: /Users/yourname/Desktop/error-screenshot.png"
   ```

   Or use relative paths:
   ```
   "Look at the design mockup in static/img/homepage-design.png"
   ```

2. **Drag and drop:**
   - Drag an image file directly into the Claude Code terminal window

3. **Paste from clipboard:**
   - Copy an image (from a screenshot or any source)
   - Press `Ctrl+V` (not `Cmd+V`) in the Claude Code terminal

#### What You Can Do with Images

**1. Analyze Screenshots for Debugging:**
```
"Here's a screenshot of the error I'm seeing: /Users/yourname/Desktop/error.png
Can you help me fix this?"
```

**2. Generate Code from Design Mockups:**
```
"I have a design mockup for the new homepage hero section at static/img/new-hero-design.png
Can you create the HTML and CSS to match this design?"
```

**3. Review Current Site Pages:**
```
"Here's a screenshot of how the Committee page currently looks.
I want to update it to have better spacing and a cleaner layout."
```
[Drag and drop or paste your screenshot]

**4. Compare Before/After:**
```
"Here's the current homepage: /path/to/current.png
And here's what I want it to look like: /path/to/desired.png
Can you update the styles to match the desired version?"
```

**5. Extract Information from Visual References:**
```
"Here's a photo of the printed program with all the committee member names and titles.
Can you update the Committee page with this information?"
```
[Provide image of the printed program]

**6. Identify and Fix Visual Issues:**
```
"This is what the mobile view looks like on my phone.
The buttons are overlapping - can you fix this?"
```
[Paste screenshot of mobile view]

#### Tips for Working with Images

1. **Use descriptive filenames** - Instead of `IMG_1234.jpg`, use `homepage-hero-mockup.jpg`

2. **Specify what you want analyzed** - Be clear about what you need:
   - "Extract the text from this image"
   - "Match the colors in this design"
   - "Identify what's wrong in this screenshot"
   - "Create CSS that matches this layout"

3. **Provide context** - Help Claude understand the image:
   ```
   "This is a mockup from our designer for the new About page.
   Focus on the header section layout and typography."
   ```

4. **Multiple images** - You can reference multiple images in one request:
   ```
   "Compare these three design options and tell me which would be easiest to implement:
   - static/img/option1.png
   - static/img/option2.png
   - static/img/option3.png"
   ```

5. **Store reference images** - Keep design mockups and references in `static/img/` for easy access:
   ```
   static/img/
   ├── mockups/
   │   ├── homepage-design-v2.png
   │   ├── committee-layout.png
   │   └── mobile-menu-design.png
   └── references/
       ├── color-palette.png
       └── typography-guide.png
   ```

#### Common Image-Based Workflows

**Workflow 1: Implementing a New Design**
```
Step 1: "Here's the design mockup: static/img/mockups/new-homepage.png
        What components and styles would we need to create this?"

Step 2: "Great! Now please implement the header section from that design."

Step 3: "Now implement the content sections below the header."
```

**Workflow 2: Fixing Visual Bugs**
```
"The homepage looks wrong on mobile. Here's a screenshot: [paste image]
The navigation menu is overlapping the hero text. Can you fix this?"
```

**Workflow 3: Matching Brand Guidelines**
```
"Here's our brand style guide: static/img/references/brand-guide.png
Please update the site colors, fonts, and button styles to match this guide."
```

**Workflow 4: Updating Multiple Images**
```
"I've added new committee photos to static/img/committee-2024/
Please update the Committee page to use these new images:
- john-smith-2024.jpg
- jane-doe-2024.jpg
- mike-johnson-2024.jpg"
```

#### Image Format Support

Claude Code can work with these image formats:
- PNG (.png)
- JPEG (.jpg, .jpeg)
- GIF (.gif)
- WebP (.webp)
- SVG (for viewing, not editing)

---

## Deploying Changes

Once you've made changes locally and tested them, follow these steps to publish to the live website.

**📖 For detailed deployment instructions, troubleshooting, and setup, see [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)**

### 🚀 Automatic Deployment (Recommended)

**Good news!** The site is configured with automatic deployment. Simply push your changes to GitHub and the site will automatically build and deploy:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

That's it! GitHub Actions will automatically:
1. Build the site
2. Deploy to GitHub Pages
3. Your changes will be live in 5-10 minutes

You can watch the deployment progress at: https://github.com/pentecostal-city-church/pcc-nam-website-ui/actions

### Manual Deploy (Alternative)

If you prefer to deploy manually or if automatic deployment fails, follow these steps:

### Quick Deploy (Summary)

### Step 1: Review Your Changes

```bash
# See what files you changed
git status

# See the specific changes in each file
git diff
```

### Step 2: Stage Your Changes

```bash
# Add all changed files
git add .

# Or add specific files
git add src/pages/index.md static/img/new-image.jpg
```

### Step 3: Commit Your Changes

```bash
# Commit with a descriptive message
git commit -m "Update homepage hero image and text"
```

**Good commit message examples:**
- `"Update Committee page with 2024 members"`
- `"Change primary button color to match brand"`
- `"Fix broken link on Ministries page"`
- `"Add new blog post about Easter event"`

### Step 4: Push to GitHub

```bash
git push origin main
```

If this is your first time pushing, you may need to set up authentication with GitHub.

### Step 5: Deploy to GitHub Pages

```bash
# Clean old build files and deploy
npm run deploy
```

Or with Docker:
```bash
docker-compose exec gatsby-dev npm run deploy
```

### Step 6: Verify Custom Domain

**IMPORTANT:** After deploying, you must verify the custom domain is still configured.

1. Go to [GitHub Pages settings](https://github.com/pentecostal-city-church/pcc-nam-website-ui/settings/pages)
2. Scroll down to the "Custom domain" section
3. If the field is empty or shows a different domain, enter: `www.socalnam.org`
4. Click "Save"
5. Wait a few minutes for DNS to propagate

**Why this is necessary:** Sometimes GitHub Pages removes the custom domain setting after deployment, which would cause the site to only be accessible at the default GitHub Pages URL instead of www.socalnam.org.

Your changes should be live in 5-10 minutes!

---

## Troubleshooting

### Problem: Docker container won't start

**Solution:**
```bash
# Stop any running containers
docker-compose down

# Remove old containers and volumes
docker-compose down -v

# Rebuild and start fresh
docker-compose up --build
```

### Problem: Changes don't appear on the site

**Solution:**
1. Make sure you saved the file
2. Gatsby might need to rebuild - wait 30 seconds
3. Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. Check the terminal for errors

### Problem: "Port 8000 already in use"

**Solution:**
```bash
# Find what's using port 8000
lsof -i :8000

# Kill that process (replace PID with the number from above)
kill -9 PID

# Or change the port in docker-compose.yml
```

### Problem: Git push rejected

**Solution:**
```bash
# Pull the latest changes first
git pull origin main

# Then try pushing again
git push origin main
```

### Problem: Site builds but images don't show

**Solution:**
1. Check image paths - they should start with `/img/` not `img/`
2. Verify the image exists in `static/img/`
3. Check the image file name matches exactly (case-sensitive)
4. Clear Gatsby cache:
   ```bash
   docker-compose exec gatsby-dev gatsby clean
   ```

### Problem: Decap CMS won't load

**Solution:**
1. Make sure you're at http://localhost:8000/admin (not /admin/)
2. Check that `local_backend: true` is set in `static/admin/config.yml`
3. Verify you're logged in to Netlify Identity (if using that)

### Problem: Claude Code makes a mistake

**Solution:**
1. **Undo with Git:**
   ```bash
   # Undo uncommitted changes to a file
   git checkout -- filename.js

   # Undo all uncommitted changes
   git reset --hard
   ```

2. **Ask Claude to fix it:**
   ```
   "That change broke the layout. Can you revert it and try a different approach?"
   ```

3. **If something breaks badly:**
   ```bash
   # See recent commits
   git log --oneline

   # Go back to a previous commit (replace COMMIT_HASH)
   git reset --hard COMMIT_HASH
   ```

---

## File Structure Reference

Here's where to find things:

```
pcc-nam-website-ui/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer/         # Footer component
│   │   ├── Navbar.js       # Navigation menu
│   │   └── ...
│   ├── pages/              # All page content (markdown files)
│   │   ├── index.md        # Homepage
│   │   ├── about/
│   │   ├── blog/           # Blog posts
│   │   ├── committee/
│   │   ├── ministries/
│   │   └── ...
│   ├── styles/             # Global styles
│   └── templates/          # Page templates (how pages render)
├── static/
│   ├── img/                # All images (PUT NEW IMAGES HERE)
│   └── admin/
│       └── config.yml      # Decap CMS configuration
├── gatsby-config.js        # Site configuration
├── package.json            # Project dependencies
├── Dockerfile              # Docker setup
├── docker-compose.yml      # Docker services
└── README.md               # Original developer docs
```

---

## Quick Command Reference

### Docker Commands
```bash
# Start the website
docker-compose up

# Start in background
docker-compose up -d

# Stop the website
docker-compose down

# Rebuild after config changes
docker-compose up --build

# View logs
docker-compose logs -f

# Run commands inside container
docker-compose exec gatsby-dev [command]
```

### Git Commands
```bash
# See changes
git status
git diff

# Save changes
git add .
git commit -m "Description of changes"
git push origin main

# Get latest updates
git pull origin main

# Undo changes
git checkout -- filename.js
git reset --hard
```

### Gatsby Commands (inside Docker)
```bash
# Clean cache
docker-compose exec gatsby-dev gatsby clean

# Build production version
docker-compose exec gatsby-dev gatsby build

# Deploy to GitHub Pages
docker-compose exec gatsby-dev npm run deploy
```

---

## Getting Help

### If you're stuck:

1. **Check this guide** - Use Ctrl+F to search for keywords
2. **Check the Troubleshooting section** - Common issues are covered there
3. **Ask Claude Code** - It can help explain things:
   ```
   "I don't understand how to change the navigation menu. Can you explain the file structure?"
   ```
4. **Check Git history** - See how similar changes were made before:
   ```bash
   git log --all --full-history -- path/to/file.js
   ```
5. **Contact the developer:**
   - Austin Liu: austin.th.liu@gmail.com

### Useful Resources

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Docker Documentation](https://docs.docker.com/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

---

## Best Practices

1. **Always test locally before deploying**
   - Start Docker, make changes, view at http://localhost:8000
   - Test on different browsers if possible

2. **Make small, focused commits**
   - One change at a time makes it easier to undo mistakes
   - Write clear commit messages

3. **Keep a backup branch**
   ```bash
   # Create a backup before major changes
   git checkout -b backup-2024-03-15
   git checkout main
   ```

4. **Update images properly**
   - Optimize images before uploading (use https://tinypng.com/)
   - Use descriptive filenames: `committee-john-smith.jpg` not `img123.jpg`
   - Keep images in `static/img/`

5. **Document your changes**
   - If you add something new, add a note here for the next person
   - Consider keeping a changelog file

---

## Common Claude Code Prompts

Copy and paste these, adjusting as needed:

### Content Updates
```
"Change the [SECTION] text on the [PAGE] page from '[OLD TEXT]' to '[NEW TEXT]'"

"Update the heading on [PAGE] to say '[NEW HEADING]'"

"Add this paragraph to the [PAGE] page after the [SECTION] section: [PARAGRAPH TEXT]"
```

### Image Updates
```
"Replace all instances of [OLD IMAGE] with [NEW IMAGE] from the static/img folder"

"Change the homepage hero image to [IMAGE FILENAME]"

"Update the committee member photo for [NAME] to [NEW IMAGE]"
```

### Link Updates
```
"Change the [BUTTON/LINK] URL on [PAGE] from [OLD URL] to [NEW URL]"

"Update all external links to [OLD DOMAIN] to point to [NEW DOMAIN] instead"

"Fix the broken link on [PAGE] that points to [BROKEN URL]"
```

### Style Changes
```
"Change the primary color throughout the site from [COLOR] to [NEW COLOR]"

"Make all buttons have [STYLE DESCRIPTION]"

"Increase the font size of [ELEMENT] by [AMOUNT]"

"Add more spacing between sections on the [PAGE] page"
```

### Layout Changes
```
"Move the [SECTION] above the [OTHER SECTION] on [PAGE]"

"Make the [COMPONENT] full width instead of centered"

"Change the [PAGE] layout to have [DESCRIPTION OF LAYOUT]"
```

---

Good luck! Remember: When in doubt, ask Claude Code for help. It's designed to guide you through these tasks.
