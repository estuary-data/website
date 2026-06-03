# Estuary Data — Website

A clean, professional one-page marketing website for Estuary Data LLC, a data migration and
integration consultancy serving small to mid-size nonprofits.

**Live URL:** https://estuarydata.io
**Hosting:** Netlify (free tier, deployed from this repo)
**Stack:** HTML, CSS, vanilla JavaScript — no frameworks, no build tools, no dependencies

---

## Business Context

Estuary Data LLC is a solo consulting practice run by Dan Bellenoit, a software engineer based
in West Hartford, CT. The business specializes in:

- CRM and platform data migrations for nonprofits
- API integrations between nonprofit software tools
- Data cleanup, transformation, and automation

**Target clients:** Nonprofit organizations with 20-200 employees and $2M-$10M annual budgets,
particularly in special education and human services. Based in Connecticut, expanding via referral.

**Tone:** Professional but warm. Not corporate. Not startup-y. The kind of person you'd trust
with your donor data.

---

## Site Structure

This is a single page — `index.html`. No subpages to start.

### Sections (in order):

1. **Header / Nav**
   - Logo (SVG or PNG from assets/logo/)
   - Name: Estuary Data
   - Single CTA button: "Get in Touch" → scrolls to contact section

2. **Hero**
   - Headline: clear, direct value proposition
   - Subhead: one sentence on who we serve
   - Single CTA button: "See How It Works" → scrolls to services

3. **Services**
   - Three offerings:
     - Data Migration — move your contacts, donors, and history to a new platform cleanly
     - Platform Integration — connect your tools so data flows automatically between them
     - Data Cleanup — deduplicate, standardize, and validate your existing data
   - Each with a simple icon, short headline, and 2-3 sentence description

4. **Who We Serve**
   - Short paragraph about nonprofit focus
   - Mention of special education and human services experience
   - Keep it specific — small team, limited IT resources, platform switching challenges

5. **How It Works**
   - Simple 3-step process:
     1. Scoping call — understand your data, your platforms, and your timeline
     2. Migration or integration — we do the technical work, you review the output
     3. Delivery — clean files or live connection, ready to use
   - Keep it simple and reassuring for a non-technical audience

6. **Case Study / Social Proof**
   - One brief example: nonprofit CRM migration, 643 contacts, saved $5,000 in consultant fees
   - No client name needed — just the outcome
   - Quote placeholder if a testimonial comes in later

7. **Contact**
   - Simple contact form: Name, Organization, Email, Brief description of project
   - Email: dan@estuarydata.io
   - Response time note: "I typically respond within one business day"
   - No phone number needed

8. **Footer**
   - Logo
   - "Estuary Data LLC — West Hartford, CT"
   - dan@estuarydata.io
   - Link to LinkedIn (placeholder until set up)
   - Copyright line

---

## Design Direction

**Color palette:**
- Primary: Deep teal — #1B6B6B or similar
- Secondary: Slate blue — #2D4A6B or similar
- Accent: Warm white or light gray background — #F8F9FA
- Text: Near-black — #1A1A2E
- CTA buttons: Teal with white text

**Typography:**
- Clean modern sans-serif — Inter, DM Sans, or similar (load from Google Fonts)
- Headings: bold, not too large, confident
- Body: readable, 16-18px, good line height

**Logo:**
- Files will be in assets/logo/ when delivered from Fiverr
- Use SVG version where possible for crispness
- Should appear in header and footer
- If logo not yet available, use text placeholder "Estuary Data" in the brand font

**General aesthetic:**
- Minimal — lots of white space, nothing crowded
- Professional but approachable — not a startup, not a big agency
- Avoid stock photo people — use abstract shapes, icons, or simple illustrations if needed
- Should feel trustworthy to a nonprofit ED who is not technical

**Responsive:**
- Must look good on mobile — nonprofit staff often check email and browse on phones
- Simple single-column layout on mobile
- Navigation collapses cleanly on small screens

---

## File Structure

```
website/
├── CLAUDE.md           ← this file
├── index.html          ← the entire site
├── style.css           ← all styles
├── script.js           ← minimal JS (smooth scroll, form handling)
├── assets/
│   ├── logo/           ← SVG and PNG versions of Estuary Data logo
│   └── images/         ← any supporting visuals
└── README.md
```

---

## Contact Form

The contact form should be handled by **Netlify Forms** — no backend required:
- Add `netlify` attribute to the form tag
- Add a hidden input: `<input type="hidden" name="form-name" value="contact">`
- Netlify captures submissions automatically and emails them to dan@estuarydata.io
- Show a simple inline thank you message on submission via JavaScript

---

## Deployment

Hosted on Netlify free tier, connected to this GitHub repo. Every push to `main` triggers
an automatic redeploy. Custom domain estuarydata.io is configured in Netlify DNS settings.

---

## Definition of Done

- [ ] All 8 sections present and complete
- [ ] Logo displayed in header and footer
- [ ] Contact form submits via Netlify Forms
- [ ] Fully responsive on mobile and desktop
- [ ] Loads fast — no unnecessary libraries or large images
- [ ] Looks professional enough to send to a nonprofit ED as a first impression
- [ ] Deployed to estuarydata.io via Netlify
