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
    
    return (
        <div id="geo-map">
            <h2 style={{ marginTop: '64px', marginBottom: '32px' }} className="purpose-column-title">GO. GATHER. GROW.</h2>
                <div className={'map-column'}>
                    <div className={'geo-map-column'}>
                    <MapChart widthScale={screenWidth} />
                    <ReactTooltip
                        id={'county-geo'}
                        place='bottom'
                    />
                    <div className={'subtitle-text-container'}>
                        <div className={'subtitle-text'} style={{ display: 'flex', justifyContent: 'center', width: '75%', maxWidth: '440px' }}>
                        {`Southern California NAM District Map`}
                        </div>
                    </div>
                    </div>
                    <hr className="purpose-column-divider hide-on-expand" style={{ marginLeft: '96px' }} />
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
                        <hr className="purpose-column-divider" style={{ margin: '0px 96px' }} />
                        <div>
                        <div style={{ margin: '48px 0px' }}>
                        <div style={{ marginLeft: '0px' }} className={'subtitle-text-container'}>
                            <div style={{ marginBottom: '48px', marginTop: '24px' }}>
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
            <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
                <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>Please email us with questions or for more information at: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
            </div>
        </div>
    );
};

export default GeoMap;
