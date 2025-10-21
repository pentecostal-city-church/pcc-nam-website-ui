import React from "react";
import { Link } from "gatsby";
import MapChart from '../components/MapChart';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import CircularText from "../components/CircularText";
import CountUp from 'react-countup';

// eslint-disable-next-line
export const GeoMap = () => {

    const intervalRef = React.useRef(null);
    const [screenWidth, setScreenWidth] = React.useState(typeof window !== 'undefined' ? window?.innerWidth : 1200);

    React.useEffect(() => {
      const getMapSize = () => {
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        return screenWidth;
      };

      intervalRef.current = setInterval(() => {
        setScreenWidth(getMapSize());
      }, [2500]);

      return () => {
        try {
          clearInterval(intervalRef);
          intervalRef.current = null;
        } catch (e) {}
      }
    }, []);

    const startTrainingHandler = () => {
        window.open('https://ministrycentral.com/the-launch-button', '_blank', 'noopener,noreferrer');
    }

    const nextTownHandler = () => {
        window.open('http://www.northamericanmissions.faith/thenexttown', '_blank', 'noopener,noreferrer');
    };
    
    return (
        <div id="geo-map">
            {/* Re:Source Event Section */}
            <div style={{
                width: '100%',
                backgroundImage: 'linear-gradient(rgba(2, 49, 74, 0.85), rgba(2, 49, 97, 0.85)), url("/img/re-source/RESOURCE screen.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '48px 24px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ color: 'white', fontSize: '96px', fontWeight: 600, marginBottom: '0px', textAlign: 'center', fontFamily: '"Heebo",sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        RE:SOURCE 2025
                    </h2>
                    <p style={{ fontWeight: 600, textTransform: 'uppercase', color: 'white', fontSize: '18px', textAlign: 'center', maxWidth: '700px', marginBottom: '32px', lineHeight: '1.6', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                        Join us for our keynote event designed to inspire, equip, and sustain church planters and ministry leaders across Southern California.
                    </p>
                    <Link to="/re-source" style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: 'rgb(246, 68, 55)',
                            color: 'white',
                            padding: '18px 48px',
                            fontSize: '18px',
                            fontWeight: 600,
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontFamily: '"Heebo",sans-serif',
                            transition: 'background-color 0.3s ease',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(226, 48, 35)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(246, 68, 55)'}
                        >
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>

            <div onClick={nextTownHandler} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') nextTownHandler(); }} role="button" tabIndex={0} className={'var-height-1'} style={{ cursor: 'pointer', margin: '0px 0px 64px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'repeat', backgroundAttachment: 'scroll', backgroundPosition: 'center', backgroundBlendMode: 'soft-light', backgroundColor: 'rgba(100, 139, 114, 0.5)', backgroundSize: 'contain', width: '100%', backgroundImage: `url("http://socalnam.org/img/next+town+repeat+banner+2.png")` }}>
                <div>
                <div><p className="purpose-column-text">{`CLICK HERE TO GO TO…`}</p></div>
                <div><h2 className="purpose-column-title">THE NEXT TOWN</h2></div>
                </div>
            </div>
                <div className={'map-column'}>
                    <div className={'geo-map-column'}>
                        <MapChart widthScale={screenWidth} />
                        <ReactTooltip
                            id={'county-geo'}
                            place='bottom'
                        />
                        <div className={'subtitle-text-container'} style={{ marginLeft: '0px' }}>
                            <div className={'subtitle-text'} style={{ display: 'flex', justifyContent: 'center', width: '75%', maxWidth: '440px' }}>
                                {`Southern California NAM District Map`}
                            </div>
                        </div>
                    </div>
                    <div className={'geo-map-column hide-on-expand'} >
                        <div className={'hide-on-expand'} style={{ margin: '0px 96px' }}>
                            <hr style={{  marginBottom: '0px' }} className="purpose-column-divider hide-on-expand" />
                        </div>
                    </div>
                    <div style={{ marginTop: '0px' }} className={'geo-map-column'}>
                        <div className="purpose-column-section-2">
                            <CountUp
                                start={1}
                                end={26}
                                duration={7.75}
                                separator=""
                                decimals={0}
                                delay={0}
                                decimal=","
                                prefix="#"
                                suffix="M"
                            >
                                {({ countUpRef }) => (
                                <div style={{ margin: '8px 0px' }} onClick={() => window.open('https://x.com/hashtag/26M?src=hashtag_click', 'blank')} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.open('https://x.com/hashtag/26M?src=hashtag_click', 'blank'); }} role="button" tabIndex={0}>
                                    <p style={{ cursor: 'pointer', fontSize: '100px', fontWeight: 800, margin: '0px 8px 0px 0px', color: '#00ACEE' }} ref={countUpRef} />
                                </div>
                                )}
                            </CountUp>
                            <div style={{ position: 'relative', bottom: '8px' }}>
                                <p style={{ margin: '0px', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', color: 'gold' }} className="purpose-column-header">{`souls reside in SoCal District. We are `}</p>
                                <p style={{ margin: '0px', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', color: 'gold' }} className="purpose-column-header">{`commissioned to reach The Next Town`}</p>
                                <p style={{ margin: '0px', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', color: 'gold' }} className="purpose-column-header">{`with the Acts 2:38 salvation message.`}</p>
                                <p style={{ margin: '0px', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', color: 'gold' }} className="purpose-column-header">{`Help us Go. Gather. Grow.`}</p>
                            </div>
                            </div>
                            <hr className="purpose-column-divider" style={{ margin: '24px 96px 0px' }} />
                            <div>
                            <div style={{ margin: '32px 0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ marginLeft: '0px', width: 'fit-content' }} className={'subtitle-text-container'}>
                                <div style={{ marginBottom: '48px', marginTop: '8px', textAlign: 'center', padding: '24px', backgroundColor: 'rgb(246, 68, 55)' }}>
                                <a className={'cta-button'} href={`/policy-form`} style={{ margin: '24px 0px' }}>{`Click here to see the SoCal District path to church planting.`}</a>
                                </div>
                            </div>
                            <div style={{ marginLeft: '0px' }} className={'subtitle-text-container'}>
                                <button onClick={startTrainingHandler} className={`training-button`}>
                                {`START ONLINE TRAINING!`}
                                </button>
                            </div>
                            </div>
                            <hr className="purpose-column-divider" style={{ margin: '0px 96px', marginBottom: '0px' }} />
                            <div className="circular-text-gap" />
                                <CircularText />
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
    );
};

export default GeoMap;
