import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing";
// import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

export default class BlogSite extends Component {
  render() {
    return <h1>Blog is in Progress</h1>;
  }
}

// export const pageQuery = graphql`
//   query BlogQuery {
//     posts: allMarkdownRemark(
//       limit: 2000
//       sort: { fields: [fields___date], order: DESC }
//       filter: { frontmatter: { template: { eq: "post" } } }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//             date
//           }
//           excerpt(pruneLength: 180)
//           timeToRead
//           frontmatter {
//             title
//             tags
//             categories
//             thumbnail {
//               childImageSharp {
//                 fixed(width: 150, height: 150) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//             date
//             template
//           }
//         }
//       }
//     }
//     categories: allMarkdownRemark(limit: 2000) {
//       group(field: frontmatter___categories) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `;
