import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ResourcesPageTemplate = ({ title, content, contentComponent }) => {
    const startTrainingHandler = () => {
        window.open('https://www.socalupci.org/Offerings-', 'blank');
    }

    return (
      <div>
        <div>
          <div style={{ marginTop: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ margin: '0px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPosition: 'center', backgroundBlendMode: 'soft-light', backgroundColor: 'rgba(80, 79, 34, 0.5)', backgroundSize: 'cover', height: '630px', width: '100%', backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/56af834f8259b53131e16682/1455569744236-DFT7EPG1GEJDE9ZFXT5L/image-asset.jpeg")` }}>
            <h2 style={{ marginTop: '260px' }} className="purpose-column-title">RESOURCES</h2>
            </div>
          </div>
            <div style={{ marginTop: '96px' }} className="conditional-flex-2">
                <div className="conditional-flex-2b" style={{ marginTop: '32px' }}>
                    <img style={{ border: '1px solid white', width: '330px', height: '426px' }} src={`https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/site-images/0bf53f68-79b8-4e39-98b1-7ab66498dbb1.jpg`}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '32px' }}>
                    <div className="conditional-justify-1" style={{ display: 'flex' }}>
                        <div>
                        <p style={{ margin: '0px 48px 0px', fontSize: '36px', fontWeight: 600, color: 'white', fontFamily: '"Heebo", sans-serif', textAlign: 'center' }}>
                        {`RESOURCES FOR THE`}
                        </p>
                        <p style={{ margin: '0px 48px 32px', fontSize: '36px', fontWeight: 600, color: 'white', fontFamily: '"Heebo", sans-serif', textAlign: 'center' }}>
                        {`NORTH AMERICAN MISSIONARY`}
                        </p>
                        </div>
                    </div>
                    <div style={{ margin: '0px 0px 0px 48px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={{ margin: '0px', fontSize: '14px' }}>{`There are several benefits to being an approved North American Missionary and having our District Board appoint a city`}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={{ margin: '0px', fontSize: '14px' }}>{`to North American Missions status. Below are links to important documents that all missionaries on status should`}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={{ margin: '0px', fontSize: '14px' }}>{`familiarize themselves with so they are aware of all of the benefits available.`}</p>
                        </div>
                    </div>
                    <div style={{ margin: '0px 48px' }}>
                        <ul style={{ margin: '16px 0px' }}>
                            <li style={{ margin: '16px 0px' }}><a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }} target="_blank" href={`https://www.dropbox.com/scl/fi/tg2e5fwjwe57pd2e37e6y/2024-SoCal-Church-Planter-Onboarding-Packet-10.23.docx.pdf?rlkey=i57croyfm0i4l6k0bwk204axb&st=g8v69onx&dl=0`}>{`Onboarding / Benefits Package`}</a></li>
                            <li style={{ margin: '16px 0px' }}><a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }} target="_blank" href={`https://www.dropbox.com/scl/fi/j9ex557hyy5urj0s25co7/2024-Spanish-Onboarding-Packet-10.23.pdf?rlkey=zilvb8mngfjpwc3qmkc3hvkfr&st=6387fyon&dl=0`}>{`Onboarding / Benefits Package (En Español)`}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr style={{ border: '1px solid white', margin: '72px 96px' }} className="purpose-column-divider"/>
            <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>{`SoCal District North American Missions Department`}</p>
                </div>
                <div style={{ textAlign: 'center', marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
                  <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>Please email us with questions or for more information at: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a>.</p>
                </div>
        </div>
        </div>
    );
};

ResourcesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ResourcesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ResourcesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ResourcesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ResourcesPage;

export const resourcesPageQuery = graphql`
  query ResourcesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
