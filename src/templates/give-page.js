import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import NavModule from "../components/NavModule/NavModule";

// eslint-disable-next-line
export const GivePageTemplate = ({ title, content, contentComponent }) => {
    const startTrainingHandler = () => {
        window.open('https://www.socalupci.org/Offerings-', 'blank');
    }

    return (
      <div>
      <NavModule />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo", sans-serif'  }}>
                    {`SUPPORT SOCAL DISTRICT`}
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo", sans-serif'  }}>
                    {`NORTH AMERICAN MISSIONS`}
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ marginTop: '16px', maxWidth: '1050px' }}>{`There are a number of ways that you can partner with a North American Missionary. Below are just a handful of ministries where you can direct your support. `}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ marginTop: '16px', maxWidth: '1050px' }}>{`After reading about the various points of ministry below, just follow these steps:`}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <ul style={{ margin: '0px' }}>
                    <li><p style={{ fontSize: '16px' }}>{`Click the "Make a Donation" tab.`}</p></li>
                    <li><p style={{ fontSize: '16px' }}>{`Choose "North American Missions" from the first dropdown box.`}</p></li>
                    <li><p style={{ fontSize: '16px' }}>{`Then choose whatever ministry you desire to support in the second dropdown box.`}</p></li>
                </ul>
            </div>
            <div style={{ marginTop: '48px' }} className={'subtitle-text-container'}>
                <button onClick={startTrainingHandler} className={`training-button`}>
                    {`MAKE A DONATION`}
                </button>
            </div>
            <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>{`SoCal District North American Missions Department`}</p>
                </div>
                <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
                  <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>Please email us with questions or for more information at: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
                </div>
        </div>
        </div>
    );
};

GivePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const GivePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GivePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

GivePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GivePage;

export const givePageQuery = graphql`
  query GivePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
