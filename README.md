# E-Commerce Project

A React + Vite e-commerce frontend project with product browsing, category-based shopping, product details, cart functionality, and authentication screens.

## Current Project Status

This project currently includes:

- Home page
- Category listing page
- Category-specific products page
- Products listing page
- Product details page
- Cart page
- Login and Register pages
- Context-based shopping cart state management
- Tailwind CSS styling
- React Router navigation

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- React Icons
- ESLint
- Prettier

## Project Structure

```text
E-Commerce/
+-- public/
+-- src/
¦   +-- assets/
¦   +-- components/
¦   +-- contexts/
¦   ¦   +-- ShopContext.jsx
¦   +-- layouts/
¦   ¦   +-- AuthLayout.jsx
¦   ¦   +-- MainLayout.jsx
¦   +-- pages/
¦   ¦   +-- Cart.jsx
¦   ¦   +-- Category.jsx
¦   ¦   +-- CategoryProductsPage.jsx
¦   ¦   +-- Home.jsx
¦   ¦   +-- Login.jsx
¦   ¦   +-- ProductDetails.jsx
¦   ¦   +-- Products.jsx
¦   ¦   +-- Register.jsx
¦   +-- App.jsx
¦   +-- index.css
¦   +-- main.jsx
¦   +-- ...
+-- .gitignore
+-- eslint.config.js
+-- index.html
+-- package.json
+-- package-lock.json
+-- README.md
+-- vite.config.js
+-- ...
```

## Available Routes

- `/` - Home page
- `/category` - Categories overview
- `/category/:categoryId` - Products under a specific category
- `/products` - All products
- `/products/:id` - Product details page
- `/cart` - Shopping cart
- `/login` - Login page
- `/register` - Registration page

## Features Implemented

### Shopping Experience
- Browse products by category
- View full product details
- Add products to cart
- Navigate to cart from product actions
- Product size rendering for applicable products

### App State
- Global cart state is managed using React context in `ShopContext`
- Application routing is handled through `react-router-dom`

### UI
- Responsive layouts
- Tailwind-based styling
- Clean card and detail-page design

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the project

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Lint the project

```bash
npm run lint
```

## Notes

This README reflects the current state of the project as it exists in the workspace. Additional features can be added later as the project continues to grow.
