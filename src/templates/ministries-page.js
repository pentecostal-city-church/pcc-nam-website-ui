import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";


// eslint-disable-next-line
export const MinistriesPageTemplate = ({ title, content, contentComponent }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '98.5px' }}>
        <div style={{ marginBottom: '48px', width: '100%', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover', height: '360px', width: '100%', backgroundImage: 'url("https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/gallery/slides/mobile_6eb558c6-4997-4125-8dbc-b1581041608d.jpeg")' }}/>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: '0px', fontSize: '44px', fontWeight: 300, color: 'white', fontFamily: 'sans-serif'  }}>
              {`MINISTRIES OF SOCAL DISTRICT`}
          </p>
          <p style={{ margin: '0px', fontSize: '44px', fontWeight: 300, color: 'white', fontFamily: 'sans-serif'  }}>
              {`NORTH AMERICAN MISSIONS`}
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '28px', marginBottom: '0px' }}>
          <p style={{ margin: '0px', fontSize: '14px' }}>{`Below is a list of the various ministries that fall under the umbrella of our District North American Missions Department.`}</p>
        </div>
        <div style={{ marginLeft: '128px', marginTop: '80px' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <div>
                        <img src={`https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/site-images/6ef0cf62-77e4-4444-a5e7-4beebfbe83e7@2x.png`} style={{ borderRadius: '50%', width: '160px', height: '160px' }} />
                    </div>
                </div>
                <div style={{ marginLeft: '64px', width: '560px' }}>
                    <div>
                        <p style={{ color: 'white', fontSize: '20px', fontWeight: 300, fontFamily: 'sans-serif' }}>{`Christian Prisoner Ministry`}</p>
                    </div>
                    <div>
                        <p style={{ color: 'white', fontSize: '14px' }}><a style={{ margin: '0px', fontSize: '16px', color: 'rgb(30, 150, 168)' }} src={`https://prisonministry.faith/`}>Christian Prisoner Ministry</a> is a non-profit ministry extending the hope and power of the gospel to over 7.3 million people currently behind bars, on probation, or on parole in North America's criminal justice system, as well as their families.</p>
                    </div>
                    <div>
                        <p style={{ margin: '0px', color: 'white', fontSize: '14px' }}>Since 1982 CPM has trained and certified more than 3,000 volunteers for ministry in the correctional environment. Through CPM, you can contact a network of certified chaplains trained and dedicated to reaching your friends, family, and neighbors behind bars or in transitional living facilities. If you desire to serve in this ministry, CPM can equip and empower you to be involved. <a style={{ margin: '0px', fontSize: '16px', color: 'rgb(30, 150, 168)' }} href={`mailto:jerrymenchaca@aol.com`} target="_blank">Jerry Menchaca</a> is the ministry director.</p>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ marginLeft: '128px', marginTop: '80px' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <div>
                        <img src={`https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/site-images/6ef0cf62-77e4-4444-a5e7-4beebfbe83e7@2x.png`} style={{ borderRadius: '50%', width: '160px', height: '160px' }} />
                    </div>
                </div>
                <div style={{ marginLeft: '64px', width: '560px' }}>
                    <div>
                        <p style={{ color: 'white', fontSize: '20px', fontWeight: 300, fontFamily: 'sans-serif' }}>{`Church-In-A-Day`}</p>
                    </div>
                    <div>
                        <p style={{ color: 'white', fontSize: '14px' }}><i>Church in a Day</i> is a program in which skilled laborers and an abundance of volunteers converge on a plot of land, and in just one weekend there is a functional church built. The money saved in construction costs places the new church far ahead of the curve.  <i>Church in a Day</i> is an amazing feat, and has been featured on media outlets throughout the country.</p>
                    </div>
                    <div>
                        <p style={{ margin: '0px', color: 'white' }}>Link to <i>National</i> Ministry Information:</p>
                    </div>
                    <div>
                        <a style={{ margin: '0px', fontSize: '16px', color: 'rgb(30, 150, 168)' }} src={`https://www.ciad.faith/`}>{`www.ciad.faith`}</a>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ marginLeft: '128px', marginTop: '80px' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <div>
                        <img src={`https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/site-images/45d733c6-cacf-4c1e-a235-2afe56ce28f3@2x.png`} style={{ borderRadius: '50%', width: '160px', height: '160px' }} />
                    </div>
                </div>
                <div style={{ marginLeft: '64px', width: '560px' }}>
                    <div>
                        <p style={{ color: 'white', fontSize: '20px', fontWeight: 300, fontFamily: 'sans-serif' }}>{`Evangelist Ministries`}</p>
                    </div>
                    <div>
                        <p style={{ color: 'white', fontSize: '14px' }}>The Evangelist Ministry recognizes and promotes the Biblical role of evangelist as stated in Ephesians 4. The Evangelist Ministry is dedicated to preach the gospel and effectively minister by partnering with pastors worldwide to gather vision, faith, and harvest, saving the lost, and edifying the church.  Pastors can confidently book a licensed, enrolled evangelist that will bless your church. </p>
                    </div>
                    <div>
                        <p style={{ margin: '0px', color: 'white' }}>Link to <i>National</i> Ministry Information:</p>
                    </div>
                    <div>
                        <a style={{ margin: '0px', fontSize: '16px', color: 'rgb(30, 150, 168)' }} src={`https://www.evangelist.faith`}>{`www.evangelist.faith`}</a>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ marginLeft: '128px', marginTop: '80px' }}>
            <div style={{ display: 'flex' }}>
                <div>
                    <div>
                        <img src={`https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/site-images/6c2ee08f-562f-4d07-877b-0f70d49fbac9@2x.png`} style={{ borderRadius: '50%', width: '160px', height: '160px' }} />
                    </div>
                </div>
                <div style={{ marginLeft: '64px', width: '560px' }}>
                    <div>
                        <p style={{ color: 'white', fontSize: '20px', fontWeight: 300, fontFamily: 'sans-serif' }}>{`Metro Missions`}</p>
                    </div>
                    <div>
                        <p style={{ color: 'white', fontSize: '14px' }}>Metro Missions exists to facilitate and promote church planting in North America’s largest, most densely populated cities.  A Metro Missionary goes into an urban area to reach souls and establish churches, and is supported by partners.  For more than 25 years, Metro Missions has been a successful tool of evangelism for the United Pentecostal Church.</p>
                    </div>
                    <div>
                        <p style={{ margin: '0px', color: 'white' }}>Link to <i>National</i> Ministry Information:</p>
                    </div>
                    <div>
                        <a style={{ margin: '0px', fontSize: '16px', color: 'rgb(30, 150, 168)' }} src={`https://www.metromissions.faith`}>{`www.metromissions.faith`}</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <div style={{ marginTop: '80px', marginBottom: '56px' }}>
            <div style={{ textAlign: 'center' }}>
                <a style={{ fontSize: '36px', color: 'rgb(30, 150, 168)' }} src={`https://modistrict.breezechms.com/give/online`}>CLICK HERE TO DONATE TO A SPECIFIC MINISTRY</a>
            </div>
            <div style={{ textAlign: 'center' }}>
                <p>Choose "North American Missions" and then the specific fund that you are desiring to support.</p>
            </div>
        </div> */}
        <div style={{ marginTop: '48px', marginBottom: '96px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'contain', height: '360px', width: '100%', backgroundImage: 'url("https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/backgrounds/685b8f5d-41cb-464b-aed9-9addeef456e7.jpeg")' }}/>
            <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
                <p style={{ color: 'white' }}>{`SoCal District North American Missions Department`}</p>
            </div>
        </div>
  );
};

MinistriesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const MinistriesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <MinistriesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

MinistriesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MinistriesPage;

export const ministriesPageQuery = graphql`
  query MinistriesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
