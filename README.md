# HOP Theme for Salla

A bold, minimal streetwear-inspired theme for Salla stores — built with the Twilight Engine.

Inspired by Hellstar.com: full-width product grid, image hover swap, dark aesthetic, clean typography.

## Stack
- Twig (Twilight Engine)
- Vanilla CSS (no preprocessor required)
- Vanilla JS (no dependencies)

## Structure
```
src/
├── assets/
│   ├── js/app.js
│   └── styles/app.css
├── locales/
│   ├── ar.json
│   └── en.json
└── views/
    ├── layouts/master.twig
    ├── components/
    │   ├── header/header.twig
    │   ├── footer/footer.twig
    │   ├── home/ (hero-slider, promo-banner, categories-grid)
    │   ├── product/
    │   └── comments.twig
    ├── partials/product/ (card, card-mini, card-full-image, options, slider)
    ├── pages/ (index, cart, thank-you, loyalty, page-single, landing-page)
    ├── product/ (index, single)
    ├── blog/ (index, single)
    ├── brands/ (index, single)
    ├── customer/ (profile, wishlist, notifications, sidebar, orders/)
twilight.json
package.json
```

## Custom Components
- **hero-slider** — Full-screen hero slider with autoplay + touch
- **promo-banner** — Promotional content block
- **categories-grid** — 4-column category cards

## Theme Settings
| ID | Type | Description |
|---|---|---|
| topnav_is_dark | boolean | Dark header |
| header_is_sticky | boolean | Sticky header |
| footer_is_dark | boolean | Dark footer |
| show_announcement_bar | boolean | Show top bar |
| announcement_text | string | Top bar message |
| sticky_add_to_cart | boolean | Sticky mobile CTA |
