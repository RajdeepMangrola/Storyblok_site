import { storyblokEditable, renderRichText } from "@storyblok/react";
import { RichTextSchema } from "@storyblok/react";
import cloneDeep from "lodash/cloneDeep";

const Feature = ({ blok }) => {
  // 1. Create a safe copy of the default schema
  const mySchema = cloneDeep(RichTextSchema);

  // 2. Explicitly tell the renderer how to handle the 'emoji' node from your JSON
  mySchema.nodes.emoji = (node) => ({
    tag: [
      {
        tag: "img",
        attrs: {
          src: node.attrs.fallbackImage,
          alt: node.attrs.name,
          class: "rt-emoji",
          style: "width: 1.25em; height: 1.25em; vertical-align: middle; display: inline-block;"
        },
      },
    ],
  });

  return (
    <div {...storyblokEditable(blok)} className="feature-card">
      <div 
        className="feature-content"
        dangerouslySetInnerHTML={{ 
          __html: renderRichText(blok.name, { schema: mySchema }) 
        }} 
      />

      <style jsx>{`
        .feature-card {
          padding: 24px;
          border: 1px solid #f0f0f0;
          border-radius: 12px;
          background: #fff;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* FIX: Main Image Alignment (400x200) */
        .feature-content :global(img:not(.rt-emoji)) {
          width: 400px !important;
          height: 200px !important;
          object-fit: contain !important;
          display: block;
          margin: 0 auto 20px auto;
          background: #fcfcfc;
        }

        /* FIX: Ensure Text Starts at Same Level */
        .feature-content :global(p:has(img:not(.rt-emoji))) {
          margin: 0 !important;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-content :global(h2) {
          color: #00b3b0;
          margin-bottom: 12px;
        }

        .feature-content :global(p) {
          line-height: 1.6;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Feature;