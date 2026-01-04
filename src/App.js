import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import './App.css'; 

function App() {
  const location = useLocation();

  
  let slug =
    location.pathname === "/"
      ? "home"
      : location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "published" });


  if (!story || !story.content) {
    return <div className="loading-state">Loading...</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <StoryblokComponent blok={story.content} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
