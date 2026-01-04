import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  
  let slug =
    location.pathname === "/"
      ? "home"
      : location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "published" });

  if (!story || !story.content) {
    return <div style={{ padding: "20px" }}>Loading...</div>;
  }

  return (
    /* AnimatePresence allows components to animate out when they're removed from the React tree */
    <AnimatePresence mode="wait">
      <motion.div
        key={slug} // Critical: triggers animation on route change
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
