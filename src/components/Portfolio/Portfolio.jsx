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
            <div key={index} style={{ marginTop: 20, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {!!repo ? (
                  <a
                    key={title}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href={repo}
                  >
                    <h3 style={{ marginBottom: "0.2em" }}>{title}</h3>
                  </a>
                ) : (
                  <h3 style={{ marginBottom: "0.2em" }}>{title}</h3>
                )}
                <div className="semester-container">{timestamp}</div>
              </div>
              <Img fluid={featuredImgFluid} />
              <p style={{marginTop: 10, fontSize: 15}}>{project.node.internal.content}</p>
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
