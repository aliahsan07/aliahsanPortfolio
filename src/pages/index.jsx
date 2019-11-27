import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import GitHubButton from "react-github-btn";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import Portfolio from "../components/Portfolio/Portfolio";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import ali from "../images/ali.jpg";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    console.log("Data", data);
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
                    {`I'm a Computer Science Masters Student at University of Texas at Dallas. I am currently taking courses 
                    in Distributed Computing, Machine Learning and Databases. I also research on the static analysis tools in JavaScript.
                    
                    `}
                  </p>
                  <p>
                    {`I originate from Pakistan where I did my undergrad in CS from Lahore University of Management Sciences.
                    I worked at VentureDive, Lahore for 13 months before coming to United States for pursuing Masters.
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
