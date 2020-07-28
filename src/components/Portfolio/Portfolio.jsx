import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import Img from "gatsby-image";

class Portfolio extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <section>
        {projects.map((project, index) => {
          const { title, tags, repo, timestamp } = project.node.frontmatter;
          let featuredImgFluid = project.node.frontmatter.cover;
          return (
            <div key={index} style={{ marginTop: 30, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {!!repo ? (
                  <a
                    key={title}
                    target="_blank"
                    style={{ textDecoration: "none", width: "100%" }}
                    href={repo}
                  >
                    <span className="project-title">
                      <h3 style={{ marginBottom: "0.2em", display: "inline" }}>{title}</h3>
                      <div className="semester-container">{timestamp}</div>
                    </span>
                  </a>
                ) : (
                    <span className="project-title">
                      <h3 style={{ marginBottom: "0.2em", display: "inline" }}>{title}</h3>
                      <div className="semester-container">{timestamp}</div>
                    </span>
                )}
              </div>
              <Img fluid={featuredImgFluid} />
              <p className="project-description">{project.node.internal.content}</p>
              <div className="tag-container">
                {tags &&
                  tags.map((tag, index) => (
                    <span key={index} style={{ textDecoration: "none" }}>{tag}</span>
                  ))}
              </div>
              <hr className="project-hrs" />
            </div>
          );
        })}
      </section>
    );
  }
}

export default Portfolio;
