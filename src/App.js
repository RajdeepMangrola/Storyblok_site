import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useStoryblokApi } from '@storyblok/react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

import StoryblokPage from './components/Page';

const STORYBLOK_VERSION = process.env.REACT_APP_STORYBLOK_VERSION || 'draft';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -12 },
};

function AnimatedRoutes() {
  const location = useLocation();
  const storyblokApi = useStoryblokApi();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const slug = location.pathname === '/' ? 'home' : location.pathname.replace(/^\//, '');

  useEffect(() => {
    let cancelled = false;

    const fetchStory = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
          version: STORYBLOK_VERSION,
        });
        if (!cancelled) setStory(data.story);
      } catch (err) {
        if (!cancelled) {
          console.error('[Storyblok] Failed to fetch story:', err);
          setError('Page not found or failed to load.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchStory();
    return () => { cancelled = true; };
  }, [slug, storyblokApi]);

  if (loading) {
    return (
      <div className="loading-wrapper" aria-live="polite">
        <div className="spinner" aria-label="Loading…" />
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="error-wrapper" role="alert">
        <h2>Oops!</h2>
        <p>{error || 'Something went wrong.'}</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="*" element={<StoryblokPage blok={story.content} />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

// BrowserRouter lives in index.js — do NOT add it here
export default function App() {
  return <AnimatedRoutes />;
}