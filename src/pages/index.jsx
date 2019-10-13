import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import GitHubButton from "react-github-btn";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className="index-container">
          <Helmet
            title={`${config.siteTitle} – Full-Stack Software Developer`}
          />
          <SEO />
          <div className="container">
            <div className="lead">
              <h1>{`Hi, I'm Ali`}</h1>
              <p>
                {`I'm a full-stack software developer specializing in modern JavaScript. I write about
                  everything I know and break down complex concepts in an accessible and intuitive
                  way.`}
              </p>
              <p>
                I like making things from scratch and{" "}
                <a href="/learn">learning in public</a>. My open source projects
                include{" "}
                <a
                  href="https://github.com/taniarascia/laconia/"
                  target="blank"
                >
                  an MVC framework
                </a>
                ,{" "}
                <a
                  href="https://taniarascia.github.io/primitive/"
                  target="blank"
                >
                  a CSS framework
                </a>
                ,{" "}
                <a href="https://github.com/taniarascia/chip8/" target="blank">
                  an old-school emulator
                </a>
                , and{" "}
                <a
                  href="https://taniarascia.github.io/new-moon/"
                  target="blank"
                >
                  the optimized dark theme
                </a>{" "}
                for web development.
              </p>
              <div className="social-buttons">
                <div>
                  <a
                    className="twitter-follow-button"
                    href="https://twitter.com/taniarascia"
                    data-size="large"
                    data-show-screen-name="false"
                  >
                    Follow @taniarascia
                  </a>
                </div>
                <div>
                  <GitHubButton
                    href="https://github.com/taniarascia"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Follow @taniarascia on GitHub"
                  >
                    Follow
                  </GitHubButton>
                </div>
              </div>
            </div>
          </div>

          <PostListing postEdges={postEdges} />
        </div>

        <div className="container">
          <section className="section">
            <h2>Latest Articles</h2>
            <PostListing simple postEdges={postEdges} />
          </section>

          <section className="section">
            <h2>Most Popular</h2>
            <PostListing simple postEdges={postEdges} />
          </section>

          <section className="section">
            <h2>Open Source Projects</h2>
            {/* <ProjectListing projects={projects} /> */}
          </section>

          <section className="section">
            <h2>Podcasts</h2>
            {/* <SimpleListing simple data={podcasts} /> */}
          </section>

          <section className="section">
            <h2>Speaking</h2>
            {/* <SimpleListing simple data={speaking} /> */}
          </section>

          <section className="section">
            <h2>{`Other People's Opinions`}</h2>
            <div className="quotations">
              <blockquote className="quotation">
                <p>
                  {`“It's no exaggeration to say that I
                wouldn't currently have a job in development without this site. So thanks for
                ruining my life, Tania.”`}
                </p>
                <cite>— Craig</cite>
              </blockquote>
              <blockquote className="quotation">
                <p>
                  {`“Not to get too dramatic, but I find your site to be an unspeakably beautiful
                lifeboat in an overwhelming sea of technical jargon and shite.”`}
                </p>
                <cite>— Lori</cite>
              </blockquote>
            </div>
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
