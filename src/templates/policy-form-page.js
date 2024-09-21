import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import NavModule from "../components/NavModule/NavModule";

// eslint-disable-next-line
export const PolicyFormPageTemplate = ({ title, content, contentComponent }) => {
    const startTrainingHandler = () => {
        window.open('https://www.socalupci.org/Offerings-', 'blank');
    }

    return (
      <div>
      <NavModule />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo", sans-serif' }}>
            {`SOCAL DISTRICT NAM POLICY`}
        </p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '32px', marginBottom: '32px' }}>
        <p style={{ margin: '0px' }}>{`Although we are excited to plant churches and start new works, to borrow words from the Apostle Paul, everything must still be done`}</p>
        <p style={{ margin: '0px' }}>{`decently and in order. So we have done our best to clearly communicate the expectations and structure of what it looks like to launch`}</p>
        <p style={{ margin: '0px' }}>{`a church in Missouri. Please read through the summarized system form below, and feel free to scroll down to the bottom of the page`}</p>
        <p style={{ margin: '0px' }}>{`to download and print the entire policy packet for your benefit.`}</p>
      </div>
      <div style={{ justifyContent: 'center', margin: '24px 0px 96px' }} className={'subtitle-text-container'}>
            <button onClick={startTrainingHandler} className={`training-button`}>
            {`START ONLINE TRAINING!`}
            </button>
        </div>
      <div style={{ marginBottom: '96px', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'contain', height: '360px', width: '100%', backgroundImage: 'url("https://s3.amazonaws.com/media.cloversites.com/d9/d9509a98-d2b2-40ff-8581-57203fc30f00/backgrounds/09450eb0-ea2a-4beb-8b65-543aeb91fec5.jpeg")' }}/>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo", sans-serif' }}>
            {`PATH TO PLANTING A CHURCH`}
        </p>
      </div>
      <div style={{ margin: '48px 120px 0px' }}>
        <div style={{ marginBottom: '36px' }}>
          <div >
            <p style={{ color: 'rgb(232, 250, 140)', fontSize: '20px' }}>1. Evangelism and Outreach Extension</p>
          </div>
          <ul style={{ margin: '0px' }}>
            <li style={{ fontSize: '16px' }}>An Evangelism Extension shall be defined as any church that engages in Outreach Evangelism to a nearby unchurched community in one or more of the following ways: door knocking, home Bible studies, bus routes, street services, small groups, etc.</li>
            <li style={{ fontSize: '16px' }}>In most circumstances, a church or individual desiring to start a work should first engage in some form of regular and measurable outreach before seeking approval to proceed to the next step.</li>
            <li style={{ fontSize: '16px' }}>This step does <b><u>not</u></b> need prior approval from the District Board or NAM, but communication is vital for the future possibility of a preaching point and church plant.</li>
            <li style={{ fontSize: '16px' }}>The local church pastor where this extension begins shall be responsible for ongoing communication with the Sectional Presbyter and the Sectional North American Missions Director. Communication is vital if the ultimate desire is to plant a new work.</li>
            <li style={{ fontSize: '16px' }}>All Evangelism Extension activities shall be under the oversight of the sponsoring church pastor.</li>
          </ul>
        </div>
        <div style={{ marginBottom: '36px' }}>
          <div >
            <p style={{ color: 'rgb(232, 250, 140)', fontSize: '20px' }}>2. Preaching Point</p>
          </div>
          <ul style={{ margin: '0px' }}>
            <li style={{ fontSize: '16px' }}>A <i>Preaching Point</i> is a regularly scheduled service, typically once a week or at least once a month, that features preaching. At this juncture, under UPCI policy, there should be an application with District approval.</li>
            <li style={{ fontSize: '16px' }}>The pastor of the church desiring a Preaching Point should contact his/her Presbyter to inquire about the city, and then that pastor should contact the District North American Missions Director to secure a “Preaching Point Application.”</li>
            <li style={{ fontSize: '16px' }}>The MO District North American Missions Committee consists of the district superintendent, district NAM director, sectional presbyter, and sectional NAM director. This group can approve any Preaching Point where there is not currently a UPC church. If there is a UPC Church, then the approval of the District Board is required.</li>
            <li style={{ fontSize: '16px' }}>A preaching point isn’t a firm commitment to start a church, but it’s a stated effort to explore the possibility, and therefore it’s important to consider the proposed target area and the input of any neighboring pastors.</li>
            <li style={{ fontSize: '16px' }}>A preaching point is distinct from the mother church as to location or language and it is designed to reach people who are currently unchurched.</li>
          </ul>
        </div>
        <div style={{ marginBottom: '36px' }}>
          <div >
            <p style={{ color: 'rgb(232, 250, 140)', fontSize: '20px' }}>3. Daughter Work</p>
          </div>
          <ul style={{ margin: '0px' }}>
            <li style={{ fontSize: '16px' }}>A daughter congregation is a congregation that has met at least three months, and is the result of the concerted efforts of an established mother church to plant a new congregation, and holds at least one service per week apart from the mother church, and is under the general oversight of the pastor of the mother church.</li>
            <li style={{ fontSize: '16px' }}>A daughter congregation must have the approval of either the District North American Missions Executive Committee (in accordance with the UPCI Manual) or the District Board before they can be listed in the annual UPCI Directory. <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }} href={`/daughter-work`}>Click here to submit this application.</a></li>
            <li style={{ fontSize: '16px' }}>Please note that a Daughter Work application is to only be filled out by the Mother Church Pastor.</li>
            <li style={{ fontSize: '16px' }}>The stated intention of a daughter work is to plant a new church that will eventually become self-governing.</li>
          </ul>
        </div>
        <div style={{ marginBottom: '36px' }}>
          <div >
            <p style={{ color: 'rgb(232, 250, 140)', fontSize: '20px' }}>4. North American Missions Status</p>
          </div>
          <ul style={{ margin: '0px' }}>
            <li style={{ fontSize: '16px' }}>This step happens when:  the pastor of the Mother Church feels like the Daughter Church is ready to become self-governing, or someone is desiring to assemble a team using the "LAUNCH" method and plans to hold preview services leading up to a launch date with said team.</li>
            <li style={{ fontSize: '16px' }}>The Daughter Church shall <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'none', fontWeight: 600 }} href={`/nam-status`}>submit the completed application</a> to the District North American Missions Director for processing.</li>
            <li style={{ fontSize: '16px' }}>This step requires an interview with the MO NAM Committee, who then brings their recommendation to the District Board for approval.</li>
          </ul>
        </div>
        {/* <div style={{ marginBottom: '36px' }}>
          <div >
            <p style={{ color: 'rgb(232, 250, 140)', fontSize: '20px' }}>5. Self-Governing Work</p>
          </div>
          <ul style={{ margin: '0px' }}>
            <li style={{ fontSize: '16px' }}>See the UPCI Manual - Article XVIII for a detailed description on setting up a church for self-governing status (also listed in depth in the attached Policy Form that you can find by clicking the link below).</li>
          </ul>
        </div> */}
      </div>
      <div style={{ textAlign: 'center', margin: '24px 120px 128px' }}>
        <a rel="noreferrer" target="_blank" href={`https://ministrycentral.com/the-launch-button`} style={{ fontWeight: 500, fontSize: '20px', color: 'rgb(30, 150, 168)', margin: '0px', textDecoration: 'none' }}>{`Click here to start online training that prepares you for the church-planting process!`}</a>
      </div>
      <hr style={{ border: '1px solid white', margin: '72px 96px' }} className="purpose-column-divider"/>
      <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
        <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>{`SoCal District North American Missions Department`}</p>
      </div>
      <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
        <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>Please email us with questions or for more information at: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
      </div>
  </div>
  </div>
    );
};

PolicyFormPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const PolicyFormPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PolicyFormPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

PolicyFormPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PolicyFormPage;

export const policyFormPageQuery = graphql`
  query PolicyFormPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
