# 🛍️ Next.js Complete Ecommerce

> Storefront with Sanity-powered catalog and Stripe Checkout — built on Next.js.

![Next.js](https://img.shields.io/badge/Next.js-12-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=000)
![Sanity](https://img.shields.io/badge/Sanity-CMS-f03e2f?logo=sanity&logoColor=fff)
![Stripe](https://img.shields.io/badge/Stripe-Checkout-635bff?logo=stripe&logoColor=fff)

### 🚀 [Try it live →](https://next-js-complete-ecommerce.vercel.app)

A small ecommerce demo where products and hero/footer banners are managed in Sanity Studio, and checkout runs through a Stripe-hosted session.

## ✨ Features
- **Sanity CMS-driven catalog** — products and banners edited from Sanity Studio (`sainty/`), rendered via `@sanity/client`
- **Product detail pages** with image gallery, quantity selector and "Add to cart"
- **Slide-out cart** with quantity adjust, remove and live totals
- **Stripe Checkout** — server-created session in `pages/api/stripe.js` with shipping rates and image passthrough
- **Success page** with confetti via `canvas-confetti` and cart reset
- **Toast notifications** via `react-hot-toast` for cart actions

## 🛠️ Tech Stack
- **Framework** — Next.js 12 + React 18 (Pages Router)
- **CMS** — Sanity (`@sanity/client`, `@sanity/image-url`)
- **Payments** — Stripe Checkout (`stripe`, `@stripe/stripe-js`)
- **State** — React Context (`context/StateContext.js`)
- **Styling** — Plain CSS / CSS Modules

## 📖 Getting Started

```bash
yarn
yarn dev
```

For the Sanity Studio:

```bash
cd sainty
yarn
yarn start
```

### Environment variables

Create a `.env.local` with:

```
NEXT_PUBLIC_SANITY_TOKEN=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_...
```

The Sanity `projectId` (`ipi7sjdx`) and `dataset` (`production`) are hard-coded in `lib/client.js` — change them to your own project before running.

## 🙌 Credits
Built by [Mohamed Gado](https://mohamedgado.com).
