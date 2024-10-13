import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
// import { GoMail } from "react-icons/go";
// import { TbBrandFacebook } from "react-icons/tb";
// import { TfiTwitter } from "react-icons/tfi";

// eslint-disable-next-line
export const AffiliationApplicationPageTemplate = ({ title, content, contentComponent }) => {
    // const [showDropdown, setShowDropdown] = React.useState(false);
    // const toggleDropdown = () => {
    //     setShowDropdown(!showDropdown);
    // }
    // const startTrainingHandler = () => {
    //     window.open('https://ministrycentral.com/the-launch-button', 'blank');
    // }

    return (
      <div>
          <div style={{ marginTop: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ margin: '0px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPosition: 'center', backgroundBlendMode: 'soft-light', backgroundColor: 'rgba(225, 229, 224, 0.1)', backgroundSize: 'cover', height: '630px', width: '100%', backgroundImage: `url("http://socalnam.org/img/gc_2024.jpg")` }}>
              <h2 style={{ marginTop: '220px' }} className="purpose-column-title">AFFILIATION</h2>
                <h2 style={{ marginTop: '16px' }} className="purpose-column-title">APPLICATION</h2>
            </div>
          </div>
        <div style={{ marginTop: '96px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p style={{ margin: '0px 48px 32px', fontSize: '36px', fontWeight: 600, color: 'white', fontFamily: '"Heebo", sans-serif', textAlign: 'center' }}>
              {`UPCI AFFILIATION APPLICATION`}
              </p>
          </div>
          <div style={{ margin: '0px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px', color: 'white', textAlign: 'center' }}>
                  <p style={{ margin: '0px', maxWidth: '1050px' }}>Click the link below to access the official UPCI Affiliation Application. Please fill out this form and submit it to this email: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
              </div>
          </div>
          <div style={{ margin: '32px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ margin: '0px', maxWidth: '1050px' }}><a href={`https://drive.google.com/file/d/1uKJly9TYXB4w5bbD2vUeaZl9xQLLhkkj/view`} target="_blank" style={{ marginBottom: '16px', marginTop: '0px', color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }}>CLICK HERE TO ACCESS APPLICATION</a></p>
              </div>
          </div>
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

AffiliationApplicationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AffiliationApplicationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AffiliationApplicationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AffiliationApplicationPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AffiliationApplicationPage;

export const affiliationApplicationPageQuery = graphql`
  query AffiliationApplicationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
