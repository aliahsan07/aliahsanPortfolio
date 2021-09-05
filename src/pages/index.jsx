import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import GitHubButton from "react-github-btn";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import Portfolio from "../components/Portfolio/Portfolio";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import AliAhsan from "../images/AliAhsan.jpg";

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
                <div className="intro-text">
                  <h1>{`Hi, I'm Ali`}</h1>
                  <p>
                    {`I am a Software Development Engineer at Amazon Web Services in Boston, MA.
                    I completed my Master's in Computer Science in May, 2021 from The University of Texas at Dallas.
                    `}
                  </p>
                  <p>
                    My interest lies in building distributed and scalable applications, UI development, static analysis of dynamic languages and (lately) blockchain development.
                  </p>
                  <p>
                    {`I originate from Pakistan, where I did my undergrad in Computer Science from Lahore University of Management Sciences in 2018.
                    `}
                  </p>
                </div>
                <img
                  src={AliAhsan}
                  className="personal-picture"
                  alt="Ali Ahsan"
                />
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
            <Portfolio projects={postEdges} />
            {/** <PostListing simple postEdges={postEdges} /> */}
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
      filter: { frontmatter: { template: { eq: "project" } } }
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
          }
          internal {
            content
          }
        }
      }
    }
  }
`;
