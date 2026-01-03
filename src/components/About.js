import { storyblokEditable, renderRichText } from "@storyblok/react";

const About = ({ blok }) => {
  const styles = {
    container: { maxWidth: '1100px', margin: '60px auto', padding: '0 20px', fontFamily: 'sans-serif' },
    heading: { fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' },
    row: { display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' },
    imageContainer: { flex: '1 1 350px' },
    image: { width: '100%', borderRadius: '12px' },
    contentContainer: { flex: '1.5 1 450px', fontSize: '1.1rem', lineHeight: '1.8' }
  };

  return (
    <div {...storyblokEditable(blok)} style={styles.container}>
      <h1 style={styles.heading}>{blok.Heading}</h1>

      <div style={styles.row}>
        {/* Left Side: Image */}
        <div style={styles.imageContainer}>
          {blok.Image?.filename && (
            <img src={blok.Image.filename} alt="Rajdeep Mangrola" style={styles.image} />
          )}
        </div>

        {/* Right Side: Rich Text Fix */}
        <div 
          style={styles.contentContainer}
          dangerouslySetInnerHTML={{ __html: renderRichText(blok.Body) }}
        />
      </div>
    </div>
  );
};

export default About;