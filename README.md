# Flexi Blog

A modern, fast blog application built with React and Vite. This project showcases a clean UI for displaying blog posts with a component-based architecture.

## Features

- ⚡ Lightning-fast development with Vite
- ⚙️ Hot Module Replacement (HMR) for instant updates
- 📝 Dynamic blog post listing and display
- 🎨 Responsive design with CSS styling
- 🔍 ESLint configuration for code quality
- 🎯 Component-based architecture

## Project Structure

```
src/
├── components/
│   ├── BlogPostItem/       # Individual blog post component
│   ├── BlogPostList/       # Blog list display component
├── assets/                 # Images and media files
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point
└── index.css               # Global styles
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` with HMR enabled.

## Build

Build for production:
```bash
npm run build
```

## Preview

Preview the production build:
```bash
npm run preview
```

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code quality tool
- **Babel/SWC** - JavaScript transpiler for Fast Refresh

### React + Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ESLint Configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## License

This project is open source and available under the MIT License.
