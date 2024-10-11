import React from "react";
import MapChart from '../components/MapChart';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import CircularText from "../components/CircularText";
import CountUp from 'react-countup';

// eslint-disable-next-line
export const GeoMap = () => {

    const intervalRef = React.useRef(null);
    const [screenWidth, setScreenWidth] = React.useState(typeof window !== 'undefined' ? window?.innerWidth : 1200);
  
    const getMapSize = () => { 
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      return screenWidth;
    };
    
    React.useEffect(() => {
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
        window.open('https://ministrycentral.com/the-launch-button', 'blank');
    }

    const nextTownHandler = () => {
        window.open('http://www.northamericanmissions.faith/thenexttown', 'blank');
    };
    
    return (
        <div id="geo-map">
            <div onClick={nextTownHandler} className={'var-height-1'} style={{ cursor: 'pointer', margin: '0px 0px 64px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundBlendMode: 'soft-light', backgroundColor: 'rgba(100, 139, 114, 0.5)', backgroundSize: 'contain', width: '100%', backgroundImage: `url("http://socalnam.org/img/next+town+repeat+banner+2.png")` }}>
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
                                <div style={{ margin: '8px 0px' }} onClick={() => window.open('https://x.com/hashtag/26M?src=hashtag_click', 'blank')}>
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
