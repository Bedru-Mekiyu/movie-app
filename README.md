# Movie Discovery Web Application

A modern, responsive React web application for discovering popular movies and searching for films using The Movie Database (TMDB) API. Built with React 19, Vite, and React Router v7.

## Key Features

- **Popular Movies Display**: Browse currently popular movies fetched live from TMDB API.
- **Movie Search**: Search for movies by title with real-time feedback and state management.
- **Favorites Management**: Save favorite movies locally using React Context API and `localStorage` persistence.
- **Responsive UI**: Clean, custom CSS layout with smooth transitions and responsive movie poster cards.

## Technology Stack

- **Frontend Library**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router v7
- **State Management**: React Context API (`MovieContext`)
- **API**: The Movie Database (TMDB) API
- **Code Quality**: ESLint 9

## Project Structure

```text
movie-app/
├── public/               # Static assets
├── src/
│   ├── assets/           # Project visual assets
│   ├── components/       # Reusable UI components
│   │   ├── MovieCard.jsx # Movie item card component
│   │   └── NavBar.jsx    # Application navigation header
│   ├── contexts/         # State management contexts
│   │   └── MovieContext.jsx # Context provider for favorites state
│   ├── css/              # Application styles
│   │   ├── App.css
│   │   ├── Favorites.css
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   ├── Navbar.css
│   │   └── index.css
│   ├── pages/            # Application views/routes
│   │   ├── Favorites.jsx # Favorites page view
│   │   └── Home.jsx      # Home/Search page view
│   ├── services/         # API integration layer
│   │   └── api.js        # TMDB API fetch functions
│   ├── App.jsx           # Main App component & router setup
│   └── main.jsx          # Application entry point
├── .github/
│   └── workflows/
│       └── ci.yml        # Continuous Integration workflow
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Dependency definitions and scripts
└── vite.config.js        # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v18.x or v20.x recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd movie-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to the local server URL indicated in the terminal (typically `http://localhost:5173`).

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Runs ESLint to inspect code formatting and quality.
- `npm run preview`: Previews the production build locally.

## Continuous Integration

Automated continuous integration is set up via GitHub Actions (`.github/workflows/ci.yml`). On every push and pull request to `main` or `master`, the workflow:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies (`npm ci`).
4. Runs the linter (`npm run lint`).
5. Executes the production build (`npm run build`).
