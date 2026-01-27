# Developer Dashboard

A modern, responsive developer dashboard built to demonstrate professional front-end tooling and best practices. This project showcases the setup and configuration of modern development tools including Vite, ESLint, and Prettier.

## Project Overview

The Developer Dashboard is a client-side application that displays a curated collection of developer resources including tutorials, documentation, tools, and frameworks. Users can search and filter resources by category to quickly find what they need.

### Key Features

- **Real-time Search**: Instantly filter resources by name, category, or description
- **Category Filtering**: Filter resources by specific categories
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatically adapts to system color scheme preferences
- **Accessible**: Built with semantic HTML and ARIA labels
- **Fast Performance**: Optimized builds with Vite

## Tech Stack

- **Build Tool**: [Vite](https://vitejs.dev)
- **Code Quality**: [ESLint](https://eslint.org)
- **Code Formatting**: [Prettier](https://prettier.io)
- **Languages**: HTML, CSS, JavaScript (ES6+)

## Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/illonaaddae/Developer-Dashboard.git
    cd Developer-Dashboard
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server at `http://localhost:3000` with hot module replacement (HMR).

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Locally preview the production build.

### Code Quality

```bash
npm run lint        # Check for linting errors
npm run lint:fix    # Automatically fix linting errors
npm run format      # Format all files with Prettier
npm run format:check # Check if files are formatted
```

## Project Structure

```
Developer-Dashboard/
├── src/
│   ├── data/            # Static resource data
│   ├── modules/         # UI rendering logic
│   ├── utils/           # Helper functions
│   ├── main.js          # Application entry point
│   └── style.css        # Application styles
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Accessibility**: WCAG 2.1 Level AA compliant

## License

ISC License
