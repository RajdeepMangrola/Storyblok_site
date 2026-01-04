import { storyblokEditable, renderRichText, RichTextSchema } from "@storyblok/react";
import cloneDeep from "lodash/cloneDeep";

const Feature = ({ blok }) => {
  const mySchema = cloneDeep(RichTextSchema);
  mySchema.nodes.emoji = (node) => ({
    tag: [{ 
      tag: "img", 
      attrs: { src: node.attrs.fallbackImage, alt: node.attrs.name, class: "rt-emoji" } 
    }],
  });

  return (
    <div {...storyblokEditable(blok)} className="feature-card">
      <div 
        className="feature-content"
        dangerouslySetInnerHTML={{ __html: renderRichText(blok.name, { schema: mySchema }) }} 
      />
    </div>
  );
};

export default Feature;