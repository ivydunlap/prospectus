# Ivy in Manila Website - Next Steps & Setup Instructions

**Status:** ✅ Website is live at https://ivydunlap.github.io/prospectus/

---

## 📋 Project Status

### ✅ Completed
- [x] Project structure and folders created
- [x] CSS design system (navy, yellow, orange, beige palette)
- [x] Header and footer components
- [x] Homepage with hero and CTAs
- [x] My Story page with calling narrative
- [x] Partnership page with giving options
- [x] Contact page with form
- [x] Newsletter page with signup
- [x] JavaScript for interactivity (mobile menu, validation)
- [x] GitHub Pages deployment

### ⏳ In Progress / Next Steps
- [ ] Set up Formspree (Contact Form)
- [ ] Set up Mailchimp (Newsletter)
- [ ] Set up Stripe (Donations)
- [ ] Update email address placeholders
- [ ] Update Instagram handle
- [ ] Update Kids International Ministries link
- [ ] Add QR code for donations
- [ ] Test all integrations
- [ ] Post-launch features (blog, gallery, etc.)

---

## 🔧 Step 1: Formspree Setup (Contact Form)

**Time:** ~10 minutes

Formspree handles your contact form submissions and emails them to you.

### Instructions:
1. Go to https://formspree.io
2. Click "Sign Up" and create a free account
3. Create a new form:
   - Give it a name: "Ivy in Manila Contact"
   - Select email: youraddress@email.com (you'll create this next)
4. After creating, you'll get a **Form ID** (looks like: `f_abc123xyz`)
5. In your repo, edit `pages/contact.html`:
   - Find line ~35 with: `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
   - Replace `YOUR_FORM_ID` with your actual Formspree ID
6. Save and push to GitHub:
   ```bash
   git add pages/contact.html
   git commit -m "Add Formspree integration for contact form"
   git push origin main
   ```
7. **Test:** Go to your live site, submit a test message, and verify you receive an email

### Formspree Features:
- Free tier: 50 submissions/month
- No backend needed
- Spam protection built-in
- Automatic email notifications

---

## 📬 Step 2: Mailchimp Setup (Newsletter)

**Time:** ~15 minutes

Mailchimp manages your email list and newsletter signups.

### Instructions:
1. Go to https://mailchimp.com
2. Sign up for a free account
3. Create an Audience (formerly called a List):
   - Give it a name: "Ivy in Manila Newsletter"
   - Set default email: youraddress@email.com
4. Get your Mailchimp form code:
   - Go to: Audience > Signup Forms > Embedded forms
   - Copy the signup form code
5. Edit `pages/newsletter.html`:
   - Find the form section (around line 42)
   - Replace the entire form with the Mailchimp embed code
   - OR manually update the form action URL with your List ID and User ID
6. Save and push to GitHub:
   ```bash
   git add pages/newsletter.html
   git commit -m "Add Mailchimp integration for newsletter"
   git push origin main
   ```
7. **Test:** Go to your live site, subscribe with a test email, verify it appears in Mailchimp

### Mailchimp Features:
- Free tier: Unlimited subscribers
- Email automation available
- Detailed analytics
- Template builder for newsletters

---

## 💳 Step 3: Stripe Setup (Donations)

**Time:** ~20 minutes

Stripe handles your donation payments (monthly and one-time).

### Instructions:
1. Go to https://stripe.com
2. Sign up for a Stripe account
3. Create payment links:
   - **Monthly Subscription Link:**
     - Products > Create > Name: "Monthly Support"
     - Type: Recurring
     - Price: $25 (or any default amount)
     - Recurring: Monthly
     - Save and get the payment link
   
   - **One-Time Gift Link:**
     - Create another product: "One-Time Gift"
     - Type: One-time payment
     - Price: $50 (or any default amount)
     - Save and get the payment link

4. Edit `pages/partnership.html`:
   - Find line ~63 with: `<a href="https://stripe.com/donate"...Give Monthly`
   - Replace the URL with your monthly Stripe payment link
   - Find line ~72 with: `<a href="https://stripe.com/donate"...Give One-Time`
   - Replace the URL with your one-time Stripe payment link

5. **Create QR Code:**
   - Use https://www.qr-code-generator.com
   - Generate QR code from your monthly donation link
   - Download as PNG image
   - Save to: `assets/images/donation-qr.png`
   - In `pages/partnership.html` around line 93, replace placeholder with:
     ```html
     <img src="../assets/images/donation-qr.png" alt="Scan to support Ivy in Manila" style="width: 250px; height: 250px;">
     ```

6. Save and push to GitHub:
   ```bash
   git add pages/partnership.html assets/images/donation-qr.png
   git commit -m "Add Stripe donation integration and QR code"
   git push origin main
   ```

7. **Test:** Go to your live site:
   - [ ] "Give Monthly" button takes you to Stripe payment page
   - [ ] "Give One-Time" button takes you to different Stripe page
   - [ ] QR code scans to donation link (test on phone)
   - [ ] Test payment flow (Stripe has test mode)

### Stripe Features:
- Free account setup
- Competitive transaction fees (~2.9% + 30¢)
- Automatic receipts sent to donors
- Dashboard for tracking donations
- Recurring subscription management

---

## ✏️ Step 4: Update Placeholder Information

**Time:** ~10 minutes

Replace all placeholders with your actual information.

### Email Address
Find and replace `youraddress@email.com` with your actual email:
- `index.html`
- `pages/contact.html`
- `pages/partnership.html`
- `pages/my-story.html`
- `pages/newsletter.html`

Commands:
```bash
# Find all occurrences
grep -r "youraddress@email.com" pages/ index.html

# Then manually edit each file or use sed (be careful!):
sed -i '' 's/youraddress@email.com/your.actual.email@example.com/g' pages/*.html index.html
```

### Instagram Handle
Find and replace `@yourhandle` with your actual Instagram:
- All footer sections in all pages

```bash
grep -r "@yourhandle" pages/ index.html
# Then manually edit or use sed
```

### Kids International Ministries Link
In `pages/my-story.html` around line 75:
- Find: `<a href="https://kids-intl.org"`
- Replace with actual KIM website URL

### After Updates:
```bash
git add .
git commit -m "Update email, Instagram, and KIM website links"
git push origin main
```

---

## 🖼️ Step 5: Add Images (Optional but Recommended)

**Time:** Variable

Add photos to make your site more personal.

### Where to Add:
- **Profile photo:** `assets/images/ivy-profile.jpg`
- **Ministry photos:** `assets/images/ministry-*.jpg`
- **QR code:** `assets/images/donation-qr.png` (required for donations)

### How to Use:
1. Save images to the `assets/images/` folder
2. Update HTML to reference them:
   ```html
   <img src="../assets/images/filename.jpg" alt="Description of image">
   ```
3. Push to GitHub

### Recommended Images:
- Your profile photo (for homepage or About section)
- Photos from Manila/community
- KIM logo (if available)
- Photos of kids/families you work with

---

## 🌐 Step 6: Custom Domain (Optional - Do This Later)

**Time:** Depends on domain registrar

Once you purchase a custom domain (e.g., `ivyinmanila.com`):

1. **Purchase domain** at:
   - GoDaddy
   - Namecheap
   - Google Domains
   - Any domain registrar

2. **Connect to GitHub Pages:**
   - In your repo: Settings > Pages
   - Under "Custom domain," enter: `ivyinmanila.com`
   - GitHub creates CNAME file automatically

3. **Update domain's DNS** (registrar-specific):
   - Point DNS to GitHub Pages servers
   - Instructions vary by registrar
   - GitHub's guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

4. **HTTPS happens automatically** ✅

---

## 📅 Step 7: Post-Launch Features (Optional - Do These Later)

These can be added after your core site is live:

### Blog Section
- [ ] Create `pages/blog.html` (blog index)
- [ ] Create `pages/blog/post-1.html` (individual posts)
- [ ] Link from Newsletter page and footer

### Photo Gallery
- [ ] Create `pages/gallery.html`
- [ ] Add photos to `assets/images/`
- [ ] Use Lightbox or CSS grid for display

### Mission Partners Page
- [ ] Create `pages/partners.html`
- [ ] List prayer/financial partners
- [ ] Add their logos (optional)

### What I'm Learning Journal
- [ ] Create `pages/journal.html`
- [ ] Regular reflection posts
- [ ] Link from navigation

---

## 📊 Complete Checklist

```
INTEGRATIONS:
☐ Formspree: Get Form ID and update pages/contact.html
☐ Formspree: Test contact form submission
☐ Mailchimp: Get List ID and update pages/newsletter.html
☐ Mailchimp: Test newsletter signup
☐ Stripe: Create monthly donation link
☐ Stripe: Create one-time donation link
☐ Stripe: Update pages/partnership.html with links
☐ Stripe: Create & upload QR code image
☐ Stripe: Test donation links and QR code

PLACEHOLDER UPDATES:
☐ Update email address in all pages
☐ Update Instagram handle in all pages
☐ Update KIM website link in pages/my-story.html

TESTING:
☐ Contact form: Submit test message
☐ Newsletter: Subscribe with test email
☐ Donations: Test monthly link
☐ Donations: Test one-time link
☐ Donations: Test QR code scan on phone
☐ Test all pages on mobile
☐ Test navigation on all pages

OPTIONAL:
☐ Add profile photo to assets/images/
☐ Add ministry photos to assets/images/
☐ Purchase custom domain
☐ Add blog section
☐ Add photo gallery
☐ Add mission partners page
☐ Add journal section
```

---

## 🚀 Quick Reference: Command Summary

### Check Status
```bash
cd /Users/ivydunlap/Repos/prospectus
git status
```

### Make Changes & Push
```bash
# Edit files locally
# Then:
git add .
git commit -m "Your commit message"
git push origin main
```

### View Live Site
```bash
# Open in browser:
https://ivydunlap.github.io/prospectus/
```

---

## 📞 Useful Resources

- **Formspree:** https://formspree.io/help
- **Mailchimp:** https://mailchimp.com/support/
- **Stripe:** https://support.stripe.com/
- **GitHub Pages:** https://docs.github.com/en/pages
- **Markdown Guide:** https://www.markdownguide.org/

---

## 💡 Tips & Best Practices

1. **Test Everything Locally First**
   - Test contact form works with Formspree ID
   - Test newsletter signup with Mailchimp
   - Test donation links don't break pages

2. **Keep Your API Keys Safe**
   - Never commit sensitive information to GitHub
   - Store API keys in `.env` file (which is gitignored)

3. **Update Frequently**
   - Monthly newsletter keeps supporters engaged
   - Share prayer updates and stories
   - Post photos from community

4. **Mobile Testing**
   - Always test on actual phone
   - Forms should be easy to use on small screens
   - QR codes should scan correctly

5. **Backup Important Information**
   - Save Formspree, Mailchimp, and Stripe credentials somewhere safe
   - Document your Form IDs and List IDs

---

## 📝 Notes

**GitHub Pages URL:** https://ivydunlap.github.io/prospectus/

**Repository:** https://github.com/ivydunlap/prospectus

**All files are version-controlled in Git** — you can always revert changes if needed.

---

**Last Updated:** April 15, 2026

**Questions?** Refer to the detailed setup guides in the root `README.md` and `SETUP_GUIDE.md`
