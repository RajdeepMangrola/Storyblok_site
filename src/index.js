import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// Removed unused Routes and Route to fix ESLint warnings
import { BrowserRouter, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import About from "./components/About";

storyblokInit({
  accessToken: "AOjPuCQG5Joc80VBPPQpQwtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    about: About,
  },
  apiOptions: {
    region: ''
  }
});

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* BrowserRouter must wrap the entire app for Links to work */}
    <BrowserRouter>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        fontFamily: 'sans-serif'
      }}>
        
        {/* Navigation - Now works as a true SPA */}
        <nav style={{ padding: '20px', background: '#fff', borderBottom: '1px solid #eee', display: 'flex', gap: '20px' }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#00b3b0' }}>Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/about" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#00b3b0' }}>About Me</Link>
          </motion.div>
        </nav>

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          <App />
        </main>

        {/* Footer */}
        <footer style={{ padding: '20px', borderTop: '1px solid #eee', background: '#f9f9f9', textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
            Task 1 for Storyblok - Rajdeep Mangrola
          </p>
        </footer>

      </div>
    </BrowserRouter>
  </React.StrictMode>
);