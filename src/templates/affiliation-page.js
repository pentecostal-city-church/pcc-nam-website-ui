import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";


// eslint-disable-next-line
export const AffiliationPageTemplate = ({ title, content, contentComponent }) => {
  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ textAlign: 'center', margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif'  }}>
              {`NATIONAL`}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ textAlign: 'center', margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif'  }}>
              {`NORTH AMERICAN MISSIONS`}
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px', marginBottom: '12px' }}>
          <p style={{ margin: '0px' }}>{`This site focuses on the vision of North American Missions in the SoCal District.`}</p>
          <p style={{ margin: '0px' }}>{`To find out more about the national vision of North American Missions, please click the following link:`}</p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '64x', marginBottom: '128px' }}>
          <a rel="noreferrer" target="_blank" href={`https://www.northamericanmissions.faith`} style={{ fontSize: '28px', color: 'rgb(30, 150, 168)', margin: '0px' }}>{`www.northamericanmissions.faith`}</a>
        </div>
        <div style={{ marginBottom: '96px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'contain', height: '360px', width: '100%', backgroundImage: 'url("https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/backgrounds/8aee7101-2018-46b0-9749-f5b1650edf7b.jpg")' }}/>
        <div style={{ textAlign: 'center' }}>
          <p style={{ textAlign: 'center', margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif'  }}>
              {`UNITED PENTECOSTAL CHURCH`}
          </p>
          <p style={{ textAlign: 'center', margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif'  }}>
              {`INTERNATIONAL`}
          </p>
          <p style={{ textAlign: 'center', margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif'  }}>
              {`(UPCI)`}
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px', marginBottom: '0px' }}>
          <p style={{ margin: '0px' }}>{`Missouri District North American Missions and National North American Missions are both ministries of the international organization of the`}</p>
          <p style={{ margin: '0px' }}>{`United Pentecostal Church (UPCI). To learn more about the mission and values of the UPCI, please click the following link to learn more:`}</p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '12px', marginBottom: '128px' }}>
          <a rel="noreferrer" target="_blank" href={`https://www.upci.org`} style={{ fontSize: '28px', color: 'rgb(30, 150, 168)', margin: '0px' }}>{`www.upci.org`}</a>
        </div>
        <div style={{ marginBottom: '96px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'contain', height: '360px', width: '100%', backgroundImage: 'url("https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/backgrounds/c18f840e-2813-40ee-9d0e-0eeec78307e9.jpg")' }}/>
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

AffiliationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AffiliationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AffiliationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AffiliationPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AffiliationPage;

export const affiliationPageQuery = graphql`
  query AffiliationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
