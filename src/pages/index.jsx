import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import GitHubButton from "react-github-btn";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import ali from "../images/ali.jpg";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <div className="container">
            <div className="lead">
              <div className="intro">
                <div>
                  <h1>{`Hi, I'm Ali`}</h1>
                  <p>
                    {`I'm a Computer Science Masters Student at University of Texas at Dallas. I write code
                    in JavaScript and Python primarily. This is my portfolio and blogging site where I intend to 
                    write about software engineering, distributed systems and program analysis.  
                    `}
                  </p>
                </div>
                <img src={ali} className="personal-picture" alt="Ali Ahsan" />
              </div>

              <div className="social-buttons">
                <div>
                  <a
                    className="twitter-follow-button"
                    href="https://twitter.com/aliahsan07"
                    data-size="large"
                    data-show-screen-name="false"
                  >
                    Follow @aliahsan07
                  </a>
                </div>
                <div>
                  <GitHubButton
                    href="https://github.com/aliahsan07"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Follow @aliahsan07 on GitHub"
                  >
                    Follow
                  </GitHubButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Projects</h2>
            <PostListing simple postEdges={postEdges} />
          </section>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
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
          }
        }
      }
    }
  }
`;
