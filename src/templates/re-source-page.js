import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ReSourcePageTemplate = ({ title, content, contentComponent }) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '0px' }}>
        <div style={{ margin: '0px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPosition: 'center', backgroundBlendMode: 'soft-light', backgroundColor: 'rgba(2, 49, 74, 0.3)', backgroundSize: 'cover', height: '630px', width: '100%', backgroundImage: `url("/img/re-source/RESOURCE screen.jpeg")` }}>
          <h2 style={{ marginTop: '260px' }} className="purpose-column-title">RE:SOURCE</h2>
          <p style={{ marginTop: '16px' }} className="purpose-column-header">KEYNOTE EVENT 2025</p>
        </div>

        {/* Event Invite & Highlights Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgb(2,49,74) 0%, rgb(2,49,97) 50%, rgb(30, 150, 168) 100%)',
          padding: '80px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {/* Invite Image */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '700px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              marginBottom: '48px'
            }}>



              <img
                src="/img/re-source/RESOURCE-INVITE-IMAGE.JPEG"
                alt="Re:Source Event Invitation"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  border: '4px solid rgba(255, 255, 255, 0.2)'
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.3) 100%)',
                pointerEvents: 'none'
              }}></div>
            </div>

            {/* Save the Date */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
            <p style={{ textAlign: 'center', margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif' }}>
              {`KEYNOTE EVENT FOR SOCAL NAM`}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <p style={{ margin: '0px', fontSize: '32px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif' }}>
              {`RE:SOURCE`}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ color: 'white', marginTop: '24px', marginBottom: '24px', fontSize: '16px', textAlign: 'center', maxWidth: '800px', padding: '0px 24px' }}>
              {`Join us for Re:Source, a keynote event designed to inspire, equip, and sustain church planters and ministry leaders across Southern California. This gathering brings together passionate leaders who are committed to reaching the next town with the Gospel.`}
            </p>
          </div>
            <div style={{
              textAlign: 'center',
              maxWidth: '600px',
              marginBottom: '64px'
            }}>
              <p style={{
                color: 'white',
                fontSize: '28px',
                fontWeight: 600,
                marginBottom: '16px',
                fontFamily: '"Heebo",sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                {`SAVE THE DATE - NOV 6 - 8`}
              </p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Heebo",sans-serif'
              }}>
                {`Mark your calendar for this transformative gathering of church planters and ministry leaders. Registration details coming soon.`}
              </p>
            </div>

            {/* Divider */}
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              marginBottom: '64px'
            }}></div>

            {/* Event Highlights Title */}
            <div style={{
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              <p style={{
                fontSize: '36px',
                fontWeight: 600,
                color: 'white',
                fontFamily: '"Heebo",sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                marginBottom: '12px'
              }}>
                {`EVENT HIGHLIGHTS`}
              </p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '16px',
                fontFamily: '"Heebo",sans-serif'
              }}>
                {`Moments from previous gatherings`}
              </p>
            </div>

            {/* Gallery Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              width: '100%',
              // maxWidth: '1200px',
              padding: '0px 20px'
            }}>
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}>
                <img
                  src="/img/re-source/565140731_18026377427765593_2999658428742031026_n.JPEG"
                  alt="Re:Source Event Highlight"
                  style={{
                    // width: '100%',
                    height: '480px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}>
                <img
                  src="/img/re-source/564531051_18026377436765593_3404858150989608942_n.JPEG"
                  alt="Re:Source Event Highlight"
                  style={{
                    // width: '100%',
                    height: '480px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}>
                <img
                  src="/img/re-source/563856080_18026377445765593_4227114673803408914_n.JPEG"
                  alt="Re:Source Event Highlight"
                  style={{
                    // width: '100%',
                    height: '480px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}>
                <img
                  src="/img/re-source/565106559_18026377454765593_3708621591745648134_n.JPEG"
                  alt="Re:Source Event Highlight"
                  style={{
                    // width: '100%',
                    height: '480px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}>
                <img
                  src="/img/re-source/564340389_18026377463765593_410228807831834836_n.JPEG"
                  alt="Re:Source Event Highlight"
                  style={{
                    // width: '100%',
                    height: '480px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}>
                <img
                  src="/img/re-source/565092363_18026377472765593_4367038108484038453_n.JPEG"
                  alt="Re:Source Event Highlight"
                  style={{
                    // width: '100%',
                    height: '480px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(rgb(2,49,97), rgb(2,49,74))', padding: '64px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <p style={{ fontSize: '36px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif', textAlign: 'center' }}>
              {`ABOUT THE EVENT`}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '800px' }}>
              <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                {`Re:Source is more than just a conference—it's a movement. We gather to be refreshed in our calling, equipped with practical tools, and connected with fellow laborers who share the same vision for church planting and missions across Southern California.`}
              </p>
              <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                {`Whether you're a seasoned church planter, a new missionary, or considering stepping into missions work, Re:Source provides the inspiration, training, and community you need to fulfill your calling.`}
              </p>
              <p style={{ color: 'white', fontSize: '16px', lineHeight: '1.8' }}>
                {`Join us as we pursue excellence in ministry, celebrate what God is doing across our region, and prepare for the next season of kingdom advancement.`}
              </p>
            </div>
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

ReSourcePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ReSourcePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ReSourcePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ReSourcePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ReSourcePage;

export const reSourcePageQuery = graphql`
  query ReSourcePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
