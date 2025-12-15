# Quick Start Guide - Bluesky Cleaning Service

Get your website up and running in 5 simple steps!

## Step 1: Update Contact Information (5 minutes)

Open `index.html` and find/replace:

```html
<!-- Find: -->
+32-XXX-XXX-XXX
info@blueskycleaning.be
Your Street Address

<!-- Replace with your actual details -->
```

**Also update in Schema.org section (around line 55):**
- Business name
- Address
- Phone
- Geo coordinates (find yours at: https://www.latlong.net/)

## Step 2: Add Your Images (15 minutes)

### Option A: Generate with AI (Recommended)
1. Open `images/AI_IMAGE_PROMPTS.md`
2. Use prompts with tools like:
   - Midjourney (https://midjourney.com)
   - DALL-E 3 (https://openai.com)
   - Leonardo.ai (https://leonardo.ai)
3. Save images in `/images/` folder

### Option B: Use Stock Photos
Download free images from:
- Unsplash.com
- Pexels.com
- Pixabay.com

Search for: "cleaning service", "office cleaning", "professional cleaning team"

### Required Images:
```
images/
├── hero-background.jpg        (1920x1080px)
├── team-at-work.jpg          (1200x900px)
├── office-cleaning.jpg       (800x600px)
├── home-cleaning.jpg         (800x600px)
├── commercial-cleaning.jpg   (800x600px)
└── specialized-cleaning.jpg  (800x600px)
```

### Update Image Paths:

In `index.html`, replace the placeholder:
```html
<!-- Find: -->
<div class="image-placeholder">
    <span class="placeholder-text">AI Image: Professional cleaning team at work</span>
</div>

<!-- Replace with: -->
<img src="images/team-at-work.jpg" alt="Professional Bluesky cleaning team at work">
```

## Step 3: Customize Domain (2 minutes)

Search and replace in ALL files:
```
Find: https://www.blueskycleaning.be
Replace: https://www.YOUR-DOMAIN.be
```

Files to update:
- `index.html`
- `sitemap.xml`
- `robots.txt`

## Step 4: Test Locally (5 minutes)

### Simple Method (Any Computer):
1. Double-click `index.html`
2. Opens in your default browser
3. Test:
   - Language switching (NL/FR/EN)
   - All section links
   - Contact form validation
   - Mobile view (resize browser)

### Better Method (With Local Server):

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Using Node.js:**
```bash
npx http-server
# Then visit: http://localhost:8080
```

**Using VS Code:**
Install "Live Server" extension, right-click `index.html` → "Open with Live Server"

## Step 5: Deploy Online (10-30 minutes)

### Option A: Shared Hosting (Traditional)

1. **Get Hosting** (if you don't have it)
   - Belgian providers: Combell.be, One.com, HostPapa.be
   - Look for: SSL included, cPanel access, Belgium data centers

2. **Upload Files via FTP:**
   - Use FileZilla (free download)
   - Connect with credentials from hosting provider
   - Upload ALL files to `public_html` or `www` folder

3. **Enable SSL/HTTPS:**
   - In cPanel → SSL/TLS → Enable
   - Force HTTPS in `.htaccess` (uncomment lines 7-9)

4. **Test:**
   - Visit https://www.your-domain.be
   - Test on mobile phone
   - Check all pages work

### Option B: Netlify (Free, Modern)

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Upload Code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   # Follow GitHub instructions to create repo and push
   ```

3. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Sign up with GitHub
   - Click "New site from Git"
   - Select your repository
   - Click "Deploy"
   - Done! Your site is live

4. **Add Custom Domain:**
   - In Netlify: Domain settings → Add domain
   - Update DNS at your domain registrar
   - Wait 24-48 hours for propagation

## Post-Launch Checklist

### Immediately After Launch:
- [ ] Test website on desktop browser
- [ ] Test website on mobile phone
- [ ] Test all language switches
- [ ] Test contact form
- [ ] Check all links work
- [ ] Verify HTTPS is working (padlock in browser)

### Within 24 Hours:
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Create Google My Business listing
- [ ] Share on social media
- [ ] Send to friends/family for feedback

### Within 1 Week:
- [ ] Create Privacy Policy page
- [ ] Create Terms & Conditions page
- [ ] Set up professional email (info@yourdomain.be)
- [ ] Add business to online directories
- [ ] Monitor analytics

## Troubleshooting

### "Website Not Found"
- DNS not propagated yet (wait 24-48 hours)
- Check domain is pointed to correct server
- Verify files are in correct folder

### "Not Secure" Warning
- SSL certificate not installed
- Enable in hosting control panel
- For Netlify: automatic, wait a few minutes

### Language Switching Not Working
- Check browser console (F12) for errors
- Clear browser cache (Ctrl+F5)
- Verify all `.js` files uploaded correctly

### Images Not Loading
- Check file paths are correct
- Verify images uploaded to `/images/` folder
- Check file names match exactly (case-sensitive)

### Form Not Submitting
- Form currently simulates submission (for demo)
- To make it work: see README.md "Form Submission" section
- Or use services like Formspree.io or Netlify Forms

## Quick Customization Tips

### Change Colors:
Edit `css/style.css`, lines 4-7:
```css
--primary-color: #2563eb;  /* Change this hex code */
```
Find colors at: https://coolors.co

### Change Fonts:
Edit link in `index.html` head section:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```
Browse fonts at: https://fonts.google.com

### Add More Services:
Copy a service card block in `index.html` and modify text

### Change Prices:
Edit the pricing section amounts in `index.html`

## Getting Help

### Free Resources:
- YouTube: "How to deploy a website"
- MDN Web Docs: https://developer.mozilla.org
- W3Schools: https://www.w3schools.com

### Paid Help:
- Fiverr.com - Find web developers
- Upwork.com - Hire freelancers
- Local web agency in Belgium

## Next Steps

Once your site is live:

1. **SEO Optimization**
   - Add more content
   - Get listed in business directories
   - Build backlinks
   - Regular blog posts (optional)

2. **Marketing**
   - Social media profiles
   - Google Ads (optional)
   - Local SEO optimization
   - Customer reviews

3. **Improvements**
   - Add customer testimonials
   - Add before/after photos
   - Add blog section
   - Integrate booking system

## Congratulations! 🎉

Your professional cleaning business website is now live!

Remember:
- Keep content updated
- Monitor analytics monthly
- Respond to inquiries promptly
- Back up regularly

Need more details? Check:
- `README.md` - Complete documentation
- `DEPLOYMENT.md` - Detailed deployment guide
- `images/AI_IMAGE_PROMPTS.md` - Image generation help

---

**Questions?** Contact: info@blueskycleaning.be

**Last Updated:** December 15, 2024
