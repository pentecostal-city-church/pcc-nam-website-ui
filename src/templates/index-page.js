import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
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
      <Seo title="Home" />
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
  }
`;
