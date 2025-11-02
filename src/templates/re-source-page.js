import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ReSourcePageTemplate = ({ title, content, contentComponent }) => {
  const [fridayOpen, setFridayOpen] = React.useState(true);
  const [saturdayOpen, setSaturdayOpen] = React.useState(true);

  const scrollToSchedule = () => {
    const scheduleElement = document.getElementById('schedule-section');
    if (scheduleElement) {
      scheduleElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '0px' }}>
        <div style={{ margin: '0px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPosition: 'center', backgroundBlendMode: 'soft-light', backgroundColor: 'rgba(42, 59, 74, 0.85)', backgroundSize: 'cover', height: '630px', width: '100%', backgroundImage: `url("/img/re-source/dtla-bg.jpg")` }}>
          <h2 style={{ marginTop: '260px' }} className="purpose-column-title">RE:SOURCE</h2>
          <p style={{ marginTop: '16px', WebkitTextStroke: '1px white', color: 'transparent' }} className="purpose-column-header">SOCAL NAM KEYNOTE EVENT</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px', flexWrap: 'wrap', padding: '0 24px' }}>
          {/* Register Button */}
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pentecostalcitychurch.churchcenter.com/unproxy/registrations/events/3222143"
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
                Register Online
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
            <button
              onClick={scrollToSchedule}
              style={{
                background: 'white',
                color: 'rgb(239, 68, 68)',
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
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 14px rgba(255, 255, 255, 0.4)';
              }}
            >
              View Schedule
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
                <path d="M12 5v14" />
                <path d="M19 12 12 19 5 12" />
              </svg>
            </button>
            </div>
        </div>
        {/* Join the Movement Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgb(2,49,74) 0%, rgb(2,49,97) 50%, rgb(30, 150, 168) 100%)',
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
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ textAlign: 'center', margin: '0px', fontSize: '56px', fontWeight: 900, color: 'white', fontFamily: '"Heebo",sans-serif' }}>
              {`LAUNCHING CHURCHES. LIFTING LEADERS.`}
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ color: 'white', marginTop: '24px', marginBottom: '24px', fontSize: '16px', textAlign: 'center', maxWidth: '800px', padding: '0px 24px' }}>
              {`Join us for Re:Source, a keynote event designed to inspire, equip, and sustain church planters and ministry leaders across Southern California. This gathering brings together passionate leaders who are committed to reaching the next town with the Gospel.`}
            </p>
          </div>

            {/* Divider */}
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              marginBottom: '64px',
              marginTop: '64px'
            }}></div>

            {/* Event Highlights Title */}
            <div style={{
              textAlign: 'center',
              marginBottom: '0px'
            }}>
              <p style={{
                fontSize: '56px',
                fontWeight: 900,
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
            </div>
          </div>
            </div>
            <div style={{
              marginTop: '64px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              width: '100%',
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
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '64px'
              }}
                >
            {/* Divider */}
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              marginBottom: '64px',
              marginTop: '32px'
            }}></div>
              <h2 style={{
              fontSize: '56px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '32px',
              textAlign: 'center',
              fontFamily: '"Heebo",sans-serif',
              lineHeight: '1.2'
            }}>
              JOIN THE MOVEMENT.
            </h2>

            <p style={{
              fontSize: '17px',
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
            {/* Register Button */}
            <a
              href="https://pentecostalcitychurch.churchcenter.com/registrations/events/3222143"
              target="_blank"
              rel="noopener noreferrer"
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
                Register Here
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
        </div>

        {/* Event Details Section - Similar to Image #1 */}
        <div style={{
          position: 'relative',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#B8B5AA'
        }}>
          {/* Subtle texture overlay - optional */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/img/re-source/565140731_18026377427765593_2999658428742031026_n.JPEG")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            zIndex: 1
          }}></div>

          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1100px',
            width: '100%',
            padding: '80px 24px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '24px',
              fontWeight: 600,
              color: 'rgb(12, 74, 110)',
              marginBottom: '16px',
              fontFamily: '"Heebo",sans-serif'
            }}>
              SAVE THE DATE
            </p>
            {/* Date and Time */}
            <h2 style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#34495E',
              fontFamily: '"Heebo",sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '48px',
            }}>
              NOVEMBER 7-8, 2025
            </h2>

            {/* Venue */}
            <h3 style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 700,
              color: 'rgb(12, 74, 120)',
              marginBottom: '16px',
              fontFamily: '"Heebo",sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              PENTECOSTAL CITY CHURCH
            </h3>
            <p style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#34495E',
              marginBottom: '0px',
              fontFamily: '"Heebo",sans-serif'
            }}>
              BROCKWAY STREET,
            </p>
            <p style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#34495E',
              marginBottom: '64px',
              fontFamily: '"Heebo",sans-serif',
              textTransform: 'uppercase'
            }}>
              El Monte, CA 91731
            </p>

            {/* Divider */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, rgba(12, 74, 110, 1), transparent)',
              marginBottom: '64px'
            }}></div>
            </div>

            <div
              style={{
                maxWidth: '1100px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
            {/* Additional Info Section */}
        {/* Schedule Section */}
        <div id="schedule-section" style={{
          background: 'linear-gradient(135deg, rgba(2,49,74,0.85) 0%, rgba(2,49,97,0.85) 75%, rgba(3, 49, 120,0.85) 100%)',
          // background: 'rgba(12, 54, 121,0.75)',
          // border: '#FFF58A 3px solid',
          padding: '32px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
          <div style={{
            maxWidth: '600px',
            width: '100%'
          }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: 900,
              color: 'white',
              marginBottom: '32px',
              textAlign: 'center',
              fontFamily: '"Heebo",sans-serif',
              textTransform: 'uppercase',
              borderBottom: '1px solid #FFF58A',
              paddingBottom: '0px',
              display: 'inline-block'
            }}>
              THE SCHEDULE
            </h2>

            {/* Friday Schedule */}
            <div style={{ marginBottom: '0px' }}>
              <div
                onClick={() => setFridayOpen(!fridayOpen)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFridayOpen(!fridayOpen); }}
                role="button"
                tabIndex={0}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '32px',
                  padding: '16px 24px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  border: '2px solid #FFF58A',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
              >
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'white',
                  margin: 0,
                  fontFamily: '"Heebo",sans-serif',
                  textTransform: 'uppercase'
                }}>
                  FRIDAY, NOVEMBER 7
                </h3>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: fridayOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    minWidth: '32px'
                  }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>

              {fridayOpen && (<>
              <div style={{ padding: '0px 0px 24px' }}>
                <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                  9:00 AM - 10:00 AM <span style={{ color: '#FFF58A' }}>|</span> <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Light Breakfast</span>
                </p>
                <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                  10:00 AM - 11:00 AM <span style={{ color: '#FFF58A' }}>|</span> <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>General Session 1: Jason Dillon</span>
                </p>
                <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                  11:00 AM - 11:30 AM <span style={{ color: '#FFF58A' }}>|</span> <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Break</span>
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '32px',
                borderRadius: '8px',
                marginBottom: '32px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <p style={{ color: 'white', fontSize: '20px', fontWeight: 700, marginBottom: '24px', fontFamily: '"Heebo",sans-serif', textTransform: 'uppercase', textAlign: 'left' }}>
                  11:30 AM - 1:00 PM <span style={{ color: '#FFF58A' }}>|</span> Split Track 01
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                  {/* Church Planters Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Church Planters Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Music in a Church Plant Setting<br/>(Eileen Gonzales & Olga Raya)
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Financial Resources<br/>(Nathan Cupoli & Philip Harding)
                    </p>
                  </div>

                  {/* Pastors Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Pastors Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Daughter Works (Greg Pounds)
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Small Groups (Javier Orozco)
                    </p>
                  </div>

                  {/* Creatives Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Creatives Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Building a Creative Team (Carleon Wilson)
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Social Media (Nolan Graham)
                    </p>
                  </div>

                  {/* Young Ministers Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Young Ministers Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Being a Timothy (John Lopez)
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Dreaming Big (Tom Copple)
                    </p>
                  </div>
                </div>
              </div>

              <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '32px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                1:00 PM - 2:15 PM <span style={{ color: '#FFF58A' }}>|</span> <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Lunch & Panel 01</span>
              </p>

              {/* Split Track 02 */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '32px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <p style={{ color: 'white', fontSize: '20px', fontWeight: 700, marginBottom: '24px', fontFamily: '"Heebo",sans-serif', textTransform: 'uppercase', textAlign: 'left' }}>
                  2:15 PM - 3:45 PM <span style={{ color: '#FFF58A' }}>|</span> Split Track 02
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                  {/* Church Planters Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Church Planters Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Building a Team (David McGovern)
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Systems in a Church Plant (Scott Shoemake)
                    </p>
                  </div>

                  {/* Pastors Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Pastors Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Counseling Resources (Lakelie Lopez)
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Pastoral Families<br/>(Kari Pounds & Monique McGovern)
                    </p>
                  </div>

                  {/* Creatives Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Creatives Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Live Stream (John Aoki)
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Building a Worship Team (Frankie Taylor)
                    </p>
                  </div>

                  {/* Young Ministers Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Young Ministers Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Personal Growth (Art Hodges)
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Making Disciples (Karl Sachs)
                    </p>
                  </div>
                </div>
              </div>

              {/* Friday Evening */}
              <div style={{
                padding: '24px 0px',
                borderRadius: '8px',
              }}>
                <p style={{ color: 'white', fontSize: '20px', fontWeight: 700, marginBottom: '16px', fontFamily: '"Heebo",sans-serif', textTransform: 'uppercase', textAlign: 'left' }}>
                  Friday PM <span style={{ color: '#FFF58A' }}>|</span> Evening Service
                </p>
                <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                  4:00 PM - 6:00 PM <span style={{ color: '#FFF58A' }}>|</span> <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>General Session 2: Jason Dillon</span>
                </p>
                <p style={{ color: 'white', fontSize: '16px', marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                  • 5 Minute Keynote: Art Hodges III
                </p>
                <p style={{ color: 'white', fontSize: '16px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                  • Hyphen ministry leads worship
                </p>
              </div>
            </>)}</div>

            {/* Saturday Schedule */}
            <div>
              <div
                onClick={() => setSaturdayOpen(!saturdayOpen)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSaturdayOpen(!saturdayOpen); }}
                role="button"
                tabIndex={0}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  border: '2px solid #FFF58A',
                  transition: 'all 0.3s ease',
                  marginBottom: '32px',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
              >
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'white',
                  margin: 0,
                  fontFamily: '"Heebo",sans-serif',
                  textTransform: 'uppercase'
                }}>
                  SATURDAY, NOVEMBER 8
                </h3>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: saturdayOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    minWidth: '32px'
                  }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>

              {saturdayOpen && (<>
              <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                9:00 AM - 9:45 AM <span style={{ color: '#FFF58A' }}>|</span> <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Porto's & Coffee</span>
              </p>
              <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '32px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                10:00 AM - 11:00 AM <span style={{ color: '#FFF58A' }}>|</span> <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Panel 02 - Small Groups</span>
              </p>

              {/* Split Track 03 */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '32px',
                borderRadius: '8px',
                marginBottom: '32px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <p style={{ color: 'white', fontSize: '20px', fontWeight: 700, marginBottom: '24px', fontFamily: '"Heebo",sans-serif', textTransform: 'uppercase', textAlign: 'left' }}>
                  11:00 AM - 11:45 AM <span style={{ color: '#FFF58A' }}>|</span> Split Track 03
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                  {/* Church Planters Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Church Planters Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Relationship with the District<br/>(Art Hodges)
                    </p>
                  </div>

                  {/* Pastors Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Pastors Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Systems for Growth (Mark Waddle)
                    </p>
                  </div>

                  {/* Creatives Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Creatives Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Cohesive Branding (David McGovern)
                    </p>
                  </div>

                  {/* Young Ministers Track */}
                  <div>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      Young Ministers Track
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                      • Staying True to Your Calling<br/>(Frankie Taylor)
                    </p>
                  </div>
                </div>
              </div>

              <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, marginBottom: '8px', fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                11:45 AM <span style={{ color: '#FFF58A' }}>|</span> <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Break</span>
              </p>

              {/* Closing Session */}
              <div style={{
                borderRadius: '8px',
              }}>
                <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, fontFamily: '"Heebo",sans-serif', textAlign: 'left' }}>
                  12:00 PM <span style={{ color: '#FFF58A' }}>|</span> <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>General Session 3: Jason Dillon</span>
                </p>
              </div>
            </>)}
            </div>
          </div>
        </div>
            </div>
                        {/* Divider */}
                        <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, rgba(12, 74, 110, 1), transparent)',
              marginTop: '64px'
            }}></div>
            </div>

            <div style={{
              marginTop: '64px',
            maxWidth: '1100px',
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
              marginBottom: '0px'
            }}>
              <img
                src="/img/re-source/re-source.png"
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

          </div>
          </div>
        </div>

        {/* <hr style={{ border: '1px solid white', margin: '72px 96px' }} className="purpose-column-divider"/> */}
        <div style={{ marginTop: '72px', display: 'flex', justifyContent: 'center' }}>
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
