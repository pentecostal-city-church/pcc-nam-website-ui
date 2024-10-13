import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { GoMail } from "react-icons/go";
import { TbBrandFacebook } from "react-icons/tb";
import { TfiTwitter } from "react-icons/tfi";

// eslint-disable-next-line
export const ChristmasForChristPageTemplate = ({ title, content, contentComponent }) => {
    const [showDropdown, setShowDropdown] = React.useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <div>
        <div style={{ marginTop: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ margin: '0px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPosition: 'center', backgroundBlendMode: 'soft-light', backgroundColor: 'rgba(255, 9, 4, 0.25)', backgroundSize: 'cover', height: '630px', width: '100%', backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/65245e82e8702710659fca87/b61eff28-49ab-41dd-9bbd-9dcc12450117/serve-collage.jpg")` }}>
              <h2 style={{ marginTop: '220px' }} className="purpose-column-title">CHRISTMAS</h2>
                <h2 style={{ marginTop: '16px' }} className="purpose-column-title">FOR CHRIST</h2>
            </div>
          </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '96px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ textAlign: 'center', margin: '0px 0px 32px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif' }}>
                    {`HOW DOES CHRISTMAS FOR CHRIST WORK?`}
                </p>
            </div>
            <div style={{ margin: '0px 36px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ margin: '0px', maxWidth: '1050px' }}>{`Christmas for Christ is a North American Missions effort by which funds are raised at Christmas-time in North American churches to sponsor missionaries and support various ministries in the United States and Canada. We invite you to be a part of helping to plant churches in Southern California and all throughout North America! Scroll down to learn more!`}</p>
                </div>
                </div>
            <div>
                <div style={{ marginBottom: '48px', marginTop: '120px', width: '100%', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPosition: 'center', backgroundSize: 'cover', height: '360px', width: '100%', backgroundImage: 'url("https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/backgrounds/3bc3a6f2-25c6-4a55-a8ad-bce1c5502b43.jpg")' }}/>
            </div>
            <div className="cfc-socal-influence-container">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ border: '1px solid white' }} src={`https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/site-images/1cad4449-3f48-4e00-9d63-2597f43c0172.jpg`}/>
                </div>
                <div style={{ margin: '0px 80px' }}>
                    <p style={{ color: 'white', fontSize: '36px', fontWeight: 200, fontFamiy: '"Heebo",sans-serif' }}>{`SOUTHERN CALIFORNIA INFLUENCE`}</p>
                    <p style={{ fontSize: '14px' }}>{`40% of all of the Christmas for Christ offerings stay right here in the SoCal District. That means, when you give, you are single-handedly making a difference right here in our own state and with our own neighbors! We always challenge our SoCal churches to give our best gift to Jesus at Christmas time. To give, just click on the link below and choose "North American Missions" and then choose "CFC" from the sub fund drop down box. `}</p>
                    <a href={'https://www.socalupci.org/Offerings-'} style={{ textDecoration: 'none', fontWeight: 600, color: 'rgb(30, 150, 168)' }}>{`Click here to give to Southern California District Christmas for Christ!`}</a>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '48px' }}>
                <p style={{ margin: '0px', color: 'white', fontFamiy: '"Heebo",sans-serif', fontWeight: 300, fontSize: '36px' }}>{`THE BEGINNING OF`}</p>
                <p style={{ margin: '0px', color: 'white', fontFamiy: '"Heebo",sans-serif', fontWeight: 300, fontSize: '36px' }}>{`CHRISTMAS FOR CHRIST`}</p>
            </div>
            <div style={{ margin: '16px 36px 0px', display: 'flex', justifyContent: 'center' }}>
                <p style={{ fontSize: '14px' }}>{`We invite you to watch a short video about how, where, and why Christmas for Christ began!`}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '24px' }}>
                <div style={{ maxWidth: '70%', width: 'inherit' }}>
                    <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                        <iframe src="https://player.vimeo.com/video/185022904" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%' }}/>
                    </div>
                    <div style={{ width: '100%', backgroundColor: 'rgb(45,45,45)' }}>
                        <div style={{ padding: '35px 40px 24px', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontSize: '24px' }}>{`Christmas for Christ... The Beginning`}</p>
                                <p style={{ fontSize: '14px' }}>{`September 30, 2016`}</p>
                            </div>
                            <div style={{ fontSize: '14px' }}>
                                {`A look back into the heart of a church planter who wanted to make a difference.`}
                                <hr style={{ margin: '12px 0px 0px', backgroundColor: 'rgb(70,70,70)' }}/>
                            </div>
                            <div>
                                <div onClick={toggleDropdown} style={{ cursor: 'pointer', color: 'white', marginTop: '18px', display: 'flex', justifyContent: 'flex-end' }}>{`SHARE`}</div>
                            </div>
                            {showDropdown ? (
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(20,20,20)', color: 'white', cursor: 'pointer', height: '200px', width: '200px', position: 'relative', bottom: '225px', left: '200px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <div style={{ margin: '8px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 500 }}><TfiTwitter className={'social-icon'} /><div className={'social-icon'} style={{ marginLeft: '8px' }} /><a className={'social-icon'} target="_blank" href={'https://twitter.com/share?url=https%3A%2F%2Fmissourinam.com%2Fmedia%2F779871-3243391-1943856%2Fchristmas-for-christ-the-beginning'}>{`TWITTER`}</a></div>
                                            <div style={{ margin: '8px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 500 }}><TbBrandFacebook className={'social-icon'} /><div className={'social-icon'} style={{ marginLeft: '8px' }} /><a className={'social-icon'} target="_blank" href={'http://www.facebook.com/sharer.php?u=https%3A%2F%2Fmissourinam.com%2Fmedia%2F779871-3243391-1943856%2Fchristmas-for-christ-the-beginning'}>{`FACEBOOK`}</a></div>
                                            <div style={{ margin: '8px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 500 }}><GoMail className={'social-icon'} /><div className={'social-icon'} style={{ marginLeft: '8px' }} /><a className={'social-icon'} target="_blank" href={'mailto:?Body=https%3A%2F%2Fmissourinam.com%2Fmedia%2F779871-3243391-1943856%2Fchristmas-for-christ-the-beginning'}>{`EMAIL TO A FRIEND`}</a></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (null)}
                        </div>
                    </div>
                    <p style={{ margin: '64px 0px 0px', fontSize: '28px', textAlign: 'center', fontFamily: '"Heebo", sans-serif' }}>{'RESOURCES FOR PASTORS'}</p>
                    <div className="cfc-socal-influence-container">
                        <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>

                            <p className="pastor-resources-container" style={{ fontSize: '14px', fontFamily: '"Heebo", sans-serif' }}>{`If you are a Southern California District Pastor looking for other videos, testimonies to show your church, bulletin inserts, or slides, feel free to visit the national CFC website to gain access to all of these things.`}</p>

                        </div>
                        <a target="_blank" style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }} href={'http://www.christmasforchrist.faith/#home'}>{`Click here for more CFC resources!`}</a>
                        </div>

                        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
                            <img style={{ border: '1px solid white', height: '426px', width: '330px' }} src={`https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/site-images/b60019e6-77cd-425d-b778-f2f36535041e.jpg`} />
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

ChristmasForChristPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ChristmasForChristPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ChristmasForChristPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ChristmasForChristPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ChristmasForChristPage;

export const christmasForChristPageQuery = graphql`
  query ChristmasForChristPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
