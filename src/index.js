import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

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
    {/* Flexbox Wrapper to force footer to bottom */}
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      
      {/* 1. Header/Navigation */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #eee', background: '#fff', textAlign: 'center' }}>
      <h2 style={{ margin: 0 }}>Task 1 for Storyblok - Dev Site</h2>
      </nav>

      {/* 2. Main Body (App) - flex: 1 makes this fill all empty space */}
      <main style={{ flex: 1 }}>
        <App />
      </main>

      {/* 3. Footer */}
      <footer style={{ padding: '20px', borderTop: '1px solid #eee', background: '#f9f9f9', textAlign: 'center' }}>
      <p style={{ margin: 0, color: '#666' }}>Task 1 for Storyblok - Technical Assessment</p>
      </footer>

    </div>
  </React.StrictMode>
);