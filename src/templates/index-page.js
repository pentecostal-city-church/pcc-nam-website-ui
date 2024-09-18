import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
// import BannerModule from "../components/BannerModule/BannerModule";
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import PerksModule from "../components/PerksModule/PerksModule";
import Perk from "../components/PerksModule/Perk";
import Features from "../components/Features/Features";
import LatestPosts from "../components/Post/LatestPosts";
import MapChart from '../components/MapChart';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import CircularText from "../components/CircularText";
import CountUp from 'react-countup';
import { FiChevronDown as ChevronDown } from "react-icons/fi";
import { FiChevronUp as ChevronUp } from "react-icons/fi";

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
  const intervalRef = React.useRef(null);
  const [screenWidth, setScreenWidth] = React.useState(typeof window !== 'undefined' ? window?.innerWidth : 1200);

  const getMapSize = () => { 
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    return screenWidth;
  };

  const scrollDownHandler = () => {
    document.getElementById('geo-map').scrollIntoView();
  };
  
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setScreenWidth(getMapSize());
    }, [2500]);

    return () => {
      try {
        clearInterval(intervalRef);
        intervalRef.current = null;
      } catch (e) {}
    }
  }, []);

  const startTrainingHandler = () => {
    window.open('https://ministrycentral.com/the-launch-button', 'blank');
  }

  return (
    <div>
      <Seo title="Home" />
      <Layout>
        <div id="purpose" className={'landing-main-container'}>
          <div className={'purpose-column'}>
            <div className="purpose-column-section">
              <div className="purpose-column-section">
                <p style={{ marginTop: '0px', marginBottom: '32px' }} className="purpose-column-header">OUR PURPOSE</p>
                <h2 className="purpose-column-title">INSPIRING.</h2>
                <h2 className="purpose-column-title">EQUIPPING.</h2>
                <h2 className="purpose-column-title">SUSTAINING.</h2>
                <p style={{ marginTop: '32px' }} className="purpose-column-header">PLANTING CHURCHES IN SOCAL DISTRICT.</p>
              </div>
            </div>
            {/* <br/> */}
          </div>
        </div>
        <div className={'down-button-container'} onClick={scrollDownHandler}><ChevronDown style={{ cursor: 'pointer', height: '48px', width: '48px', color: 'white' }} /></div>
          <div id="geo-map" className={'map-column'}>
            <div className={'geo-map-column'}>
              <MapChart widthScale={screenWidth} />
              <ReactTooltip
                id={'county-geo'}
                place='bottom'
              />
              <div className={'subtitle-text-container'}>
                <div className={'subtitle-text'} style={{ display: 'flex', justifyContent: 'center', width: '75%', maxWidth: '440px' }}>
                  {`Southern California NAM District Map`}
                </div>
              </div>
            </div>
            <hr className="purpose-column-divider hide-on-expand" style={{ marginLeft: '96px' }} />
            <div style={{ marginTop: '96px' }} className={'geo-map-column'}>
              <div className="purpose-column-section" style={{ flexDirection: 'row' }}>
                  <CountUp
                    start={1}
                    end={26}
                    duration={7.75}
                    separator=""
                    decimals={0}
                    delay={0}
                    decimal=","
                    prefix="#"
                    suffix="M"
                  >
                    {({ countUpRef }) => (
                      <div onClick={() => window.open('https://x.com/hashtag/26M?src=hashtag_click', 'blank')}>
                        <p style={{ cursor: 'pointer', fontSize: '96px', fontWeight: 800, marginRight: '8px', color: '#00ACEE' }} ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                  <div style={{ position: 'relative', bottom: '8px' }}>
                    <p style={{ margin: '0px', fontWeight: 800, fontSize: '19px', display: 'flex', alignItems: 'center', color: 'gold' }} className="purpose-column-header">{`souls reside in the SoCal District. We are `}</p>
                    <p style={{ margin: '0px', fontWeight: 800, fontSize: '19px', display: 'flex', alignItems: 'center', color: 'gold' }} className="purpose-column-header">{`commissioned to reach The Next Town with the Acts 2:38`}</p>
                    <p style={{ margin: '0px', fontWeight: 800, fontSize: '19px', display: 'flex', alignItems: 'center', color: 'gold' }} className="purpose-column-header">{`salvation message. Help us Go. Gather. Grow.`}</p>
                  </div>
                </div>
                <hr className="purpose-column-divider" style={{ margin: '0px 96px' }} />
                <div>
                  <div style={{ margin: '48px 0px' }}>
                  <div className={'subtitle-text-container'}>
                    <div style={{ marginBottom: '24px' }}>
                      <a href={`/policy-form`} style={{ textDecoration: 'none', fontWeight: 800, color: 'rgb(30, 150, 168)', fontSize: '20px' }}>{`Click here to see the SoCal District path to planting a church.`}</a>
                    </div>
                  </div>
                  <div className={'subtitle-text-container'}>
                    <button onClick={startTrainingHandler} className={`training-button`}>
                      {`START ONLINE TRAINING!`}
                    </button>
                  </div>
                  </div>
                  <hr className="purpose-column-divider" style={{ margin: '0px 96px', marginBottom: '0px' }} />
                  <div className="circular-text-gap" />
                  <CircularText />
                </div>
            </div>
          </div>
          {/* <div style={{ alignSelf: 'center', marginTop: '136px', backgroundColor: 'transparent', boxShadow: 'none' }} onClick={scrollUpHandler}><ChevronUp style={{ cursor: 'pointer', height: '48px', width: '48px', color: 'white' }} /></div> */}
        {/* <BasicTextModule
          title="A super-fast theme that is easy to get started, using the power of
            GatsbyJS"
          content="Using modern CSS properties such as grid, this theme is optmised for
            speed and mobile devices. Giving users an excellent experience on
            any device. Future-proofing your product."
          link="/products"
          linkText="View Products"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Featured Products from Barcadia."
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        /> */}
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
