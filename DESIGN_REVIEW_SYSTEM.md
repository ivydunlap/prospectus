# Design Review System for Ivy in Manila Website

## 🎨 Creative Director Design Review Agent

This document defines a specialized design review process for evaluating the Ivy in Manila website with creative director-level expertise.

---

## Current Design System Overview

### Color Palette
- **Navy Soft**: `#3D5A73` (primary accent)
- **Navy Dark**: `#2C3E50` (headers, text)
- **Honey Warm**: `#E8945C` (accent, CTAs)
- **Honey Pale**: `#F0B878` (lighter accents)
- **Cream Pale**: `#FEEECD` (light backgrounds)
- **Cream Warm**: `#E3D6C5` (neutral backgrounds)
- **Cream Extra Light**: `#F0EDEA` (subtle backgrounds)
- **Taupe Muted**: `#A0957E` (secondary text)

### Typography
- **Primary Font**: System UI fonts (modern, clean)
- **Secondary Font**: Georgia/Garamond (serif, elegant)

### Spacing System
- **XS**: 0.5rem | **SM**: 1rem | **MD**: 1.5rem | **LG**: 2rem | **XL**: 3rem | **2XL**: 4rem

### Border Radius
- **Small**: 12px | **Medium**: 20px | **Large**: 32px

---

## Design Review Dimensions

### 1. **Visual Hierarchy & Layout**
Evaluate:
- [ ] Is the hierarchy clear? Are key elements (CTAs, hero, value props) prominent?
- [ ] Does the layout guide the eye naturally through the content?
- [ ] Is white space used effectively or does anything feel cramped?
- [ ] Are sections appropriately visually separated?
- [ ] Is there visual rhythm and balance?

### 2. **Color Usage & Harmony**
Evaluate:
- [ ] Are colors used consistently throughout?
- [ ] Do color choices support the emotional tone (warm, inviting, trustworthy)?
- [ ] Is there sufficient contrast for accessibility?
- [ ] Are accent colors used sparingly and strategically?
- [ ] Does the color palette feel cohesive or are there jarring transitions?

### 3. **Typography & Readability**
Evaluate:
- [ ] Are font sizes appropriate for hierarchy (H1 > H2 > H3 > body)?
- [ ] Is line-height comfortable (aim for 1.5-1.8 for body text)?
- [ ] Is text color contrast sufficient (WCAG AA minimum)?
- [ ] Are serif fonts used appropriately (headings, not body)?
- [ ] Is letter spacing appropriate or does text feel cramped?

### 4. **Button & CTA Design**
Evaluate:
- [ ] Are buttons visually distinct and easy to identify?
- [ ] Is there a clear visual hierarchy among buttons (primary > secondary)?
- [ ] Do hover/active states provide good feedback?
- [ ] Are buttons appropriately sized for mobile?
- [ ] Is copy action-oriented and compelling?

### 5. **Card Components & Component Consistency**
Evaluate:
- [ ] Do all cards follow the same design system?
- [ ] Are shadows/depth consistent?
- [ ] Are border radiuses applied uniformly?
- [ ] Do hover states feel polished and intentional?
- [ ] Is padding consistent across similar components?

### 6. **Image & Media Integration**
Evaluate:
- [ ] Are images high quality and well-composed?
- [ ] Does the carousel feel smooth and intuitive?
- [ ] Are image overlays readable? Is contrast sufficient?
- [ ] Do images support the emotional narrative?
- [ ] Is the image-to-text ratio balanced?

### 7. **Responsive Design**
Evaluate:
- [ ] Does the layout work well on mobile (< 768px)?
- [ ] Are touch targets appropriately sized (minimum 44x44px)?
- [ ] Is text readable on smaller screens?
- [ ] Are images scaled appropriately?
- [ ] Does the navigation collapse elegantly on mobile?

### 8. **Accessibility & Usability**
Evaluate:
- [ ] Do all colors have sufficient contrast?
- [ ] Are interactive elements clearly identifiable?
- [ ] Is there focus state styling visible?
- [ ] Are form labels properly associated?
- [ ] Is the content logically structured?

### 9. **Brand & Emotional Impact**
Evaluate:
- [ ] Does the design reflect the ministry mission?
- [ ] Does it feel warm, inviting, and trustworthy?
- [ ] Are animations/interactions purposeful (not distracting)?
- [ ] Does the overall feel align with the brand personality?
- [ ] Is there a sense of cohesion across all pages?

### 10. **Performance & Polish**
Evaluate:
- [ ] Are animations smooth and not jarring?
- [ ] Do transitions feel natural?
- [ ] Are there any rough edges or incomplete states?
- [ ] Does everything feel intentional and finished?
- [ ] Are loading states/feedback clear?

---

## How to Use This Review System

### Step 1: Visual Audit
1. Open the website fresh in a browser
2. View at desktop, tablet, and mobile sizes
3. Note first impressions and emotional responses
4. Document any visual inconsistencies

### Step 2: Component Review
1. Evaluate each component using the dimensions above
2. Take screenshots of any issues
3. Rate each dimension on a scale: ⭐⭐⭐⭐⭐ (5 = excellent, 1 = needs work)

### Step 3: Generate Recommendations
Create a report with:
- **Strengths**: What's working well
- **Opportunities**: Where improvements can be made
- **Specific Changes**: Concrete, actionable fixes
- **Priority**: High/Medium/Low based on impact

### Step 4: Implementation
Track changes in a separate DESIGN_FIXES.md file or project management system.

---

## Design Review Template

When reviewing, use this format:

```markdown
## Design Review Report

### 📊 Ratings by Dimension
- Visual Hierarchy: ⭐⭐⭐⭐☆
- Color Usage: ⭐⭐⭐⭐⭐
- Typography: ⭐⭐⭐⭐☆
- Buttons & CTAs: ⭐⭐⭐⭐☆
- Card Design: ⭐⭐⭐⭐⭐
- Image Integration: ⭐⭐⭐⭐☆
- Responsive Design: ⭐⭐⭐⭐⭐
- Accessibility: ⭐⭐⭐⭐☆
- Brand Alignment: ⭐⭐⭐⭐⭐
- Polish & Details: ⭐⭐⭐⭐☆

### ✅ What's Working Well
- [List strengths and successes]

### 🔧 Opportunities for Improvement
1. [Issue]: [Description] - **Priority: High**
   - Suggested fix: [Solution]
   
2. [Issue]: [Description] - **Priority: Medium**
   - Suggested fix: [Solution]

### 📝 Specific CSS/HTML Changes Recommended
- [Specific code changes needed]

### 🎯 Next Steps
1. [Action item]
2. [Action item]
```

---

## Design Principles for This Project

### Warm & Inviting
- Use the honey and cream tones prominently
- Soft rounded corners throughout
- Gentle animations and transitions

### Trustworthy & Professional
- Navy blue provides stability and trust
- Clear information hierarchy
- Consistent spacing and alignment

### Accessible & Inclusive
- High contrast text
- Large touch targets
- Clear interactive states

### Mobile-First
- Responsive layout at all breakpoints
- Appropriate font sizes for mobile
- Touch-friendly navigation

---

## Quick Links

- **Color Reference**: See CSS variables in `css/styles.css`
- **Current Design System**: Defined in `css/styles.css` (lines 1-150)
- **Pages to Review**:
  - Homepage: `index.html`
  - My Story: `pages/my-story.html`
  - Partnership: `pages/partnership.html`
  - Newsletter: `pages/newsletter.html`
  - Contact: `pages/contact.html`

---

## How to Request a Design Review

Use this prompt with Copilot's design review capabilities:

```
Act as a creative director reviewing the Ivy in Manila website. 
Use the DESIGN_REVIEW_SYSTEM.md as your evaluation framework. 
Review [specific page/component] and provide:
1. Ratings across all 10 design dimensions
2. What's working well
3. Specific improvement opportunities with concrete fixes
4. CSS/HTML recommendations
5. Priority-ranked action items

Be professional, specific, and actionable. Reference exact colors, spacing, and component names.
```

---

## Design Review Status

Last Review: [TBD]
Last Update: April 17, 2026

### Pages Reviewed
- [ ] Homepage (index.html)
- [ ] My Story (pages/my-story.html)
- [ ] Partnership (pages/partnership.html)
- [ ] Newsletter (pages/newsletter.html)
- [ ] Contact (pages/contact.html)

### Completed Improvements
- [Track improvements here as they're made]
