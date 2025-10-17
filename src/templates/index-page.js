import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
// import BannerModule from "../components/BannerModule/BannerModule";
import { FiChevronDown as ChevronDown } from "react-icons/fi";
import { GeoMap } from './geo-map';
import { motion, AnimatePresence } from "framer-motion"
// eslint-disable-next-line

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const [startAnim, setStartAnim] = React.useState('inactive');
  const observerRef = React.useRef(null);
  const scrollDownHandler = () => {
    document.getElementById('geo-map').scrollIntoView();
  };

  const variants = {
    active: {
        opacity: 1
    },
    inactive: {
      opacity: 0,
      transition: { delay: 5000 }
    }
  };

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (startAnim === 'inactive') {
      setStartAnim(entry.isIntersecting ? 'active' : 'inactive');
    }
  }
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [observerRef, options]);

  return (
    <div >
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 6
          }}
        >
          <div id="purpose" className={'landing-main-container'} style={{ display: 'flex', alignItems: 'center', width: 'calc(100vw)', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'soft-light', backgroundColor: 'rgba(140, 139, 124, 0.5)', backgroundAttachment: 'scroll', backgroundSize: 'cover' }}>
            <div style={{ marginTop: '0px', width: '100%', maxWidth: '880px'}} className={'purpose-column'}>
            <div className={'purpose-container'}>
                <p style={{ marginLeft: '16px', marginTop: '0px', marginBottom: '32px', color: 'white' }} className="purpose-column-header-1">OUR <b style={{ color: 'rgb(246, 68, 55)' }}>PURPOSE</b></p>
              </div>
              <div className="purpose-column-section">
                <div  className="purpose-column-section">
                  <h2 className="purpose-column-title">INSPIRING.</h2>
                  <h2 className="purpose-column-title">EQUIPPING.</h2>
                  <h2 className="purpose-column-title">SUSTAINING.</h2>
                </div>
              </div>
              <div className={'next-town-container'}>
            <p style={{ fontSize: '32px', marginTop: '32px', color: 'white' }} className="purpose-column-header">TO REACH <b style={{ color: 'rgb(246, 68, 55)' }}>THE NEXT TOWN.</b></p>
          </div>
              {/* <br/> */}
            </div>
          </div>
          </motion.div>
        </AnimatePresence>
        </div>

        <div className={'down-button-container'} onClick={scrollDownHandler}><ChevronDown className="down-arrow" /></div>

        {/* Re:Source Event Section */}
        <div style={{
          width: '100%',
          backgroundImage: 'linear-gradient(rgba(2, 49, 74, 0.85), rgba(2, 49, 97, 0.85)), url("/img/re-source/RESOURCE screen.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '120px 24px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '48px', fontWeight: 600, marginBottom: '16px', textAlign: 'center', fontFamily: '"Heebo",sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              RE:SOURCE 2025
            </h2>
            <p style={{ color: 'white', fontSize: '20px', textAlign: 'center', maxWidth: '700px', marginBottom: '32px', lineHeight: '1.6', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Join us for our keynote event designed to inspire, equip, and sustain church planters and ministry leaders across Southern California.
            </p>
            <Link to="/re-source" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'rgb(246, 68, 55)',
                color: 'white',
                padding: '18px 48px',
                fontSize: '20px',
                fontWeight: 600,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: '"Heebo",sans-serif',
                transition: 'background-color 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(226, 48, 35)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(246, 68, 55)'}
              >
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>

        <motion.div
          variants={variants}
          animate={startAnim}
        >
          <div ref={observerRef}>
          <GeoMap />
          </div>
        </motion.div>
      </Layout>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

// Gatsby Head API for SEO
export const Head = ({ data }) => {
  const { site } = data;
  return <SEO title="Home" siteMetadata={site.siteMetadata} />;
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        image
        author
        siteUrl
        twitterUsername
      }
    }
  }
`;
