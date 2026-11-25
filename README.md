<div align="center">

# 🚕 Emniyet Taksi · Elazığ

**Website and installable mobile app (PWA) for a 24/7 taxi service in Elazığ, Türkiye**

[![Live](https://img.shields.io/badge/Live-emniyettaksi.com.tr-facc15?style=for-the-badge&logo=googlechrome&logoColor=black)](https://emniyettaksi.com.tr)
![PWA](https://img.shields.io/badge/PWA-installable-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## About the project

Emniyet Taksi (also known as Elysium Taksi) is a licensed taxi service in Elazığ that works around the clock: city rides, airport transfers, intercity trips and night service.

I designed, built and deployed the site end to end as a freelance client project. It runs on the business's own domain, and customers use it to call a taxi, share their location and install the site on their phone like an app.

| | |
|---|---|
| **Client** | Emniyet Elysium Taksi, Elazığ |
| **Role** | Design, development, deployment, domain and SEO setup (solo) |
| **Type** | Business website + Progressive Web App |
| **Status** | Live in production at [emniyettaksi.com.tr](https://emniyettaksi.com.tr) |

## Goals

1. **Get a customer to a taxi in as few taps as possible.** Every screen has a visible "call" action.
2. **Remove the "where are you?" phone call** by letting customers send their exact location.
3. **Be found on Google** for searches like "Elazığ taksi" and "Elazığ havalimanı transfer".
4. **Feel like an app** on the phone without needing an App Store release.
5. **Build trust** with a professional look, the official vehicle details and real Google reviews.

## What was built

### Customer features

- **One-tap call and WhatsApp.** Call buttons in the header, hero, contact section and a sticky bottom bar on mobile; a floating WhatsApp button on desktop with a pre-filled message.
- **Send my location.** One button reads the phone's GPS through the Geolocation API, turns it into a Google Maps link and opens WhatsApp with the message ready to send. Clear messages are shown if location permission is denied or unsupported.
- **Install as an app.** A custom "Add to phone" button uses the browser's install prompt on Android and Chrome; on iPhone it shows "Share → Add to Home Screen" instructions instead. The buttons hide themselves once the app is installed.
- **Works on a weak connection.** A service worker keeps a copy of the page and photos, so the site still opens with poor or no signal.
- **Services section:** city rides, airport transfer, intercity trips and night taxi.
- **Trust section:** official commercial vehicle plate, vehicle standards and a Google reviews card (5.0 rating) with links to read and write reviews.
- **FAQ** with expandable answers (arrival time, night service, how to send your location).
- **Contact and map:** phone, WhatsApp, full address and an embedded Google Map with a "view on map" link.
- **Photo slideshow** of the vehicles in the hero, with a blurred background fill so photos of any shape look good.

### SEO and discoverability

- Custom domain (`emniyettaksi.com.tr`) connected to GitHub Pages over HTTPS.
- **Schema.org `TaxiService` structured data** with name, alternate name, phone, address, coordinates, service area and 24/7 opening hours, so Google can show the business as a local result.
- Title, meta description and keywords written for local searches.
- **Open Graph tags** for a clean preview when the link is shared on WhatsApp and social media.
- **Google Search Console** ownership verified for indexing and search monitoring.

### Accessibility

- "Skip to content" link and visible keyboard focus outlines.
- `aria-label`, `aria-expanded` and `aria-controls` on the menu and icon-only buttons.
- `aria-live` status messages for the location feature.
- Respects **`prefers-reduced-motion`**: slideshow, pulse and bounce animations are turned off for users who ask for less motion.
- Semantic HTML (`nav`, `main`, `section`, `footer`, `details/summary`) and alt text on images.

### Performance

- **No framework and no build step:** the whole site is one HTML file plus a small service worker.
- Slideshow images are preloaded in the background and only shown once loaded; a missing image never breaks the page.
- The slideshow pauses while the tab is hidden.
- The map iframe is lazy-loaded.
- Font preconnect to cut font loading time.

## Technical decisions

| Decision | Why |
|---|---|
| **Static site, no backend** | The business needs calls and messages, not accounts or forms. A static site is fast, free to host and has nothing to break or patch. |
| **PWA instead of a native app** | Customers get a home screen icon and an app-like full screen experience without an App Store or Play Store release. |
| **Network-first caching** in the service worker | Customers always get the latest version when online and fall back to the cached copy when offline. Old caches are cleared on every new version, and Google Maps is never cached. |
| **WhatsApp + GPS for location** | Every customer already has WhatsApp. Sending a Maps link there needs no extra app, account or server. |
| **Tailwind CSS** | Fast, consistent, mobile-first styling directly in the markup. |
| **GitHub Pages + custom domain** | Free HTTPS hosting; every push to `main` goes live automatically. |

## Tech stack

**Frontend:** HTML5 · Tailwind CSS · Vanilla JavaScript · Font Awesome · Google Fonts (Poppins)
**PWA:** Web App Manifest · Service Worker (Cache API) · maskable icons · install prompt
**Browser APIs:** Geolocation API · Service Worker API · `matchMedia` (display mode, reduced motion)
**SEO:** Schema.org JSON-LD · Open Graph · Google Search Console
**Hosting:** GitHub Pages · custom domain (CNAME) · HTTPS

## Project structure

```
emniyet-taksi-web/
├── index.html              # page, Tailwind styles, structured data and scripts
├── sw.js                   # service worker: network-first cache, offline fallback
├── manifest.json           # PWA manifest: name, colors, icons, standalone mode
├── icon-192.png            # app icons (incl. maskable 512 px for Android)
├── icon-512.png
├── icon-512-maskable.png
├── ikon.png                # Apple touch icon
├── taksi*.jpg              # vehicle photos for the hero slideshow
├── google…html             # Google Search Console verification
└── CNAME                   # custom domain for GitHub Pages
```

## Run locally

```bash
git clone https://github.com/aydnomer/emniyet-taksi-web.git
cd emniyet-taksi-web
python -m http.server 8000
```

Then open http://localhost:8000. Use a local server rather than opening the file directly, so the service worker can register.

## Deployment

Pushing to `main` publishes the site with GitHub Pages. The `CNAME` file points it to `emniyettaksi.com.tr`. When the cached files change, bump `CACHE_NAME` in `sw.js` so returning visitors get the new version.

---

<div align="center">

Designed and developed by **[Ömer Faruk Aydın](https://github.com/aydnomer)**

</div>
