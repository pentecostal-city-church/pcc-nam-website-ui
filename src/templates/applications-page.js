import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";


// eslint-disable-next-line
export const ApplicationsPageTemplate = ({ title, content, contentComponent }) => {
    const startTrainingHandler = () => {
        window.open('https://ministrycentral.com/the-launch-button', 'blank');
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '180px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <p style={{ margin: '0px 48px 32px', fontSize: '36px', fontWeight: 300, color: 'white', fontFamily: 'sans-serif'  }}>
                    {`NAM APPLICATIONS`}
                    </p>
                </div>
                <div style={{ marginLeft: '48px' }}>
                  <div style={{ display: 'flex' }}>
                      <div>
                          <div>
                              <img src={`https://images.squarespace-cdn.com/content/v1/56af834f8259b53131e16682/c376af9c-2598-4040-a896-c58ae80ac76c/CFC-BUTTON-1.jpg`} style={{ width: '180px', height: '180px' }} />
                          </div>
                      </div>
                      <div style={{ marginLeft: '64px', width: '560px' }}>
                          <div>
                              <p style={{ color: 'white', fontSize: '20px', fontWeight: 300, fontFamily: 'sans-serif' }}>{`CHRISTMAS FOR CHRIST FUNDING APPLICATION`}</p>
                          </div>
                          <div>
                              <p style={{ color: 'white', fontSize: '14px' }}>Church planters can use this application to apply for personal or property support financed by Christmas for Christ. Application will be open from <a target="_blank" href={'https://wa.upci.org/nam'} style={{ textDecoration: 'underline', color: 'rgb(30, 150, 168)' }}>October 15 to January 15</a>. For application information, please read the <a target="_blank" href={'https://www.northamericanmissions.faith/s/CFC-Policy-and-FAQs-2022.pdf'} style={{ textDecoration: 'none', color: 'rgb(30, 150, 168)' }}>Policy</a>. Applicant must complete required online <a target="_blank" href={'https://ministrycentral.com/courses/christmas-for-christ-training'} style={{ textDecoration: 'none', color: 'rgb(30, 150, 168)' }}>CFC training</a> OR have attended <a target="_blank" href={'https://www.launchachurch.faith/'} style={{ textDecoration: 'none', color: 'rgb(30, 150, 168)' }}>Launch Training</a>. Email <a target="_blank" href={'mailto:nam@upci.org'} style={{ textDecoration: 'none', color: 'rgb(30, 150, 168)' }}>nam@upci.org</a> for more information.</p>
                          </div>
                          <div>
                              <p style={{ margin: '0px', color: 'white' }}>For additional instructions on how to complete these forms, <a target="_blank" href={'https://www.northamericanmissions.faith/s/Steps-For-Completion-CFC-Grants.pdf'} style={{ textDecoration: 'none', color: 'rgb(30, 150, 168)' }}>Click Here</a>. </p>
                          </div>
                      </div>
                  </div>
              </div>
                <div style={{ margin: '48px 48px 0px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ margin: '0px', maxWidth: '1050px' }}>{`We are excited to offer all of our applications online! Please click below to read about guidelines,`}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ margin: '0px', maxWidth: '1050px' }}>{`expectations, and to submit any of your forms to a secure email that is only accessed by our Executive NAM`}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ margin: '0px', maxWidth: '1050px' }}>{`Team.`}</p>
                    </div>
                </div>
                <div style={{ margin: '32px 48px 0px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ margin: '0px', maxWidth: '1050px' }}>Please click on our <a href={'/policy-form'} target="_blank" style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }}>Policy Form</a> before submitting any of these applications.</p>
                    </div>
                </div>
                <div style={{ margin: '0px 48px' }}>
                    <ul style={{ margin: '16px 0px' }}>
                        <li style={{ margin: '16px 0px' }}><a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }} href={`/daughter-work`}>{`Daughter Work`}</a></li>
                        <li style={{ margin: '16px 0px' }}><a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }} href={`/nam-status`}>{`NAM Status`}</a></li>
                        <li style={{ margin: '16px 0px' }}><a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }} href={`/affiliation-application`}>{`Affiliation Application`}</a></li>
                    </ul>
                </div>
                <div style={{ justifyContent: 'flex-start', margin: '24px 48px' }} className={'subtitle-text-container'}>
                    <button onClick={startTrainingHandler} className={`training-button`}>
                    {`START ONLINE TRAINING!`}
                    </button>
                </div>
                <div style={{ marginTop: '96px', display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: 'white' }}>{`SoCal District North American Missions Department`}</p>
                </div>
            </div>
            <div style={{ marginTop: '180px' }}>
                <img style={{ border: '1px solid white', width: '330px', height: '426px' }} src={`https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/site-images/65f256a2-cae9-4720-90c2-dbcd16608276.jpg`}/>
            </div>
        </div>
    );
};

ApplicationsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ApplicationsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ApplicationsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ApplicationsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ApplicationsPage;

export const applicationsPageQuery = graphql`
  query ApplicationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
