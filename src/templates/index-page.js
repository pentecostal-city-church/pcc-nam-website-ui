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
        <div className={'landing-main-container'}>
          <div className={'map-column'}>
            <div>
              <MapChart widthScale={screenWidth} />
              <ReactTooltip
                id={'county-geo'}
                place='bottom'
              />
            </div>
            <div className={'subtitle-text-container'}>
              <div className={'subtitle-text'} style={{ display: 'flex', justifyContent: 'center', width: '75%', maxWidth: '440px' }}>
                {`Southern California NAM County Map`}
              </div>
            </div>
            <div style={{ marginTop: '24px' }} className={'subtitle-text-container'}>
              <div style={{ marginBottom: '24px' }}>
                <a href={`/policy-form`} style={{ textDecoration: 'underline', color: 'rgb(30, 150, 168)', fontSize: '20px' }}>{`Click here to see the SoCal District path to planting a church.`}</a>
              </div>
            </div>
            <div className={'subtitle-text-container'}>
                <button onClick={startTrainingHandler} className={`training-button`}>
                  {`START ONLINE TRAINING!`}
                </button>
              </div>
          </div>
          <div className={'purpose-column'}>
            <div className="purpose-column-section">
              <div className="purpose-column-section">
                <p className="purpose-column-header">OUR PURPOSE:</p>
                <h2 className="purpose-column-title">INSPIRE, EQUIP AND SUSTAIN THE OPERATION OF CHURCH PLANTING.</h2>
              </div>
            </div>
            {/* <br/> */}
            <hr className="purpose-column-divider" />
            {/* <br/> */}
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
                    <p style={{ cursor: 'pointer', fontSize: '64px', fontWeight: 800, marginRight: '8px', color: '#00ACEE' }} ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p style={{ fontWeight: 800, fontSize: '13px', display: 'flex', alignItems: 'center', color: 'gold' }} className="purpose-column-header">{`souls reside in SoCal District. Let's Go. Gather. Grow. The Next Town with the Acts 2:38 salvation message.`}</p>
            </div>
            <hr className="purpose-column-divider" style={{ marginBottom: '0px' }} />
            <div className="circular-text-gap" />
            <CircularText />
          </div>
        </div>
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
