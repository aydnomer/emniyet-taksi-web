<div align="center">

# 🚕 Emniyet Taksi · Website + PWA

[![Live](https://img.shields.io/badge/Live-emniyettaksi.com.tr-facc15?style=for-the-badge&logo=googlechrome&logoColor=black)](https://emniyettaksi.com.tr)
![PWA](https://img.shields.io/badge/PWA-installable-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

A production website and installable mobile web app I built alone for a taxi business in Elazığ. It runs on the client's own domain and lets customers call a taxi, send their GPS location and install the site on their phone like an app.

**Built:** 2026, solo · **Live:** [emniyettaksi.com.tr](https://emniyettaksi.com.tr)

## What I did

- **Designed and built the site from scratch**, mobile-first, with Tailwind CSS and vanilla JavaScript.
- **Turned it into a Progressive Web App**: manifest, maskable icons, a custom install button for Android and install guidance for iPhone.
- **Wrote a service worker** with a network-first caching strategy, so users always get the latest version online and the site still opens offline.
- **Used the Geolocation API** to turn the user's GPS position into a Google Maps link and open WhatsApp with it, so customers can share their location in one tap.
- **Handled local SEO**: Schema.org structured data, meta and Open Graph tags, and Google Search Console setup.
- **Deployed it** on GitHub Pages with a custom domain and HTTPS.

## Engineering highlights

- **Zero build step, no framework:** one HTML file plus a small service worker, so it loads fast and is easy to maintain.
- **Cache versioning:** old caches are cleared on every release, and third-party content (maps) is never cached.
- **Accessibility:** skip link, keyboard focus styles, ARIA labels, live status messages and support for `prefers-reduced-motion`.
- **Resilient UI:** images are preloaded before the slideshow starts, so a missing file never breaks the page; animations pause when the tab is hidden.
- **Clear error handling** when location permission is denied or not supported.

## Skills used

`HTML5` `Tailwind CSS` `JavaScript` `PWA` `Service Workers` `Cache API` `Geolocation API` `Responsive design` `Accessibility` `SEO` `Schema.org` `GitHub Pages`

## What I learned

- Building for real users on real phones, where speed and simplicity matter more than features.
- How service workers and caching strategies work, and how to ship updates without users getting stuck on an old version.
- Taking a project from idea to a live product on a custom domain.

## Project structure

| File | Purpose |
|---|---|
| `index.html` | The whole site: markup, Tailwind styles and JavaScript |
| `sw.js` | Service worker with network-first caching and cache versioning |
| `manifest.json` | PWA manifest (name, colors, icons) |
| `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` | Home-screen icons |
| `taksi*.jpg` | Slideshow photos |
| `CNAME` | Custom domain for GitHub Pages |

## Run locally

```bash
git clone https://github.com/aydnomer/emniyet-taksi-web.git
cd emniyet-taksi-web
python -m http.server 8000
```

Open http://localhost:8000 (a local server is needed for the service worker).

---

Designed and developed by **[Ömer Faruk Aydın](https://github.com/aydnomer)**
