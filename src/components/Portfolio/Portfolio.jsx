import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";

class Portfolio extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <section>
        {projects.map(project => {
          const { title, tags, repo } = project.node.frontmatter;
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {!!repo ? (
                  <a
                    key={title}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    href={repo}
                  >
                    <h2>{title}</h2>
                  </a>
                ) : (
                  <h2>{title}</h2>
                )}
                <div className="tag-container">
                  {tags &&
                    tags.map(tag => (
                      <Link
                        key={tag}
                        style={{ textDecoration: "none" }}
                        to={`/tags/${kebabCase(tag)}/`}
                      >
                        <span>{tag}</span>
                      </Link>
                    ))}
                </div>
              </div>
              <p>{project.node.internal.content}</p>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Portfolio;
