import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Grid = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="grid-container">
    {blok.columns.map((blok) => (
      <StoryblokComponent blok={blok} key={blok._uid} />
    ))}
  </div>
);

export default Grid;