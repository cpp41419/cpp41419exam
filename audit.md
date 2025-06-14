# 🚀 Next.js Go-Live Audit Checklist

_Audit for: **CPP41419 Real Estate Practice Q&A Hub**_
## 📁 File-by-File Audit Checklist

Check each file for:
- 🚩 Sensitive data (API keys, secrets)
- 🚩 Debug code or logs
- 🚩 Outdated dependencies or code
- 🚩 Unused files or dead code
- 🚩 Correct permissions and naming
- 🚩 Documentation/comments where needed

---

### Root Directory

- [ ] `apphosting.yaml` — Deployment config reviewed, no secrets, correct runtime/entrypoint.
- [ ] `audit.md` — Up-to-date, reflects current audit.
- [ ] `components.json` — Only lists used components, no test/demo entries.
- [ ] `cpp41419exam-1.code-workspace` — No sensitive paths, workspace config correct.
- [ ] `docs/` — Contains only documentation, no code or secrets.
- [ ] `next.config.ts` — Production settings, no debug/test configs.
- [ ] `next-env.d.ts` — Auto-generated, not edited manually.
- [ ] `node_modules/` — Not committed to git.
- [ ] `package.json` — No unused/dev-only dependencies, scripts safe for prod.
- [ ] `package-lock.json` — In sync with `package.json`.
- [ ] `postcss.config.mjs` — Only necessary plugins/configs.
- [ ] `README.md` — Up-to-date, no sensitive info.
- [ ] `tailwind.config.ts` — Only needed paths/plugins, no test/demo configs.
- [ ] `tsconfig.json` — No dev/test overrides in prod.
- [ ] `src/` — See below for per-folder/file checks.

---

### `src/` Directory

- [ ] `src/app/` — No test/demo pages, all routes needed, metadata set.
- [ ] `src/components/` — Only used components, no test/demo files.
- [ ] `src/data/` — No sensitive data, only public/needed content.
- [ ] `src/styles/` — Only used styles, no unused/test CSS.
- [ ] `src/utils/` — Only used helpers, no debug code.
- [ ] Other subfolders/files — Review for relevance, security, and necessity.

---

### `docs/` Directory

- [ ] Only documentation files, no code or secrets.

---

### General

- [ ] No `.env*` files committed to git.
- [ ] No backup files (`*.bak`, `*~`, etc.).
- [ ] No test/demo data in production.
- [ ] All files have correct permissions (no world-writable files).

---

**Sign-off:**  
_File-by-file audit completed by:_ ___________________  
_Date:_ ___________________

---
all in schema@fedora:~/Documents/cpp41419exam-1$

## 1. Environment Configuration
- [ ] `.env.local` and/or `.env.production` exist and are **not** committed to git
- [ ] All required environment variables are set in hosting provider
- [ ] No sensitive keys in repo (`NEXT_PUBLIC_*` only for public data)

---

## 2. Build Configuration
- [ ] `next.config.ts` reviewed for production (e.g., `reactStrictMode`, `swcMinify`)
- [ ] `output: 'standalone'` set if needed
- [ ] Images optimized via `next/image`
- [ ] Dev-only packages removed from `package.json`

---

## 3. Tailwind & Styling
- [ ] `tailwind.config.ts` includes all relevant paths
- [ ] Responsive design tested on all breakpoints
- [ ] Unused CSS purged in production

---

## 4. SEO & Metadata
- [ ] Global metadata in `layout.tsx`
- [ ] Open Graph tags present
- [ ] Favicon and manifest added
- [ ] Structured data/schema.org markup validated

---

## 5. Performance Optimization
- [ ] Images/assets compressed
- [ ] Lazy-load non-critical components
- [ ] Critical fonts preloaded
- [ ] Bundle size analyzed

---

## 6. Analytics & Monitoring
- [ ] Analytics integrated (Google Analytics, Plausible, etc.)
- [ ] Error tracking set up (Sentry, Vercel, etc.)
- [ ] Pageview tracking tested

---

## 7. Security
- [ ] HTTPS enforced in production
- [ ] No `dangerouslySetInnerHTML` unless sanitized
- [ ] CSP headers set if needed

---

## 8. Deployment
- [ ] Local build tested: `npm run build && npm run start`
- [ ] Staging deployment verified
- [ ] Redirects/rewrites configured
- [ ] Custom domain set up
- [ ] CI/CD pipeline in place

---

## 9. Legal Compliance
- [ ] Privacy Policy & Terms of Service present
- [ ] Cookie consent banner (if analytics/cookies used)
- [ ] GDPR/CCPA compliance checked

---

## 10. Final Testing
- [ ] Tested on multiple devices/screen sizes
- [ ] All links/CTAs work
- [ ] Accessibility (WCAG AA) checked
- [ ] Simulated slow connection
- [ ] SEO validated (Lighthouse, Ahrefs, etc.)

---

## 11. Documentation & Handover
- [ ] `docs/` folder includes architecture, dependencies, deployment, and support contacts

---

**Sign-off:**  
_Audited by:_ ___________________