# Bluesky Cleaning Service Website

A professional, multilingual website for a cleaning business in Belgium with SEO optimization and GDPR compliance.

## Features

### 🌍 Multilingual Support
- **Dutch (NL)** - Default language
- **French (FR)** - Complete translation
- **English (EN)** - Complete translation
- Automatic language detection and switching
- SEO-friendly language URLs

### 🔍 SEO Optimized
- Semantic HTML5 structure
- Meta tags for all pages and languages
- Open Graph tags for social media
- Schema.org structured data (LocalBusiness)
- XML sitemap included
- Robots.txt configured
- Clean, crawlable URLs
- Alt tags and ARIA labels ready

### 🔒 GDPR Compliant
- Cookie consent banner
- Privacy policy links
- User consent tracking
- Opt-in for analytics
- Data protection ready

### 📱 Fully Responsive
- Mobile-first design approach
- Tablet optimization
- Desktop experience
- Touch-friendly interface
- Accessible on all devices

### ✨ Modern Design
- Clean and professional aesthetic
- Smooth animations and transitions
- Interactive elements
- Modern color scheme
- Professional typography (Inter & Poppins fonts)

### 🎨 Key Sections

1. **Hero Section** - Eye-catching landing with clear CTAs
2. **Services** - Four main service categories:
   - Office Cleaning
   - Home Cleaning
   - Commercial Spaces
   - Specialized Cleaning
3. **About** - Company information and values
4. **Pricing** - Three transparent pricing tiers
5. **Contact** - Contact form with validation + contact info
6. **Footer** - Links, legal information, and navigation

## File Structure

```
N8N/
├── index.html              # Main HTML file
├── sitemap.xml            # XML sitemap for SEO
├── robots.txt             # Robots directives
├── README.md              # This file
├── css/
│   ├── style.css          # Main styles
│   └── responsive.css     # Responsive/mobile styles
├── js/
│   ├── app.js             # Main JavaScript
│   └── translations.js    # Language translations
├── images/
│   └── AI_IMAGE_PROMPTS.md  # AI image generation prompts
└── assets/                # Additional assets (if needed)
```

## Quick Start

1. **Clone or download** this repository
2. **Generate images** using the prompts in `images/AI_IMAGE_PROMPTS.md`
3. **Update contact information** in `index.html`:
   - Phone number
   - Email address
   - Physical address
   - Social media links
4. **Configure analytics** (optional) in `js/app.js`
5. **Upload to your web server**

## Customization

### Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;     /* Main blue */
    --primary-dark: #1e40af;      /* Dark blue */
    --primary-light: #3b82f6;     /* Light blue */
    --secondary-color: #0ea5e9;   /* Secondary blue */
    /* ... more variables ... */
}
```

### Contact Information
Update these sections in `index.html`:

1. **Schema.org data** (lines 50-75)
2. **Contact section** (search for "Contact Informatie")
3. **Footer** information

### Languages
Add or modify translations in `js/translations.js`:

```javascript
const translations = {
    nl: { /* Dutch translations */ },
    fr: { /* French translations */ },
    en: { /* English translations */ }
};
```

### Form Submission
The contact form currently simulates submission. To connect to a backend:

Edit `js/app.js`, function `submitForm()`:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    showFormMessage('success', getTranslation('contact.form.success'));
    form.reset();
})
.catch(error => {
    showFormMessage('error', getTranslation('contact.form.error'));
});
```

## SEO Checklist

- [x] Semantic HTML structure
- [x] Meta descriptions for all languages
- [x] Title tags optimized
- [x] Open Graph tags
- [x] Schema.org markup
- [x] XML sitemap
- [x] Robots.txt
- [x] Alt text ready for images
- [x] Mobile-friendly
- [x] Fast loading
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics
- [ ] Create Google My Business listing
- [ ] Get SSL certificate (HTTPS)

## GDPR Compliance Checklist

- [x] Cookie consent banner
- [x] Privacy policy link
- [x] User choice storage (localStorage)
- [x] Opt-in for analytics
- [ ] Create full privacy policy page
- [ ] Create terms & conditions page
- [ ] Add cookie policy details
- [ ] Ensure data processing agreements with any third parties

## Analytics Setup

### Google Analytics 4

1. Create a GA4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `js/app.js` in the `enableAnalytics()` function:

```javascript
function enableAnalytics() {
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');

    // Load GA script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);
}
```

## Performance Optimization

1. **Compress images** before uploading
   - Use WebP format for better compression
   - Max width: 1920px for hero, 800px for others
   - Use tools like TinyPNG or ImageOptim

2. **Enable compression** on your server
   - Gzip or Brotli compression
   - Cache static assets

3. **Minify files** for production:
   ```bash
   # CSS
   npx cssnano css/style.css css/style.min.css

   # JavaScript
   npx terser js/app.js -o js/app.min.js
   ```

4. **Use a CDN** (optional) for fonts and libraries

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels ready (add as needed)
- Keyboard navigation support
- Focus states for all interactive elements
- Sufficient color contrast
- Responsive text sizing
- Reduced motion support

## Deployment

### Shared Hosting (cPanel, Plesk, etc.)

1. Upload all files via FTP/SFTP
2. Ensure `index.html` is in the public root
3. Enable HTTPS/SSL
4. Test all pages and languages

### Netlify

1. Connect your Git repository
2. Build settings: None needed (static site)
3. Publish directory: `/`
4. Deploy!

### Vercel

1. Import your Git repository
2. No build configuration needed
3. Deploy automatically

### Apache Server

Create an `.htaccess` file for:
- Clean URLs
- HTTPS redirect
- Compression
- Caching

(See `.htaccess` file in repository)

## Testing

Before going live, test:

1. All language switches work correctly
2. All links navigate properly
3. Contact form validates inputs
4. Cookie consent functions
5. Mobile responsiveness
6. All sections scroll smoothly
7. SEO tags are correct (use browser inspector)
8. Page loads in under 3 seconds

## Support & Maintenance

### Regular Updates

- Update copyright year in footer
- Refresh content and images
- Check for broken links
- Monitor analytics
- Update contact information as needed

### Security

- Keep server software updated
- Use HTTPS only
- Regular backups
- Monitor for suspicious activity

## License

This website template is provided as-is for Bluesky Cleaning Service.

## Credits

- Design & Development: Custom built
- Fonts: Google Fonts (Inter, Poppins)
- Icons: Unicode Emoji
- Images: AI-generated (prompts included)

## Contact

For technical support or questions about this website:
- Email: info@blueskycleaning.be
- Website: https://www.blueskycleaning.be

---

**Last Updated:** December 15, 2024
**Version:** 1.0.0
