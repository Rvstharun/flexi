# Flexi Blog

A modern, fast blog application built with React and Vite. This project showcases a clean UI for displaying blog posts with a component-based architecture.

## Features

- ⚡ Lightning-fast development with Vite
- ⚙️ Hot Module Replacement (HMR) for instant updates
- 📝 Dynamic blog post listing and display
- 📖 View individual blog posts with full details
- ✏️ Create and edit blog posts with form validation
- 🗑️ Delete blog posts with confirmation dialog
- 🧭 Responsive navigation and layout system
- 💬 Comment system for user engagement
- 🔍 Advanced search functionality with highlighting
- 🎨 Fully responsive design (Desktop, Tablet, Mobile)
- ♿ Comprehensive accessibility support
- 🎯 Component-based architecture with CSS modules

## Project Structure

```
src/
├── components/
│   ├── BlogPostItem/           # Individual blog post display
│   ├── BlogPostList/           # Blog list with all posts
│   ├── BlogPostDetail/         # Full blog post view (Challenge 2)
│   ├── BlogPostForm/           # Create/edit blog posts (Challenge 3)
│   ├── DeleteButton/           # Delete action button (Challenge 4)
│   ├── ConfirmationDialog/     # Delete confirmation dialog (Challenge 4)
│   ├── NavBar/                 # Navigation bar (Challenge 5)
│   ├── Layout/                 # Main layout wrapper (Challenge 5)
│   ├── Comment/                # Single comment display (Challenge 6)
│   ├── CommentList/            # Comments list (Challenge 6)
│   ├── CommentForm/            # Add comment form (Challenge 6)
│   ├── SearchBar/              # Search input field (Challenge 7)
│   └── SearchResults/          # Search results display (Challenge 7)
├── assets/                     # Images and media files
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles
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
