import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => (
  <h2 {...storyblokEditable(blok)} className="teaser-headline">
    {blok.headline}
  </h2>
);

export default Teaser;