# Emniyet Taksi · Elazığ

Website and installable PWA for **Emniyet Taksi**, a 24/7 taxi service in Elazığ, Türkiye. It is live on the business's own domain and used by real customers to call a taxi.

🌐 **Live:** [emniyettaksi.com.tr](https://emniyettaksi.com.tr)

## Features

- **One-tap calling** – call buttons and WhatsApp links for every driver line.
- **Send my location** – uses the browser's Geolocation API to build a Google Maps link and opens WhatsApp with it, so the driver knows exactly where to go.
- **Installable app (PWA)** – web app manifest, maskable icons and an install prompt; on iOS it shows "Add to Home Screen" guidance.
- **Works offline** – a service worker caches the page and images, so the site opens even with a weak connection.
- **Local SEO** – Schema.org `TaxiService` structured data (address, coordinates), Open Graph tags and Google Search Console verification.
- **Mobile-first, responsive design** – built for phones first, scales up to desktop.
- **Sections** – services (city rides, airport transfer, intercity, night taxi), why us, FAQ and contact.

## Tech

HTML · Tailwind CSS · Vanilla JavaScript · Service Worker · Web App Manifest · GitHub Pages (custom domain)

No build step and no framework: the whole site is a single `index.html`, which keeps it fast and easy to host.

## Project structure

```
index.html            page, styles (Tailwind) and scripts
sw.js                 service worker (offline cache)
manifest.json         PWA manifest
icon-*.png, ikon.png  app icons
taksi*.jpg            photos
CNAME                 custom domain for GitHub Pages
```

## Run locally

```bash
git clone https://github.com/aydnomer/emniyet-taksi-web.git
cd emniyet-taksi-web
python -m http.server 8000
```

Open http://localhost:8000. A local server is needed (not `file://`) so the service worker can register.

## Deployment

Every push to `main` is published by GitHub Pages to `emniyettaksi.com.tr` through the `CNAME` file.

---

Built by [Ömer Faruk Aydın](https://github.com/aydnomer).
