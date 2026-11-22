# Solar System Explorer

A modern, responsive astronomy landing page and interactive planet explorer built with **HTML5, CSS3, and Vanilla JavaScript**.

## Run locally
1. Extract the ZIP archive.
2. Open this folder in VS Code.
3. Launch `index.html` with Live Server, or open it directly in a modern browser.

No framework, build step, package manager, or backend is required.

## Responsive design
The layout adapts to desktop, laptop, tablet, and mobile viewports using:
- Fluid page widths and typography with `clamp()`
- CSS Grid and Flexbox with content-aware sizing
- Dedicated breakpoints for 1050px, 760px, 560px, and 360px
- Mobile navigation menu
- Planet card grids that reflow at tablet and phone sizes
- Responsive hero artwork and detail panels
- `prefers-reduced-motion` support

## Features
- Premium cosmic dark theme with ambient gradients and subtle starfield
- Responsive navigation with mobile hamburger menu
- Hero section with planetary artwork built in CSS
- Intro and mission sections
- Eight interactive planet profiles
- Filters for rocky planets, gas giants, and ice giants
- Distance, rotation, temperature, moons, and gravity facts
- Keyboard focus styles and accessible labels

## Project structure
```text
Solar-System-Explorer/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── planets.js
│   └── app.js
└── README.md
```

## Data note
Planet values are rounded educational reference figures. Temperature values for giant planets describe approximate atmospheric/cloud-top conditions rather than a solid surface. The moon counts are reference figures and may change as new moons are confirmed. Google Fonts are loaded online; system font fallbacks are included.
