````
# Mahmood ul Islam Portfolio

Welcome to my Next.js portfolio website repository! This site introduces me—Mahmood ul Islam—and showcases my web development skills, work experience, and projects.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [To-Do](#to-do)
- [Contact](#contact)
- [License](#license)

## Introduction

Hello! I’m Mahmood ul Islam, a software engineer specializing in modern web development. This portfolio demonstrates my coding style, highlights my projects, and provides my background and contact information.

## Features

### Core Pages & Sections

- **Home/Landing**: Animated hero section with a brief introduction.
- **About Me**: Personal bio, downloadable CV, and summary of background.
- **Projects**: Showcase of completed and ongoing projects with live demos and repository links.
- **Skills**: Dynamic skill icons with tooltips indicating proficiency levels.
- **Experience**: Timeline or summary of past roles and work history.
- **Contact**:
  - Form powered by EmailJS for direct messaging (`@emailjs/browser`).
  - Interactive Google Map via `@react-google-maps/api` & `@google-maps/react-wrapper` showing my location.
  - Social media links (GitHub, LinkedIn, Twitter).

### Styling & Theming

- **Sass** for modular, nested styling.
- **Material UI** (`@mui/material` & `@mui/icons-material`) for consistent component layouts and icons.
- **Future**: Context-based theme support for light/dark mode.

### Animations & Effects

- **Scroll Animations**: `rc-scroll-anim` for scroll-triggered effects.
- **Smooth Transitions**: `rc-tween-one` for animations.
- **Reveal Animations**: `react-awesome-reveal` for element entry effects.
- **Parallax**: `react-scroll-parallax` for layered scrolling.
- **Tooltips**: `react-tooltip` for hover info on icons.

### Performance Optimizations

- **Dynamic Imports** using Next.js `dynamic()` to lazy-load heavy components.
- **Image Optimization** via `@uploadcare/nextjs-loader`.
- **State Serialization** handled by `circular-json`.

### Configuration & Deployment

- **Scripts**: `dev`, `build`, `start`, `lint` configured in `package.json`.
- **ESLint**: Linting enforced (`eslint`, `eslint-config-next`).
- **TypeScript** support with `typescript`, `@types/*`, and CSS modules plugin.
- **Vercel**: Automatic builds and deployments on push to `main`.

### Utilities & Helpers

- Email service utilities integrating EmailJS SDK.
- Map configuration utilities for Google Maps API.
- Environment variables managed in `.env.local` (EmailJS keys, Google Maps API key).

## Tech Stack

- **Framework**: Next.js (v13.5.x)
- **Language**: TypeScript & JavaScript
- **Styling**: Sass, MUI (Material UI)
- **Maps**: `@react-google-maps/api` & `@google-maps/react-wrapper`
- **Forms**: EmailJS Browser SDK
- **Animations**: `rc-scroll-anim`, `rc-tween-one`, `react-awesome-reveal`, `react-scroll-parallax`
- **Deployment**: Vercel

## Getting Started

### Clone the repository

```bash
git clone git@github.com:MahmoodUlIslam/portfolio.git
cd portfolio
```
````

### Install dependencies

```bash
npm install
```

### Setup environment variables

Create a `.env.local` file at the project root.

Add EmailJS and Google Maps API keys:

```env
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
```

### Run in development

```bash
npm run dev
```

### Build and start

```bash
npm run build
npm run start
```

Push to `main` triggers Vercel for automatic deployment.

## Project Structure

```plaintext
portfolio/
├── public/          # Static assets (images, icons)
├── src/
│   ├── components/  # Reusable React components (Hero, Projects, Map, ContactForm)
│   ├── pages/       # Next.js page routes
│   ├── styles/      # Sass/CSS modules
│   └── utils/       # Helper functions (emailService, mapConfig)
├── .env.local       # Environment variables
├── next.config.js   # Next.js config
├── package.json     # Scripts & dependencies
└── README.md        # Project documentation
```

## To-Do

- [ ] Add more animations to the project sections.
- [ ] Implement light/dark mode toggle.
- [ ] Enhance performance optimizations.

## Contact

Feel free to connect:

- ✉️ Email: [your.email@example.com](mailto:your.email@example.com)
- 💼 LinkedIn: [My LinkedIn Profile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [My GitHub Profile](https://github.com/MahmoodUlIslam)

## License

This project is licensed under the [MIT License](LICENSE).

```

```
