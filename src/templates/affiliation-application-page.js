import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { GoMail } from "react-icons/go";
import { TbBrandFacebook } from "react-icons/tb";
import { TfiTwitter } from "react-icons/tfi";

// eslint-disable-next-line
export const AffiliationApplicationPageTemplate = ({ title, content, contentComponent }) => {
    const [showDropdown, setShowDropdown] = React.useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    const startTrainingHandler = () => {
        window.open('https://ministrycentral.com/the-launch-button', 'blank');
    }

    return (
        <div style={{ marginTop: '240px', display: 'flex', flexDirection: 'column' }}>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p style={{ margin: '0px 48px 32px', fontSize: '36px', fontWeight: 300, color: 'white', fontFamily: 'sans-serif'  }}>
                    {`UPCI AFFILIATION APPLICATION`}
                    </p>
                </div>
                <div style={{ margin: '0px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px', color: 'white' }}>
                        <p style={{ margin: '0px', maxWidth: '1050px' }}>Click the link below to access the official UPCI Affiliation Application.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '16px', color: 'white' }}>
                        <p style={{ margin: '0px', maxWidth: '1050px' }}>please fill out this form and submit it to this email: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
                    </div>
                </div>
                <div style={{ margin: '32px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ margin: '0px', maxWidth: '1050px' }}><a href={`https://drive.google.com/file/d/1uKJly9TYXB4w5bbD2vUeaZl9xQLLhkkj/view`} target="_blank" style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400, fontSize: '34px' }}>CLICK HERE TO ACCESS APPLICATION</a></p>
                    </div>
                </div>
                <div style={{ marginTop: '96px', display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: 'white' }}>{`SoCal District North American Missions Department`}</p>
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
