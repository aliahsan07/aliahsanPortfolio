import React, { Component } from "react";
import _ from "lodash";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="tag-container">
        {tags &&
          tags.map((tag, index) => (
            <span key={index} style={{ textDecoration: "none" }}>
              {tag}
            </span>
          ))}
      </div>
    );
  }
}

export default PostTags;
