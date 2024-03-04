import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import BannerModule from "../components/BannerModule/BannerModule";
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";
import PerksModule from "../components/PerksModule/PerksModule";
import Perk from "../components/PerksModule/Perk";
import Features from "../components/Features/Features";
import LatestPosts from "../components/Post/LatestPosts";
import MapChart from '../components/MapChart';
import { Tooltip as ReactTooltip } from 'react-tooltip';


// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {

  const [content, setContent] = React.useState({
    id: '',
    label: ''
  });

  return (
    <div>
      <Seo title="Home" />
      <Layout>
        <div>
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip
            id={'county-geo'}
            place='bottom'
          />
        </div>
        <BasicTextModule
          title="A super-fast theme that is easy to get started, using the power of
            GatsbyJS"
          content="Using modern CSS properties such as grid, this theme is optmised for
            speed and mobile devices. Giving users an excellent experience on
            any device. Future-proofing your product."
          link="/products"
          linkText="View Products"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Featured Products from Barcadia."
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
      </Layout>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
