import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import churchPlanter1 from '../img/church-planter/church-planter-1.png';
import churchPlanter2 from '../img/church-planter/church-planter-2.png';
import churchPlanter3 from '../img/church-planter/church-planter-3.png';
import churchPlanter4 from '../img/church-planter/church-planter-4.png';
import churchPlanter5 from '../img/church-planter/church-planter-5.png';
import churchPlanter6 from '../img/church-planter/church-planter-6.png';
import churchPlanter7 from '../img/church-planter/church-planter-7.png';
import churchPlanter8 from '../img/church-planter/church-planter-8.png';

// eslint-disable-next-line
export const CommitteePageTemplate = ({ title, content, contentComponent }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '180px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ margin: '0px', fontSize: '44px', fontWeight: 300, color: 'white', fontFamily: 'sans-serif'  }}>
              {`NORTH AMERICAN MISSIONS`}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ margin: '0px', fontSize: '44px', fontWeight: 300, color: 'white', fontFamily: 'sans-serif'  }}>
              {`DISTRICT LEADERSHIP`}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ marginTop: '16px' }}>{`This site focuses on the vision of North American Missions in the state of Missouri.`}</p>
          <p style={{ marginTop: '16px' }}>{`To find out more about the national vision of North American Missions, please click the following link:`}</p>
        </div>
        <div className="church-planter-container">
          <div className={`church-planter-row`}>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter1} />
              <p className={'church-planter-text-1'}>{`Church Planter 1`}</p>
              <p className={'church-planter-text-2'}>{`Region`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter2} />
              <p className={'church-planter-text-1'}>{`Church Planter 1`}</p>
              <p className={'church-planter-text-2'}>{`Region`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter3} />
              <p className={'church-planter-text-1'}>{`Church Planter 1`}</p>
              <p className={'church-planter-text-2'}>{`Region`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter4} />
              <p className={'church-planter-text-1'}>{`Church Planter 1`}</p>
              <p className={'church-planter-text-2'}>{`Region`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter5} />
              <p className={'church-planter-text-1'}>{`Church Planter 1`}</p>
              <p className={'church-planter-text-2'}>{`Region`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter6} />
              <p className={'church-planter-text-1'}>{`Church Planter 1`}</p>
              <p className={'church-planter-text-2'}>{`Region`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter7} />
              <p className={'church-planter-text-1'}>{`Church Planter 1`}</p>
              <p className={'church-planter-text-2'}>{`Region`}</p>
            </div>
            <div className={'church-planter-img-container'}>
              <img className={'church-planter-img'} src={churchPlanter8} />
              <p className={'church-planter-text-1'}>{`Church Planter 1`}</p>
              <p className={'church-planter-text-2'}>{`Region`}</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '96px', display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'white' }}>{`SoCal District North American Missions Department`}</p>
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
