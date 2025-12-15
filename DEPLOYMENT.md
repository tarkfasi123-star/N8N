# Deployment Guide - Bluesky Cleaning Service Website

This guide will help you deploy your website to a production server.

## Pre-Deployment Checklist

### 1. Content Updates

- [ ] Update company contact information in `index.html`
  - Phone number (search for: `+32-XXX-XXX-XXX`)
  - Email address
  - Physical address
  - Business hours

- [ ] Update Schema.org data (lines 50-75 in index.html)
  - Telephone
  - Address details
  - Geo coordinates
  - Social media URLs

- [ ] Replace domain in all files
  - Search and replace: `https://www.blueskycleaning.be`
  - With your actual domain

### 2. Images

- [ ] Generate or source all images (see `images/AI_IMAGE_PROMPTS.md`)
- [ ] Optimize all images (compress, convert to WebP if possible)
- [ ] Upload images to `/images/` directory
- [ ] Update image paths in `index.html`

### 3. Analytics & Tracking

- [ ] Set up Google Analytics 4
- [ ] Add GA4 Measurement ID to `js/app.js`
- [ ] Configure Google Tag Manager (optional)
- [ ] Set up Google Search Console
- [ ] Set up Bing Webmaster Tools

### 4. Legal Pages

- [ ] Create Privacy Policy page
- [ ] Create Terms & Conditions page
- [ ] Create Cookie Policy page
- [ ] Update links in footer

## Deployment Options

### Option 1: Shared Hosting (Most Common for Small Businesses)

**Recommended for:** Small to medium cleaning businesses

**Popular Belgian Hosting Providers:**
- Combell.com
- One.com
- HostPapa.be
- OVH.com

**Steps:**

1. **Purchase hosting and domain**
   - Get a `.be` domain for better local SEO
   - Choose a hosting plan with at least 1GB storage
   - Ensure SSL certificate is included

2. **Upload files via FTP/SFTP**
   ```
   Host: ftp.yourdomain.be
   Username: [from hosting provider]
   Password: [from hosting provider]
   Port: 21 (FTP) or 22 (SFTP)
   ```

   **FTP Clients:**
   - FileZilla (Free, Windows/Mac/Linux)
   - Cyberduck (Free, Mac)
   - WinSCP (Free, Windows)

3. **Upload all files to public_html or www directory**
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── sitemap.xml
   ├── robots.txt
   ├── css/
   ├── js/
   └── images/
   ```

4. **Configure .htaccess**
   - Enable HTTPS redirect (after SSL is active)
   - Set up compression
   - Configure caching

5. **Test the website**
   - Visit https://www.yourdomain.be
   - Test all pages and functionality
   - Check mobile version

### Option 2: Netlify (Free, Automatic Deployment)

**Recommended for:** Tech-savvy users who want automatic deployments

**Steps:**

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/bluesky-cleaning.git
   git push -u origin main
   ```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Deploy settings:
     - Build command: (leave empty)
     - Publish directory: `/`
   - Click "Deploy site"

3. **Configure custom domain**
   - Go to "Domain settings"
   - Add your custom domain
   - Update DNS records at your domain registrar

4. **Enable HTTPS**
   - Automatically handled by Netlify
   - Force HTTPS in settings

### Option 3: Vercel (Free, Automatic Deployment)

**Steps:**

1. **Create a GitHub repository** (same as Netlify)

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure domain** (similar to Netlify)

### Option 4: Traditional Server (VPS/Dedicated)

**Recommended for:** Larger businesses with technical staff

**Requirements:**
- Ubuntu 20.04+ or similar Linux distribution
- Nginx or Apache web server
- SSL certificate (Let's Encrypt recommended)

**Nginx Configuration Example:**

```nginx
server {
    listen 80;
    server_name www.blueskycleaning.be blueskycleaning.be;
    return 301 https://www.blueskycleaning.be$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.blueskycleaning.be;

    ssl_certificate /etc/letsencrypt/live/www.blueskycleaning.be/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.blueskycleaning.be/privkey.pem;

    root /var/www/blueskycleaning;
    index index.html;

    # Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Post-Deployment Steps

### 1. DNS Configuration

If you're using a custom domain:

```
A Record:    @    →    [Your server IP]
CNAME:       www  →    yourdomain.be
```

**DNS Propagation:** Can take 24-48 hours

### 2. SSL Certificate

**Shared Hosting:**
- Usually automatically provided
- Enable in cPanel/Plesk control panel

**Netlify/Vercel:**
- Automatically handled

**Manual (Let's Encrypt):**
```bash
sudo certbot --nginx -d blueskycleaning.be -d www.blueskycleaning.be
```

### 3. Submit to Search Engines

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add your property (domain or URL prefix)
3. Verify ownership
4. Submit sitemap: `https://www.blueskycleaning.be/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap

### 4. Set Up Analytics

**Google Analytics 4:**
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `js/app.js` (see README.md)
4. Deploy updated file

### 5. Create Google My Business Listing

1. Go to https://www.google.com/business
2. Add your business
3. Verify your business (postcard or phone)
4. Add photos, hours, services
5. Link to your website

### 6. Set Up Email

**Option 1: Email Forwarding**
- Forward info@blueskycleaning.be to your personal email
- Configure in your hosting control panel

**Option 2: Professional Email (Recommended)**
- Google Workspace (paid)
- Microsoft 365 (paid)
- Professional email with your domain

### 7. Monitor Performance

**Tools:**
- Google PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com
- WebPageTest: https://www.webpagetest.org

**Target Scores:**
- PageSpeed: 90+ (mobile and desktop)
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s

### 8. Set Up Backups

**Automated Backups:**
- Daily database backups (if you add a database later)
- Weekly full site backups
- Store backups off-site

**Hosting Control Panel:**
- Most hosting providers offer automatic backups
- Enable in cPanel/Plesk

## Troubleshooting

### Website Not Loading

1. Check DNS settings
2. Verify files are in correct directory
3. Check file permissions (755 for directories, 644 for files)
4. Check browser console for errors

### HTTPS Not Working

1. Verify SSL certificate is installed
2. Check .htaccess HTTPS redirect
3. Clear browser cache
4. Check mixed content warnings

### Contact Form Not Working

1. Check browser console for JavaScript errors
2. Verify form validation is working
3. Set up backend API (form currently simulates submission)
4. Consider using services like:
   - Formspree.io
   - Netlify Forms
   - Google Forms integration

### Language Switching Not Working

1. Check browser console for errors
2. Verify `translations.js` is loading
3. Check localStorage is enabled in browser
4. Clear browser cache and cookies

## Maintenance Schedule

### Daily
- Monitor analytics for traffic
- Check for form submissions (when backend is set up)
- Respond to customer inquiries

### Weekly
- Review Google Search Console for errors
- Check website uptime
- Monitor page speed

### Monthly
- Review and update content
- Check all links
- Update photos/images
- Review analytics reports
- Backup website files

### Quarterly
- Update pricing if needed
- Add new services
- Refresh testimonials
- Update team photos

### Yearly
- Renew domain and hosting
- Update copyright year in footer
- Review SEO strategy
- Conduct full website audit

## Security Best Practices

1. **Keep Backups**
   - Daily automated backups
   - Test restore process quarterly

2. **Use Strong Passwords**
   - 16+ characters
   - Use password manager

3. **Keep Software Updated**
   - Server software
   - CMS (if you add one later)
   - Plugins/extensions

4. **Monitor Security**
   - Set up security alerts
   - Use services like Sucuri or Cloudflare

5. **HTTPS Only**
   - Force HTTPS redirect
   - HSTS header enabled

## Support Resources

### Belgian Web Standards
- GDPR Compliance: https://www.gegevensbeschermingsautoriteit.be
- Accessibility (WCAG): https://www.w3.org/WAI/

### Web Hosting Support
- Contact your hosting provider's support
- Most offer 24/7 support via phone, email, or chat

### Domain Registration
- DNS.be (for .be domains)
- Your hosting provider

## Getting Help

If you need assistance with deployment:
1. Contact your hosting provider's support team
2. Hire a local web developer
3. Use online forums (Stack Overflow, Reddit)

## Conclusion

Following this guide, your Bluesky Cleaning Service website should be successfully deployed and accessible to customers across Belgium!

Remember to:
- Test thoroughly before announcing
- Monitor performance regularly
- Keep content fresh and updated
- Respond to customer inquiries promptly

Good luck with your online presence! 🚀
