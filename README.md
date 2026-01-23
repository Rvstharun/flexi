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

## Components Overview

### Core Blog Components
- **BlogPostItem** - Displays a single blog post in a list with preview
- **BlogPostList** - Renders a list of all blog posts
- **BlogPostDetail** - Shows the full content of a single blog post
- **BlogPostForm** - Form for creating and editing blog posts with validation

### User Interaction Components
- **DeleteButton** - Red button to trigger deletion
- **ConfirmationDialog** - Modal dialog for confirming deletions with accessibility support
- **Comment** - Individual comment display with avatar, name, date, and text
- **CommentList** - Displays all comments for a blog post
- **CommentForm** - Form for users to add new comments with validation

### Navigation & Layout Components
- **NavBar** - Fixed navigation bar with logo, links, and mobile hamburger menu
- **Layout** - Main layout wrapper providing consistent structure across pages

### Search Components
- **SearchBar** - Search input with dynamic search and debouncing
- **SearchResults** - Displays search results with highlighted matching terms and content snippets

## Key Features

### Blog Post Management
- View individual blog posts with full details
- Create new blog posts with validation
- Edit existing blog posts
- Delete blog posts with confirmation

### User Engagement
- Add comments to blog posts
- View all comments with metadata (author, date, text)
- Comment form with character limit and validation

### Search Functionality
- Real-time search across post titles and content
- Search term highlighting in results
- Case-insensitive search
- Result count and snippets with context

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

## Responsive Design

All components are fully responsive and optimized for:
- **Desktop** (1200px and above) - Full layout with optimal spacing
- **Tablet** (769px to 1199px) - Adjusted layout and typography
- **Mobile** (up to 768px) - Single column layout with touch-friendly elements

## Accessibility Features

- Semantic HTML elements for better structure
- ARIA attributes for screen reader support
- Keyboard navigation support
- Focus states for interactive elements
- Form validation with clear error messages
- Proper contrast ratios for readability
- Alt text for images
- Modal focus management

## Tech Stack

- **React** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **ESLint** - Code quality tool
- **Babel/SWC** - JavaScript transpiler for Fast Refresh

### React + Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Best Practices Implemented

- **Component Reusability** - Modular, single-responsibility components
- **State Management** - React hooks for local state management
- **Performance** - Debounced search, optimized re-renders
- **Error Handling** - Form validation and user feedback
- **Accessibility** - WCAG compliant components
- **Responsive** - Mobile-first approach

## ESLint Configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## License

This project is open source and available under the MIT License.
