import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import Img from "gatsby-image";

class Portfolio extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <section>
        {projects.map(project => {
          const { title, tags, repo, timestamp } = project.node.frontmatter;
          let featuredImgFluid = project.node.frontmatter.cover;
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ display: "flex", flexDirection: "row", height: "2em" }}
              >
                {!!repo ? (
                  <a
                    key={title}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href={repo}
                  >
                    <h3>{title}</h3>
                  </a>
                ) : (
                  <h3>{title}</h3>
                )}
                <div className="semester-container">{timestamp}</div>
              </div>
              <Img fluid={featuredImgFluid} />
              <p>{project.node.internal.content}</p>
              <div className="tag-container">
                {tags &&
                  tags.map(tag => (
                    <span style={{ textDecoration: "none" }}>{tag}</span>
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
