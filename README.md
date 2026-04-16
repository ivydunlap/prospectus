# Ivy in Manila - Website

A beautiful, responsive website for Ivy's long-term ministry work in Manila with Kids International Ministries.

## 📁 Project Structure

```
/
├── index.html                 # Homepage
├── css/
│   └── styles.css            # Global styles & design system
├── js/
│   └── main.js               # JavaScript interactivity
├── pages/
│   ├── my-story.html         # Ivy's story & calling
│   ├── partnership.html       # Partnership opportunities
│   ├── contact.html          # Contact form & info
│   └── newsletter.html       # Newsletter signup
├── assets/
│   ├── images/               # Photos, logos
│   └── icons/                # Social media icons
├── README.md                 # This file
└── .gitignore               # Git ignore file
```

## 🎨 Design System

**Color Palette:**
- Navy Blue: `#1a3a52`
- Honey Yellow: `#f5c847`
- Pumpkin Orange: `#ff8c42`
- Oatmilk Beige: `#f5ede4`

**Typography:**
- Primary Font: System UI (Roboto, Segoe UI, etc.)
- Secondary Font: Georgia/Garamond (serif for headings)

**Responsive Breakpoints:**
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 🔧 Setup Instructions

### 1. **Formspree Integration** (Contact Form)
The contact form on the Contact page is configured to use Formspree.

**Steps:**
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form and get your form ID
4. In `pages/contact.html`, find the line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID
5. Test the form to ensure it works

### 2. **Mailchimp Integration** (Newsletter)
The newsletter page is configured to use Mailchimp for email subscriptions.

**Steps:**
1. Go to [mailchimp.com](https://mailchimp.com)
2. Sign up for a free account
3. Create an Audience (formerly called a List)
4. Get your Mailchimp form settings:
   - Go to Audience > Signup Forms > Embedded forms
   - Copy the form action URL to find your USER_ID and LIST_ID
5. In `pages/newsletter.html`, find the line:
   ```html
   <form action="https://mailchimp.us12.list-manage.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_LIST_ID" method="post">
   ```
   Replace `YOUR_USER_ID` and `YOUR_LIST_ID` with your actual Mailchimp IDs
6. Test the form to ensure it works

**Alternative:** Use Mailchimp's built-in form embedding code if preferred. Copy and paste the embed code in place of the form on the newsletter page.

### 3. **Stripe Integration** (Donations)
The partnership page links to Stripe donation pages.

**Steps:**
1. Go to [stripe.com](https://stripe.com)
2. Sign up for a Stripe account
3. Create payment links or products:
   - One for Monthly/Subscription donations
   - One for One-Time donations
4. In `pages/partnership.html`, update the button links:
   ```html
   <a href="https://stripe.com/donate" class="btn btn-secondary">Give Monthly via Stripe</a>
   <a href="https://stripe.com/donate" class="btn btn-secondary">Give a One‑Time Gift</a>
   ```
   Replace the URLs with your actual Stripe donation links

5. **For QR Code:** Generate a QR code from your Stripe donation link:
   - Use a free QR code generator like [qr-code-generator.com](https://www.qr-code-generator.com)
   - Generate a QR code from your Stripe link
   - Save it as an image (e.g., `assets/images/qr-code.png`)
   - Replace the placeholder QR code section in `pages/partnership.html` with the actual image:
   ```html
   <img src="../assets/images/qr-code.png" alt="Scan to support Ivy in Manila" style="width: 250px; height: 250px;">
   ```

### 4. **Email Address Updates**
Replace the placeholder email addresses throughout the site:
- Find all instances of `youraddress@email.com`
- Replace with your actual email address

**Files to update:**
- `index.html`
- `pages/contact.html`
- `pages/partnership.html`
- `pages/newsletter.html`

### 5. **Social Media Links**
Update the Instagram and social media links:
- Find `https://instagram.com/yourhandle` and replace with your actual Instagram handle
- Update any other social media links as needed

**Files to update:**
- `index.html`
- All pages in `pages/`

### 6. **Custom Domain** (When Ready)
Once you purchase a custom domain:

1. In GitHub repo settings:
   - Go to Settings > Pages
   - Under "Custom domain," enter your domain (e.g., `ivyinmanila.com`)
   - GitHub will automatically create a CNAME file
2. Update your domain's DNS settings to point to GitHub Pages
3. Enable HTTPS (GitHub Pages does this automatically with custom domains)

## 🚀 Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Git installed on your computer
- Your code already in the `prospectus` repository

### Steps

1. **Ensure main branch is ready:**
   ```bash
   git status
   git add .
   git commit -m "Initial website build with all pages"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click Settings > Pages
   - Under "Build and deployment," select:
     - Source: `Deploy from a branch`
     - Branch: `main`
     - Folder: `/ (root)`
   - Click Save

3. **Wait for deployment:**
   - GitHub will deploy your site automatically
   - You'll see a notification when it's live
   - Site will be available at: `https://yourusername.github.io/prospectus/`

4. **Verify deployment:**
   - Visit your GitHub Pages URL
   - Test all pages and links
   - Test forms (Formspree, Mailchimp, Stripe)
   - Test mobile responsiveness

## 📱 Testing Checklist

### Desktop & Mobile Testing
- [ ] All pages load correctly
- [ ] Navigation works on mobile (hamburger menu)
- [ ] Forms are visible and functional
- [ ] Images display correctly
- [ ] Text is readable at all sizes
- [ ] Colors match the design palette

### Form Testing
- [ ] Contact form: Submit a test message via Formspree
- [ ] Newsletter: Subscribe with a test email via Mailchimp
- [ ] Donations: Test Stripe donation links in test mode (if available)

### Accessibility
- [ ] Color contrast is sufficient (use WebAIM Contrast Checker)
- [ ] All images have alt text
- [ ] Keyboard navigation works (Tab through page)
- [ ] Links are clearly visible

### Performance
- [ ] Page load time is acceptable (< 3 seconds)
- [ ] Images are optimized
- [ ] No console errors in browser dev tools

## 📝 Making Updates

### Adding Blog Posts (Post-launch)
When you're ready to add a blog section:
1. Create `pages/blog.html` for the blog index
2. Create individual post files like `pages/blog/post-1.html`
3. Link from Newsletter page and footer

### Adding Photos
1. Save photos to `assets/images/`
2. Optimize images for web (compress, use appropriate formats)
3. Add to relevant pages with descriptive alt text

### Updating Content
1. Edit HTML files directly
2. Commit and push changes to GitHub
3. GitHub Pages will auto-deploy (usually within seconds)

## 🔐 Important Notes

- **Email & Privacy:** Never commit sensitive information (API keys, email addresses) to public repos. Formspree and Mailchimp handle email securely.
- **HTTPS:** GitHub Pages provides free HTTPS encryption for all sites.
- **Backups:** Keep local backups of all content and settings from Formspree, Mailchimp, and Stripe.

## 📧 Contact Form Setup Details

**Formspree Features:**
- Free tier: Up to 50 submissions/month
- No backend needed
- Automatic email notifications
- Easy integration

**To get your Formspree ID:**
1. Create form at formspree.io
2. Submit a test email through your form
3. Formspree will send you a verification email
4. Click verify and your form is ready

## 💳 Stripe Setup Tips

- **Test Mode:** Set up Stripe in test mode first to verify donations work
- **Test Cards:** Use Stripe test card numbers (e.g., 4242 4242 4242 4242)
- **Live Mode:** Switch to live mode when ready to accept real donations
- **Receipts:** Stripe sends automatic donation receipts to donors

## 🆘 Troubleshooting

**Forms not working?**
- Check browser console for errors (right-click > Inspect > Console)
- Verify Formspree/Mailchimp IDs are correct
- Test with Incognito/Private mode (no cache issues)

**Pages not loading?**
- Clear browser cache
- Check file paths are correct (relative paths for pages/ directory)
- Verify no typos in filenames

**Styling looks off?**
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that `css/styles.css` is being loaded

## 📞 Support Resources

- **Formspree:** https://formspree.io/help
- **Mailchimp:** https://mailchimp.com/support/
- **Stripe:** https://support.stripe.com/
- **GitHub Pages:** https://docs.github.com/en/pages

---

**Last Updated:** April 2026
**Website:** Ivy in Manila
**Built with:** HTML5, CSS3, Vanilla JavaScript
