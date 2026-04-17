# 🎨 Design Review Agent - Quick Start Guide

Your specialized creative director design review agent is ready to use!

---

## What You Just Created

You now have a complete design review system with:

1. **DESIGN_REVIEW_SYSTEM.md** - Framework & methodology
2. **DESIGN_REVIEW_PROMPT.md** - The creative director prompt to use with Copilot
3. **DESIGN_FIXES.md** - Tracker for improvements
4. **This file** - Quick reference guide

---

## How to Use (3 Simple Steps)

### Step 1: Prepare Your Request
Gather:
- [ ] The HTML code for the component/page you want reviewed
- [ ] The CSS styling
- [ ] A screenshot (helpful but optional)
- [ ] Context about what you're trying to achieve

### Step 2: Open Copilot Chat
In VS Code:
- Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on Mac) to open Copilot Chat
- Or click the Copilot Chat icon in the sidebar

### Step 3: Paste This Prompt & Your Code

```
Act as a creative director reviewing the Ivy in Manila website. 
Use this framework to evaluate:

COLOR PALETTE:
- Navy Soft (#3D5A73), Navy Dark (#2C3E50)
- Honey Warm (#E8945C), Honey Pale (#F0B878)  
- Cream Pale (#FEEECD), Cream Warm (#E3D6C5), Cream Extra Light (#F0EDEA)

DESIGN GOALS:
- Warm, inviting, trustworthy
- Professional ministry presence
- Accessible and responsive

EVALUATION DIMENSIONS:
1. Visual Hierarchy & Layout
2. Color Usage & Harmony
3. Typography & Readability
4. Button & CTA Design
5. Card & Component Consistency
6. Image & Media Integration
7. Responsive Design (375px, 768px, 1024px)
8. Accessibility (WCAG AA)
9. Brand Alignment
10. Polish & Details

REVIEW OUTPUT:
- Rate each dimension ⭐⭐⭐⭐☆
- What's working well (3-5 strengths)
- Opportunities for improvement (5-10 specific items)
- Priority action items (top 3)
- Specific CSS/HTML recommendations

NOW, review this [component name]:

[PASTE YOUR HTML HERE]

[PASTE YOUR CSS HERE]
```

---

## Quick Examples

### Example 1: Review Homepage Hero Section
```
@copilot Act as a creative director. Review the homepage hero section 
with the Ivy in Manila design system in mind.

HTML:
[paste hero section HTML from index.html]

CSS:
[paste hero-related CSS from styles.css]

Focus on: Visual impact, readability of overlay text, button hierarchy, 
mobile responsiveness.
```

### Example 2: Review Button Components
```
@copilot Review the button design system. Are all button variants 
(primary, secondary, tertiary, outline) consistent and polished? 
Evaluate hover/active states, accessibility, and visual hierarchy.

CSS:
[paste .btn styles from styles.css]

HTML:
[paste button examples from pages]
```

### Example 3: Accessibility Audit
```
@copilot Perform an accessibility audit of the contact form. 
Check for: label associations, color contrast, focus states, 
error messaging, mobile touch targets.

HTML:
[paste form HTML]

CSS:
[paste form CSS]
```

---

## Example Response You'll Get

```
## 🎨 Design Review: Homepage Hero Section

### 📊 Overall Design Score
⭐⭐⭐⭐☆ (4/5) - Beautiful foundation with opportunities to elevate the impact

### Ratings by Dimension
| Dimension | Rating | Notes |
|-----------|--------|-------|
| Visual Hierarchy | ⭐⭐⭐⭐☆ | Headline is clear but could be more prominent |
| Color Usage | ⭐⭐⭐⭐⭐ | Excellent honey/navy harmony |
| Typography | ⭐⭐⭐⭐☆ | Good, but line-height could be increased |
| Button & CTAs | ⭐⭐⭐⭐☆ | Three buttons create decision paralysis |
| Image Integration | ⭐⭐⭐⭐⭐ | Carousel is beautiful |
| Responsive Design | ⭐⭐⭐⭐☆ | Works well, mobile buttons could be larger |
| Accessibility | ⭐⭐⭐⭐☆ | Good, but overlay text contrast needs check |
| Brand Alignment | ⭐⭐⭐⭐⭐ | Perfectly reflects mission |
| Polish & Details | ⭐⭐⭐⭐☆ | Solid, micro-interactions could add delight |

### ✅ What's Working Beautifully
1. **Image Carousel** - The rotating images create visual interest and authenticity
2. **Color Harmony** - The navy/honey palette feels warm and trustworthy
3. **Typography Scale** - Clear hierarchy from intro text to headline
4. **Call-to-Action Buttons** - Compelling copy and good visual weight

### 🔧 Opportunities for Refinement

#### High Priority
1. **Button Hierarchy Clarification**
   - Current: Three buttons of similar visual weight
   - Recommendation: Make "Learn My Story" the primary action
   - CSS: Move Subscribe button to secondary style, adjust spacing

#### Medium Priority  
1. **Increase Text Readability**
   - Current: Intro paragraph line-height is 1.6
   - Recommendation: Increase to 1.8 for better scannability
   - CSS: Change .hero-intro { line-height: 1.8; }

### 🎯 Top 3 Priority Actions
1. Clarify button hierarchy with stronger primary CTA
2. Increase overlay text line-height for better readability
3. Verify color contrast on text overlay meets WCAG AA
```

---

## Tips for Getting Great Reviews

✅ **Do**
- Copy actual HTML/CSS code (not paraphrases)
- Provide context about design goals
- Screenshot the component if possible
- Ask follow-up questions
- Implement suggestions and request follow-up reviews

❌ **Don't**
- Paste vague descriptions without code
- Ask for style changes without explaining why
- Ignore accessibility recommendations
- Implement changes without tracking them

---

## Follow-Up Questions to Ask

After getting a review, try:

```
"Can you show me the exact CSS changes for recommendation #1?"

"How should I approach [specific improvement] on mobile devices?"

"Does this conflict with the existing design system, or extend it?"

"What's a good precedent for this pattern in high-quality websites?"

"How would you handle the focus state for this component?"
```

---

## Track Your Improvements

1. Copy recommendations from design review to `DESIGN_FIXES.md`
2. Implement changes to `css/styles.css` or `pages/*.html`
3. Mark items as "In Progress" or "Completed"
4. Request follow-up reviews to validate improvements
5. Document lessons learned

---

## Design Review Workflow

```
1. Identify component/page to review
                ↓
2. Gather HTML & CSS code
                ↓
3. Open Copilot Chat
                ↓
4. Paste prompt + code
                ↓
5. Get design feedback
                ↓
6. Prioritize recommendations
                ↓
7. Implement high-priority items
                ↓
8. Request follow-up review
                ↓
9. Iterate until satisfied
                ↓
10. Document in DESIGN_FIXES.md
```

---

## Full System Reference

### Design System Colors
See exact hex codes in `css/styles.css` (:root variables)

### Current Components
- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-tertiary`, `.btn-outline`
- Cards: `.card`, `.card-light`, `.stat-box`
- Sections: `.section`, `.section-light`, `.section-navy`
- Typography: `h1-h6`, `.hero-intro`, etc.

### Design Dimensions Evaluated
1. Visual Hierarchy & Layout
2. Color Usage & Harmony  
3. Typography & Readability
4. Button & CTA Design
5. Card & Component Consistency
6. Image & Media Integration
7. Responsive Design
8. Accessibility (WCAG AA)
9. Brand Alignment
10. Polish & Details

---

## Getting Started Right Now

**To request your first design review:**

1. Open Copilot Chat
2. Copy the prompt above
3. Add your first component (suggestion: the homepage hero section)
4. Paste the HTML and CSS
5. Hit Send and watch the creative director review come in!

---

## Prompts by Component Type

### Homepage Review
```
@copilot: Review the entire Ivy in Manila homepage as a creative director.
Evaluate visual hierarchy, narrative flow, call-to-action placement, and 
mobile responsiveness. [paste full index.html and relevant CSS sections]
```

### Button System Review
```
@copilot: Evaluate the complete button design system. Check consistency
across btn-primary, btn-secondary, btn-tertiary, and btn-outline variants.
Test hover/active/focus states. [paste button CSS and examples]
```

### Card Component Review
```
@copilot: Review the card component design. Are shadows consistent?
Does the hover lift feel polished? Check desktop vs. mobile spacing.
[paste .card CSS and examples]
```

### Mobile Responsiveness Check
```
@copilot: Audit mobile responsiveness at 375px, 768px, and 1024px breakpoints.
Check touch targets, text sizing, navigation, and layout reflow.
[paste responsive CSS and examples]
```

### Accessibility Audit
```
@copilot: Perform a WCAG AA accessibility audit. Check color contrast,
focus states, keyboard navigation, form labeling, and semantic HTML.
[paste HTML and CSS]
```

---

## Files You Need

- ✅ **DESIGN_REVIEW_SYSTEM.md** - Evaluation framework
- ✅ **DESIGN_REVIEW_PROMPT.md** - Full creative director prompt
- ✅ **DESIGN_FIXES.md** - Improvement tracker
- ✅ **QUICK_START.md** - This file!

All files are in your `/Users/ivydunlap/Repos/prospectus/` folder.

---

## Questions?

The comprehensive framework in `DESIGN_REVIEW_SYSTEM.md` explains:
- All 10 design dimensions in detail
- How to structure reviews
- How to track improvements
- Best practices for design critiques

The detailed prompt in `DESIGN_REVIEW_PROMPT.md` includes:
- Complete creative director system prompt
- How to integrate with your workflow
- Example prompts for different scenarios
- Tips for getting the best feedback

---

**You're all set! Your specialized design review agent is ready to make your website shine. 🌟**

Start with your homepage hero section and watch the magic happen!

---

**Created**: April 17, 2026  
**For**: Ivy in Manila Ministry Website Design Reviews
