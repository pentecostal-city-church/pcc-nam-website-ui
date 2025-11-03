# Beginner's Guide: Working with the PCC NAM Website Project

Welcome! This guide will walk you through how to access this project, make changes, and submit your updates. No technical experience needed!

---

## Table of Contents
1. [Understanding the Setup](#understanding-the-setup)
2. [Accessing Your Project](#accessing-your-project)
3. [Making Changes Using Prompts](#making-changes-using-prompts)
4. [Complete Workflow: From Prompt to Deployment](#complete-workflow-from-prompt-to-deployment)
5. [Understanding & Fixing Errors](#understanding--fixing-errors)
6. [Submitting Your Changes](#submitting-your-changes)
7. [Useful Tips](#useful-tips)

---

## Understanding the Setup

### What is a "Repository" (or "Repo")?
A repository is like a folder that stores all the code for a website. Think of it as a project container that keeps everything organized.

### What is a "Branch"?
A branch is like a separate copy of your project where you can make changes without affecting the main version. This is helpful because you can work on changes, test them, and then merge them back when they're ready.

**Your current branch:** `spark-lab` - This is your working branch where changes will be made.

### What is a "Pull Request" (PR)?
A Pull Request is like saying "I've made some changes, please review and approve them before adding them to the main project." It's how teams share updates safely.

---

## Accessing Your Project

### Step 1: Open the Project in Your Browser
Your project is running in a cloud environment. You don't need to install anything on your computer!

**To see the live website preview:**
Visit: https://builder.io/app/projects/1ebb7a412a774d3dad4d59c752a3e062/aura-lab

This is your **preview** - you'll see your website update here in real-time as you make changes.

### Step 2: Access the Code Editor
The code editor interface is where you can:
- View and edit code files
- See the file structure
- Make changes using AI prompts

You're already in this editor! It's the interface where you're reading this and making requests.

### Step 3: Understand Your Repository Location
- **Repository Name:** pentecostal-city-church/pcc-nam-website-ui
- **Current Branch:** spark-lab (this is where your changes go)
- **What that means:** You're working on the "spark-lab" branch of the PCC NAM website project

---

## Making Changes Using Prompts

### What Are Prompts?
Prompts are simple English requests you type to ask the AI assistant to make changes to your website. You don't need to know how to code!

### How to Make a Change

#### Step 1: Write Your Request
Think about what you want to change. For example:
- "Change the button color from red to blue"
- "Add a new section above the schedule"
- "Fix the spelling of 'November' in the schedule"

#### Step 2: Submit Your Prompt
1. Look for the text input box at the bottom of the screen
2. Type your request in clear, simple English
3. Press Enter or click Send

**Example prompt:**
```
"Can you make the subtitle 'SOCAL NAM KEYNOTE EVENT' have outlined text styling?"
```

#### Step 3: Watch the Changes Happen
- The AI assistant will read your request
- It will make the changes to the code
- Your live preview will update automatically
- You'll see the results in real-time in the browser preview

### Tips for Writing Good Prompts
- **Be specific:** "Change the padding" is less clear than "Add 8px left and right padding to the drawer content"
- **Reference page names:** "On the /re-source page, change..." helps the assistant find the right place
- **Describe the result:** Tell the assistant what you want to see, not just what to do

---

## First-Time Setup: Logging into GitHub

**Important:** This section is for first-time users who need to access the GitHub repository.

### Step 1: Navigate to GitHub

1. Open your web browser
2. Go to: **https://github.com**

### Step 2: Log In

1. Click the **"Sign in"** button in the top-right corner
2. Select Sign In Using Google
3. Click **"Sign in"** and use the credentials
   

### Step 3: Verify Access

After logging in:
1. Click on your profile icon in the top-right
2. You should see "pentecostal-city-church" in the organizations list
3. Click on it to access the organization

### Step 4: Navigate to the Repository

1. From the organization page, click **"Repositories"**
2. Find and click on **"pcc-nam-website-ui"**
3. You now have access to the project!

### Security Recommendations

⚠️ **Important Security Note:**
- This is a shared development account
- **Change the password** after your first login for better security
- Go to Settings → Password and Security
- Use a strong, unique password
- Consider enabling two-factor authentication (2FA)
---

## Complete Workflow: From Prompt to Deployment

This section shows you the complete process of making a change in Builder.io, creating a Pull Request (PR), and deploying it to the live website at www.socalnam.org.

### The Full Process Overview

Here's what happens when you make a change:
1. **Make changes** in Builder.io using prompts
2. **Review your changes** in the Builder.io preview
3. **Create a Pull Request** to submit your changes
4. **Navigate to GitHub** to review and merge the PR
5. **Automatic deployment** happens via GitHub Actions
6. **See your changes live** at www.socalnam.org

Let's walk through each step with screenshots!

---

### Step 1: Making Changes in Builder.io

![Builder.io Prompt Area](/img/guide/how-to-1.png)

**Where to make changes:**
- Look at the bottom of the Builder.io interface
- You'll see a text input area (shown in the screenshot above)
- This is where you type your prompts to make changes

**Example prompts:**
```
"Change the schedule title color to yellow"
"Add a new section about upcoming events"
"Fix the spacing between the buttons"
```

**What happens next:**
- The AI assistant reads your prompt
- Makes the changes to the code
- Shows you a preview of the changes
- You can make multiple changes before creating a PR

---

### Step 2: Creating a Pull Request

![Create PR Button](/img/guide/how-to-2.png)

**When you're ready to submit your changes:**

1. **Review your changes** in the Builder.io preview
2. **Look for the "Create PR" button** (shown in screenshot above)
3. **Click the button** to start creating your Pull Request
4. **Add a description** of what you changed (optional but helpful)

**Example PR descriptions:**
```
"Updated RE:SOURCE page schedule section colors"
"Fixed navigation menu spacing on mobile"
"Added new event section to homepage"
```

---

### Step 3: Getting the GitHub PR Link

![GitHub PR Link](/img/guide/how-to-3.png)

**After creating the PR:**

1. Builder.io will show you a **link to your GitHub Pull Request** (shown in screenshot)
2. **Click this link** - it will open GitHub in a new tab
3. This takes you to the PR page where you can review and merge

**What the PR link looks like:**
```
https://github.com/pentecostal-city-church/pcc-nam-website-ui/pull/123
```

---

### Step 4: Navigating to Your Organization on GitHub

![GitHub Organization](/img/guide/how-to-4.png)

**If you need to find your PR manually:**

1. **Go to GitHub.com** and log in
2. **Click on your organization icon** in the top-left (shown in screenshot)
3. **Look for "pentecostal-city-church"** in the dropdown
4. **Click on the organization name**

---

### Step 5: Finding Your Repository

![Repository Link](/img/guide/how-to-5.png)

**From your organization page:**

1. **Look for the "Repositories" tab** (shown in screenshot)
2. **Find "pcc-nam-website-ui"** in the list
3. **Click on the repository name**
4. **Click on "Pull requests" tab** at the top
5. **Find your PR** in the list (it will be the most recent one)

---

### Step 6: Merging the Pull Request

![Merge PR Button](/img/guide/how-to-6.png)

**On the Pull Request page:**

1. **Review the changes** - scroll down to see what was modified
2. **Check the status** - make sure all checks are passing (green checkmarks)
3. **Click the "Merge pull request" button** (shown in screenshot)
4. **Confirm the merge** by clicking the confirmation button
5. **Delete the branch** (optional) - click "Delete branch" button after merging

**Important notes:**
- ✅ **Green checkmarks** mean the code is ready to merge
- ❌ **Red X marks** mean there are errors - don't merge yet
- ⏳ **Yellow dots** mean checks are still running - wait for them to finish

---

### Step 7: Automatic Deployment

**After you merge the PR, magic happens automatically!**

1. **GitHub Actions triggers** - this is an automated workflow
2. **The website builds** - all your changes are compiled
3. **Deployment happens** - the changes go live to www.socalnam.org
4. **Takes 2-5 minutes** - be patient!

**How to watch the deployment:**

1. **Go to the "Actions" tab** in your repository
2. **See the workflow running** - it will have a yellow dot (⏳) while building
3. **Green checkmark** (✅) means deployment succeeded!
4. **Red X** (❌) means there was an error - ask for help

**View the Actions page:**
```
https://github.com/pentecostal-city-church/pcc-nam-website-ui/actions
```

---

### Step 8: Seeing Your Changes Live

**Once deployment completes:**

1. **Visit www.socalnam.org** in your browser
2. **You might need to refresh** (press Ctrl+Shift+R or Cmd+Shift+R)
3. **Your changes are now live!** 🎉

**Troubleshooting:**
- **Changes not showing?** Clear your browser cache or try incognito mode
- **Page looks broken?** Check the Actions tab for deployment errors
- **Still having issues?** Ask the AI assistant for help

---

### Complete Example Walkthrough

Let's say you want to change the button color on the RE:SOURCE page from red to blue.

#### 1. Make the Change
```
Prompt: "On the RE:SOURCE page, change the Register button color from red to blue"
```

#### 2. Review in Builder.io
- Check the preview
- Make sure it looks right
- The button should now be blue

#### 3. Create Pull Request
- Click "Create PR" button in Builder.io
- Add description: "Changed Register button to blue on RE:SOURCE page"
- Submit the PR

#### 4. Get GitHub Link
- Builder.io shows you the link
- Click it to open GitHub

#### 5. Review on GitHub
- Check the "Files changed" tab
- See what code was modified
- Verify it looks correct

#### 6. Merge the PR
- Click "Merge pull request"
- Confirm the merge
- Delete the branch (optional)

#### 7. Wait for Deployment
- Go to Actions tab
- Wait for green checkmark (2-5 minutes)
- Deployment complete!

#### 8. Check Live Site
- Visit www.socalnam.org/re-source
- Refresh the page
- See your blue button live!

---

### Quick Reference: PR to Deployment

| Step | What to Do | Where |
|------|-----------|-------|
| 1. Make changes | Type prompts | Builder.io prompt area |
| 2. Create PR | Click "Create PR" | Builder.io top-right |
| 3. Get link | Click GitHub link | Builder.io notification |
| 4. Review PR | Check changes | GitHub PR page |
| 5. Merge PR | Click "Merge pull request" | GitHub PR page |
| 6. Watch deploy | Check Actions tab | GitHub Actions |
| 7. View live | Visit website | www.socalnam.org |

---

### Common Questions

**Q: How long does deployment take?**
A: Usually 2-5 minutes after merging the PR.

**Q: Can I make more changes while deployment is running?**
A: Yes! You can start working on new changes immediately.

**Q: What if the deployment fails?**
A: Check the Actions tab for error messages, then ask the AI assistant for help.

**Q: Can I undo a deployment?**
A: Yes, you can create a new PR that reverts the changes, or ask an admin to revert the merge.

**Q: Do I need to merge every PR immediately?**
A: No, you can leave PRs open for review and merge them later.

**Q: What if two people are working at the same time?**
A: GitHub handles this automatically - the second person will need to update their branch before merging.

---

## Understanding & Fixing Errors

### What is a Compilation Error?
A compilation error happens when the code has a mistake that prevents the website from running. It's like a grammar error in a sentence that makes it impossible to read.

### How to Spot an Error
1. **Red text in the preview:** If you see red text or error messages, something went wrong
2. **Preview goes blank:** Sometimes the page just stops working
3. **Changes don't appear:** If your changes don't show up, there might be an error

### How to Fix an Error

#### Step 1: Report It to the AI Assistant
In the chat, simply describe what happened:
```
"I'm getting a compilation error. The preview shows a blank page after I asked you to..."
```

#### Step 2: The Assistant Will Investigate
The AI will:
- Look at what went wrong
- Read the error messages
- Fix the problem in the code

#### Step 3: Check the Preview Again
Once the assistant says they've fixed it, look at your preview browser. It should work again!

### Common Error Types

**Syntax Error:** A typo or formatting mistake in the code
- **How it feels:** Usually shows up immediately after making a change
- **What to do:** Tell the assistant "I'm getting a syntax error" and describe what you were trying to change

**Missing File:** The code references a file that doesn't exist
- **How it feels:** Something looks broken or incomplete
- **What to do:** Tell the assistant which part isn't working

**Connection Error:** Can't reach something the website needs
- **How it feels:** The preview is blank or shows "Error"
- **What to do:** The assistant can help reconnect services

---

## Submitting Your Changes

### What Happens When You Submit Changes?
When you're happy with your changes, you submit them as a "Pull Request." This tells the project team "Here are my changes, please review and add them to the main project."

### Step 1: Review Your Changes
Before submitting, look at your preview:
- Does everything look correct?
- Are all your requested changes visible?
- Is the text formatted properly?
- Do all buttons and links work?

### Step 2: Click "Send PR" (or "Create Pull Request")
1. Look for a button in the top-right corner that says:
   - "Send PR" or
   - "Create Pull Request" or
   - "Push Code"
2. Click this button

### Step 3: Add a Description (Optional but Helpful)
You'll see a box asking "What did you change?"

Add a simple description like:
```
Changed the subtitle to outlined text styling for the RE:SOURCE keynote event header
```

This helps the team understand what you did and why.

### Step 4: Confirm Your Submission
1. Review your description
2. Click the final "Submit" or "Create PR" button
3. You'll see a confirmation message

### Step 5: What Happens Next?
- Your changes are sent to the project team
- They'll review your Pull Request
- They can approve it or ask you to make more changes
- Once approved, it becomes part of the official project

---

## Useful Tips

### Managing Your Work

**View Your Changes:**
- Use the "History" tab to see all changes you've made
- You can revert (undo) any change if something goes wrong at no cost

**Test Before Submitting:**
- Always check the preview before submitting a PR
- Make sure it looks exactly how you want it

**Ask Questions:**
- If you're unsure about something, just ask the AI assistant
- Describe what you want to accomplish, even if you're not sure how to do it

### Understanding the File Structure

You don't need to know all the file locations, but here are the important ones:

- **src/templates/** - Contains page templates (like the RE:SOURCE page)
- **src/components/** - Contains reusable UI pieces (buttons, headers, etc.)
- **src/pages/** - Contains individual page files
- **/img/** - Contains images and assets

When you describe where you want changes ("on the RE:SOURCE page"), the assistant finds the right files automatically.

### Preview vs. Live

- **Preview:** What you see at https://1ebb7a412a774d3dad4d59c752a3e062-5ca8fdfec9a64aa391ff3b210.fly.dev - This updates immediately as you make changes
- **Live:** The official website - This only updates after your PR is approved and merged

### Common Workflows

**Workflow 1: Make a Single Change**
1. Write a prompt describing your change
2. Check the preview
3. Click "Send PR"

**Workflow 2: Make Multiple Related Changes**
1. Make your first change with a prompt
2. Check the preview
3. Make your second change with another prompt
4. Check the preview again
5. Click "Send PR" (submits all changes together)

**Workflow 3: Fix a Problem**
1. Notice something isn't working
2. Ask the assistant to fix it
3. Check the preview
4. Click "Send PR" when it's right

---

## Getting Help

### If Something Goes Wrong
1. **Screenshot or describe** what you see on the screen
2. **Tell the assistant** what you were trying to do
3. **Ask a specific question:** "How do I undo a change?" or "Why isn't this working?"

### Resources
- **Builder.io Documentation:** https://www.builder.io/c/docs/projects
- **Git basics:** Ask the assistant "Can you explain what a pull request is?" for more info

---

## Quick Reference

| Task | What to Do |
|------|-----------|
| Make a change | Write a prompt describing what you want |
| See your changes | Look at the preview at the fly.dev URL |
| Find a file | Ask the assistant "Where is [thing] located?" |
| Undo a change | Click History tab and revert |
| Fix an error | Tell the assistant what went wrong |
| Submit changes | Click "Send PR" button in top-right |
| Review changes | Use the History tab to see what changed |

---

## Example: Complete Workflow

Let's say you want to change the button color on the RE:SOURCE page:

1. **Type your prompt:**
   ```
   "On the RE:SOURCE page, can you change the red Register button to blue?"
   ```

2. **Check the preview:**
   - Visit the preview URL
   - Look for the button
   - Verify it's now blue

3. **If it looks good:**
   - Click "Send PR" button
   - Add description: "Changed Register button color from red to blue on RE:SOURCE page"
   - Click "Create Pull Request"

4. **Done!**
   - Your change is submitted
   - The team will review and approve it

---

## You're Ready!

You now have all the tools you need to work on this project. Remember:
- Be clear and specific in your prompts
- Check the preview before submitting
- Ask the assistant if you have questions
- Don't worry about breaking things - you can always undo changes

Happy building! 🚀
