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
                    {`I'm a Computer Science Masters Student at University of
                    Texas at Dallas. I'm interning at Walmart for Summer 2020 as a full-stack developer. 
                    `}
                  </p>
                  <p>
                    {`My research interest lies in the static analysis of dynamic languages, primarily JavaScript. I work with Professor `}
                    <a
                      target="_blank"
                      href="https://personal.utdallas.edu/~swei/"
                    >
                      Shiyi Wei{" "}
                    </a>
                    on evaluating the current state of JavaScript static
                    analysis tooling and automatic localization of sources of
                    inaccuracy.
                  </p>
                  <p>
                    {`I originate from Pakistan, where I did my undergrad in CS from Lahore University of Management Sciences.
                    I worked at VentureDive, Lahore for 13 months before coming to the United States to pursue Masters.
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
