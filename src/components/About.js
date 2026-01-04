import { storyblokEditable, renderRichText } from "@storyblok/react";

const About = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="about-container">
      <h1 className="about-heading">{blok.Heading}</h1>
      <div className="about-row">
        <div className="about-image-container">
          {blok.Image?.filename && (
            <img src={blok.Image.filename} alt="About" className="about-image" />
          )}
        </div>
        <div 
          className="about-content-container"
          dangerouslySetInnerHTML={{ __html: renderRichText(blok.Body) }}
        />
      </div>
    </div>
  );
};

export default About;