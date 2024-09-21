import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
// import BannerModule from "../components/BannerModule/BannerModule";
import { FiChevronDown as ChevronDown } from "react-icons/fi";
import NavModule from "../components/NavModule/NavModule";
import { withPrefix } from "gatsby";
import { GeoMap } from './geo-map';
import { motion } from "framer-motion"
// eslint-disable-next-line
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
  
  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      // We will fill in the callback later...
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          setStartAnim('active');
        }
      });
    });

    // Tell the observer which elements to track
    observerRef.current.observe(document.querySelector('#geo-map'), {
      subtree: true,
      childList: true,
    });
    return () => {
      
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'lighten', backgroundColor: 'rgba(100, 139, 194, 0.1)', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url("${withPrefix('/img/welcome.jpeg')}")` }}>
      <Seo title="Home" />
      <Layout>
        <NavModule />
        <div id="purpose" className={'landing-main-container'}>
          <div className={'purpose-column'}>
            <div className="purpose-column-section">
              <div className="purpose-column-section">
                <p style={{ marginTop: '0px', marginBottom: '32px' }} className="purpose-column-header">OUR PURPOSE</p>
                <h2 className="purpose-column-title">INSPIRING.</h2>
                <h2 className="purpose-column-title">EQUIPPING.</h2>
                <h2 className="purpose-column-title">SUSTAINING.</h2>
                <p style={{ marginTop: '32px' }} className="purpose-column-header">TO REACH THE NEXT TOWN.</p>
              </div>
            </div>
            {/* <br/> */}
          </div>
        </div>
        <div className={'down-button-container'} onClick={scrollDownHandler}><ChevronDown style={{ cursor: 'pointer', height: '48px', width: '48px', color: 'white' }} /></div>
        <motion.div
          variants={variants}
          animate={startAnim}
        >
        <GeoMap />
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
