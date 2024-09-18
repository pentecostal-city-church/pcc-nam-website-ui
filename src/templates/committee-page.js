import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import churchPlanter1 from '../img/church-planter/church-planter-1.jpg';
import churchPlanter2 from '../img/church-planter/church-planter-2.jpg';
import churchPlanter3 from '../img/church-planter/church-planter-3.jpg';
import churchPlanter4 from '../img/church-planter/church-planter-4.jpg';
import churchPlanter5 from '../img/church-planter/church-planter-5.jpg';
import churchPlanter6 from '../img/church-planter/church-planter-6.jpg';
import churchPlanter7 from '../img/church-planter/church-planter-7.jpg';
import churchPlanter8 from '../img/church-planter/church-planter-8.jpg';
import NavModule from "../components/NavModule/NavModule";

// eslint-disable-next-line
export const CommitteePageTemplate = ({ title, content, contentComponent }) => {
  return (
    <div>
    <NavModule />
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif' }}>
              {`NORTH AMERICAN MISSIONS`}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ margin: '0px', fontSize: '44px', fontWeight: 600, color: 'white', fontFamily: '"Heebo",sans-serif' }}>
              {`DISTRICT LEADERSHIP`}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ marginTop: '32px', marginBottom: '16px', fontSize: '14px' }}>{`Below are the NAM Directors for each section of the southern California district. `}</p>
        </div>
        <div className="church-planter-container">
          <div className={`church-planter-row`}>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter1} />
              <p className={'church-planter-text-1'}>{`Nathan Cupoli`}</p>
              <p className={'church-planter-text-2'}>{`NAM Director`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter7} />
              <p className={'church-planter-text-1'}>{`Stephen Garcia`}</p>
              <p className={'church-planter-text-2'}>{`NAM Secretary`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter6} />
              <p className={'church-planter-text-1'}>{`Lakelie Lopez`}</p>
              <p className={'church-planter-text-2'}>{`Promotions Director`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter2} />
              <p className={'church-planter-text-1'}>{`Ezekial Rodriguez`}</p>
              <p className={'church-planter-text-2'}>{`Section 1 Director`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter3} />
              <p className={'church-planter-text-1'}>{`Philip Raya`}</p>
              <p className={'church-planter-text-2'}>{`Section 2 Director`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter4} />
              <p className={'church-planter-text-1'}>{`Efrain Garibay`}</p>
              <p className={'church-planter-text-2'}>{`Section 3 Director`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter5} />
              <p className={'church-planter-text-1'}>{`Dan Olivera`}</p>
              <p className={'church-planter-text-2'}>{`Section 5 Director`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter8} />
              <p className={'church-planter-text-1'}>{`Javier Orozco`}</p>
              <p className={'church-planter-text-2'}>{`Spanish Liaison`}</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>{`SoCal District North American Missions Department`}</p>
        </div>
        <div style={{ marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
          <p style={{ color: 'white', margin: '0px', fontSize: '14px' }}>Please email us with questions or for more information at: <a style={{ color: 'rgb(30, 150, 168)', textDecoration: 'underline', fontWeight: 400 }} href={`mailto:socalnorthamericanmissions@gmail.com`}>socalnorthamericanmissions@gmail.com</a></p>
        </div>
    </div>
    </div>
  );
};

CommitteePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const CommitteePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CommitteePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

CommitteePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CommitteePage;

export const committeePageQuery = graphql`
  query CommitteePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
