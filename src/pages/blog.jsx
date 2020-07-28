import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import PostListing from "../components/PostListing/PostListing";
// import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

import Layout from "../layout";
import CategoryContainer from "../templates/category";

export default class BlogSite extends Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="container">
          <h1>Blog</h1>
          <hr style={{ marginBottom: "2em" }} />
          <PostListing postEdges={posts} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            repo
            timestamp
            template
          }
          internal {
            content
          }
        }
      }
    }
  }
`;
