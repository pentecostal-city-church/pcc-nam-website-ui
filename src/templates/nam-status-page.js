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
      <div>
          <div style={{ marginTop: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ margin: '0px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundBlendMode: 'soft-light', backgroundColor: 'rgba(150, 149, 204, 0.5)', backgroundSize: 'cover', height: '630px', width: '100%', backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/56af834f8259b53131e16682/1727477326147-VSVBIDHOJ7BX9CL6WWYE/ministrie-bg.jpg")` }}>
            <h2 style={{ marginTop: '260px' }} className="purpose-column-title">NAM STATUS</h2>
            </div>
          </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '96px' }}>
            <div style={{ margin: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ margin: '8px 0px 0px', maxWidth: '1050px', fontSize: '18px', color: 'white', textAlign: 'center' }}>{`Before completing this NAM Status form. Please make sure you complete the online training.`}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '24px' }}>
                <p style={{ textAlign: 'center', margin: '0px', maxWidth: '1050px', color: 'white', fontSize: '18px' }}>Please submit your NAM status form to: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
            </div>
            <div style={{ margin: '8px 0px 0px', display: 'flex', justifyContent: 'center' }}>
              <a target='_blank' href={`https://drive.google.com/file/d/1xASOa_PElGkp9s60JxaNEIyIDnwhwSim/view?usp=sharing`} style={{ marginBottom: '16px', marginTop: '0px', color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }}>Click here to access the NAM Status form.</a>
            </div>
            <div style={{ justifyContent: 'center', margin: '48px 0px' }} className={'subtitle-text-container'}>
                <button onClick={startTrainingHandler} className={`training-button`}>
                {`START ONLINE TRAINING!`}
                </button>
            </div>
            <div style={{ margin: '64px 0px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'contain', height: '360px', width: '100%', backgroundImage: `url("http://socalnam.org/img/nam-status.jpeg")` }}/>
            <hr style={{ border: '1px solid white', margin: '72px 96px' }} className="purpose-column-divider"/>
            <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>{`SoCal District North American Missions Department`}</p>
                </div>
                <div style={{ textAlign: 'center', marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
                  <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>Please email us with questions or for more information at: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
                </div>
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
