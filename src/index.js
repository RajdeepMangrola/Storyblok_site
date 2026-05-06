import React from 'react';
import ReactDOM from 'react-dom/client';
import { storyblokInit, apiPlugin } from '@storyblok/react';

import App from './App';
import './index.css';

// ── Components ──────────────────────────────────────────────────────────────
import Page from './components/Page';
import Grid from './components/Grid';
import Feature from './components/Feature';
import Teaser from './components/Teaser';
import About from './components/About';

// ── Security: validate env variable at startup ───────────────────────────────
const STORYBLOK_TOKEN = process.env.REACT_APP_STORYBLOK_TOKEN;
const STORYBLOK_VERSION = process.env.REACT_APP_STORYBLOK_VERSION || 'draft';

if (!STORYBLOK_TOKEN) {
  throw new Error(
    '[Storyblok] REACT_APP_STORYBLOK_TOKEN is not set.\n' +
    'Create a .env file in the project root and add:\n' +
    'REACT_APP_STORYBLOK_TOKEN=your_preview_token_here'
  );
}

// ── Storyblok Init ───────────────────────────────────────────────────────────
storyblokInit({
  accessToken: STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    // Restrict to Storyblok's CDN only — no arbitrary API calls
    https: true,
  },
  components: {
    page: Page,
    grid: Grid,
    feature: Feature,
    teaser: Teaser,
    about: About,
  },
});

// ── Export version so App.js can use it via context ──────────────────────────
export { STORYBLOK_VERSION };

// ── Render ───────────────────────────────────────────────────────────────────
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);