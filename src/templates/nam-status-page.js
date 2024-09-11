import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const NAMStatusPageTemplate = ({ title, content, contentComponent }) => {
  const startTrainingHandler = () => {
    window.open('https://ministrycentral.com/the-launch-button', 'blank');
}

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '180px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ marginTop: '16px', maxWidth: '1050px' }}>{`Before completing this NAM Status form. Please make sure you complete the online training.`}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a target='_blank' href={`https://drive.google.com/file/d/1xASOa_PElGkp9s60JxaNEIyIDnwhwSim/view?usp=sharing`} style={{ fontWeight: 500, fontSize: '24px', color: 'rgb(30, 150, 168)', margin: '0px', textDecoration: 'none' }}>Click here to access the NAM Status form.</a>
            </div>
            <div style={{ justifyContent: 'center', margin: '24px 0px' }} className={'subtitle-text-container'}>
                <button onClick={startTrainingHandler} className={`training-button`}>
                {`START ONLINE TRAINING!`}
                </button>
            </div>
            <div style={{ margin: '128px 0px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'contain', height: '360px', width: '100%', backgroundImage: 'url("https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/backgrounds/dfe810a1-46fe-4ca3-aeff-102f4dfbb111.jpg")' }}/>
            <div style={{ marginTop: '96px', display: 'flex', justifyContent: 'center' }}>
                <p style={{ color: 'white' }}>{`SoCal District North American Missions Department`}</p>
            </div>
        </div>
    );
};

NAMStatusPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const NAMStatusPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <NAMStatusPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

NAMStatusPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NAMStatusPage;

export const namStatusPageQuery = graphql`
  query NAMStatusPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
