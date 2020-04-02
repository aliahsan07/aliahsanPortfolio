import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map((tag, index) => (
            <button key={index} disabled style={{ textDecoration: "none" }}>
              {tag}
            </button>
          ))}
      </div>
    );
  }
}

export default PostTags;
