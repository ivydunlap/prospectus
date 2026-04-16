# 🚀 Ivy in Manila Website - Setup Guide

## What's Been Built

Your website is now complete with all 5 core pages:
- ✅ **Homepage** (`index.html`) - Hero section with CTAs
- ✅ **My Story** (`pages/my-story.html`) - Your calling narrative
- ✅ **Partnership** (`pages/partnership.html`) - Prayer & giving options
- ✅ **Contact** (`pages/contact.html`) - Contact form & socials
- ✅ **Newsletter** (`pages/newsletter.html`) - Email signup

All pages feature:
- Responsive design (mobile-first approach)
- Navy blue, honey yellow, pumpkin orange, oatmilk beige color palette
- Smooth navigation and interactive menu toggle
- Beautiful cards, CTAs, and layout

---

## ⚙️ Next Steps (Do These in Order)

### Step 1: Test the Site Locally (5 minutes)
Before deploying, test your site on your computer:

```bash
cd /Users/ivydunlap/Repos/prospectus
# Open index.html in your browser
open index.html
```

**Test Checklist:**
- [ ] Homepage loads with all sections
- [ ] Navigation menu works
- [ ] Mobile hamburger menu works (resize browser to <768px)
- [ ] All page links work (click through all pages)
- [ ] Color palette looks right
- [ ] Text is readable

---

### Step 2: Update Placeholder Information (10 minutes)

**Email Address:**
Find and replace `youraddress@email.com` with your actual email:
- `index.html` (line ~78, footer)
- `pages/contact.html` (form and footer)
- `pages/partnership.html` (footer)
- `pages/my-story.html` (footer)
- `pages/newsletter.html` (footer)

**Instagram Handle:**
Find and replace `https://instagram.com/yourhandle` with your actual Instagram:
- All pages have it in footer social links

**Kids International Ministries Link:**
Find and update the link in `pages/my-story.html`:
- Line ~75: `<a href="https://kids-intl.org"` 
- Replace with actual KIM website URL

---

### Step 3: Set Up Third-Party Services (20-30 minutes)

#### **Formspree for Contact Form**
1. Go to https://formspree.io
2. Sign up for free
3. Create a new form
4. You'll get a form ID (something like `f_abcd1234`)
5. In `pages/contact.html`, find line ~35:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Replace `YOUR_FORM_ID` with your actual ID
7. Save and test by submitting the form in your browser

#### **Mailchimp for Newsletter**
1. Go to https://mailchimp.com
2. Sign up for free (generous free tier)
3. Create an Audience
4. Go to Audience > Signup Forms > Embedded forms
5. Copy the form URL (you'll see something like `u=abc123&id=def456`)
6. Extract the `u=` (USER_ID) and `id=` (LIST_ID) values
7. In `pages/newsletter.html`, find line ~42:
   ```html
   <form action="https://mailchimp.us12.list-manage.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_LIST_ID" method="post">
   ```
8. Replace with your actual IDs
9. Save and test by subscribing with a test email

#### **Stripe for Donations**
1. Go to https://stripe.com
2. Sign up for free
3. Create two payment links:
   - Monthly subscription (recurring)
   - One-time gift (one-time payment)
4. Copy the payment link URLs
5. In `pages/partnership.html`, find lines ~63 and ~72:
   ```html
   <a href="https://stripe.com/donate" class="btn btn-secondary">Give Monthly</a>
   <a href="https://stripe.com/donate" class="btn btn-secondary">Give One-Time</a>
   ```
6. Replace both URLs with your actual Stripe payment links
7. Scroll down to the QR Code section (line ~93) and replace the placeholder with actual QR code image
   - Generate QR from your Stripe link using free tool like: https://www.qr-code-generator.com
   - Save as `assets/images/donation-qr.png`
   - Update the HTML to use the image

---

### Step 4: Add Images (Optional, But Recommended)

Add photos to make the site personal:

1. **Create a profile photo:**
   - Save to: `assets/images/ivy-profile.jpg` (optional, can be added to homepage later)

2. **Ministry photos:**
   - Save Manila/KIM photos to: `assets/images/`
   - Can add to My Story page later

3. **Logo/Branding:**
   - If you have a logo, save to: `assets/images/logo.png`

---

### Step 5: Deploy to GitHub Pages (10 minutes)

Your site is ready to go live!

```bash
cd /Users/ivydunlap/Repos/prospectus

# Check git status
git status

# Add all files
git add .

# Commit with descriptive message
git commit -m "Launch Ivy in Manila website with all core pages and integrations"

# Push to GitHub
git push origin main
```

**On GitHub:**
1. Go to your repo: https://github.com/[your-username]/prospectus
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. You'll see a notification with your site URL: `https://[your-username].github.io/prospectus/`

**Test the live site:**
- [ ] Visit the URL and verify it loads
- [ ] Test all pages and navigation
- [ ] Test mobile on phone
- [ ] Test forms (you should receive test submissions)
- [ ] Test donation links

---

### Step 6: Test All Third-Party Integrations (15 minutes)

**Contact Form:**
- [ ] Fill out and submit contact form
- [ ] Receive email via Formspree
- [ ] Formspree shows submission in dashboard

**Newsletter:**
- [ ] Subscribe with test email
- [ ] Check Mailchimp audience list for new subscriber
- [ ] Verify email in Mailchimp

**Donations:**
- [ ] Click "Give Monthly" - goes to Stripe payment page
- [ ] Click "Give One-Time" - goes to different Stripe page
- [ ] Scan QR code on phone - goes to donation page

---

### Step 7: Get Custom Domain (Later, When Ready)

Once you're ready to get your own domain:

1. **Purchase domain** (GoDaddy, Namecheap, Google Domains, etc.)
   - Example: `ivyinmanila.com`

2. **Connect to GitHub Pages:**
   - In your repo Settings > Pages
   - Enter custom domain: `ivyinmanila.com`
   - GitHub creates a CNAME file automatically

3. **Update domain's DNS** (your domain registrar):
   - Points to GitHub Pages servers (instructions vary by registrar)
   - GitHub's documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

4. **HTTPS happens automatically** 🎉

---

## 📋 Complete Checklist

```
SETUP PHASE:
☐ Test site locally
☐ Update email addresses
☐ Update Instagram handle
☐ Update KIM website link

THIRD-PARTY SERVICES:
☐ Set up Formspree + update form ID
☐ Set up Mailchimp + update list ID
☐ Set up Stripe + update donation links
☐ Create & add QR code image

DEPLOYMENT:
☐ Commit and push to GitHub
☐ Enable GitHub Pages
☐ Verify live site loads
☐ Test all pages on mobile
☐ Test all forms
☐ Test donation links

OPTIONAL (Post-Launch):
☐ Add profile photo
☐ Add ministry photos
☐ Set up analytics
☐ Purchased custom domain
☐ Add blog section
☐ Add photo gallery
```

---

## 🆘 Quick Troubleshooting

**Forms not working?**
- Check you replaced placeholders correctly
- Clear browser cache (Cmd+Shift+R)
- Check browser console for errors (F12 > Console tab)

**Pages look wrong?**
- Hard refresh browser (Cmd+Shift+R)
- Check all file paths are relative (`../css/styles.css` not `/css/styles.css`)

**GitHub Pages not working?**
- Make sure you pushed to `main` branch
- Check Settings > Pages shows correct source
- Wait 2+ minutes for deployment
- Check Actions tab for deployment errors

**Contact form not receiving emails?**
- Verify Formspree form ID is correct
- Check spam/junk folder for test emails
- Test form on live site, not localhost

---

## 📞 Resources

- **Formspree Docs:** https://formspree.io/help
- **Mailchimp Docs:** https://mailchimp.com/support/
- **Stripe Docs:** https://stripe.com/docs/
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **HTML/CSS Reference:** https://developer.mozilla.org/en-US/

---

## 🎉 You're Done!

Once you complete all steps above, your website will be:
- ✅ Live on the internet
- ✅ Mobile responsive
- ✅ Forms working (contact, newsletter, donations)
- ✅ HTTPS secured
- ✅ Ready to share with partners and friends!

**Share your site URL with people to partner with you.**

---

**Questions?** Check README.md for detailed setup instructions, or reach out to your tech support contact.

Good luck with your ministry in Manila! 🙏
