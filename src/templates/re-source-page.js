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
        {/* Join the Movement Section */}
        <div style={{
          background: 'rgb(12, 74, 110)',
          padding: '100px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            maxWidth: '1100px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h2 style={{
              fontSize: '56px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '32px',
              textAlign: 'center',
              fontFamily: '"Heebo",sans-serif',
              lineHeight: '1.2'
            }}>
              Join the Movement
            </h2>

            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: '900px',
              marginBottom: '64px',
              lineHeight: '1.6',
              fontFamily: '"Heebo",sans-serif'
            }}>
              Join us as we pursue excellence in ministry, celebrate what God is doing across our region,
              and prepare for the next season of kingdom advancement.
            </p>

            {/* Questions Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '48px 40px',
              maxWidth: '800px',
              width: '100%',
              marginBottom: '48px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                gap: '12px'
              }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  color: 'white',
                  margin: 0,
                  fontFamily: '"Heebo",sans-serif'
                }}>
                  Questions?
                </h3>
              </div>

              <p style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                marginBottom: '20px',
                fontFamily: '"Heebo",sans-serif'
              }}>
                Email us for more information about Re:Source 2025
              </p>

              <a
                href="mailto:socalnorthamericanmissions@gmail.com"
                style={{
                  fontSize: '18px',
                  color: 'white',
                  textDecoration: 'underline',
                  fontWeight: 600,
                  fontFamily: '"Heebo",sans-serif',
                  display: 'block',
                  textAlign: 'center'
                }}
              >
                socalnorthamericanmissions@gmail.com
              </a>
            </div>

            {/* Register Button */}
            <a
              href="mailto:socalnorthamericanmissions@gmail.com?subject=Re:Source 2025 Interest"
              style={{
                textDecoration: 'none'
              }}
            >
              <button style={{
                background: 'rgb(239, 68, 68)',
                color: 'white',
                fontSize: '18px',
                fontWeight: 600,
                padding: '18px 48px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: '"Heebo",sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgb(220, 38, 38)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgb(239, 68, 68)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 14px rgba(239, 68, 68, 0.4)';
              }}
              >
                Register Your Interest
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>
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
                {`ABOUT THE EVENT`}
              </p>
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
