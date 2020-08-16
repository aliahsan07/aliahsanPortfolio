import React from "react";
import { Link } from "gatsby";
import noctowl from "../../images/noctowl.png";
import moment from "moment";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      });
    });
    // i wanna see my printy boy
    return postList;
  }

  renderEmpty() {
    return (
      <div className="inprogress">
        <img src={noctowl} alt="Noctowl" />
        <h3 className="coming-soon">Articles will be added very soon!</h3>
      </div>
    );
  }

  renderList(postList) {
    const length = postList.length;
    return (
      <>
        {postList.map((post) => (
          // problem is here? post.path there is no route
          <Link to={post.path} key={post.title}>
            <h3>{post.title}</h3>
            <div className="excerpt">
              {moment.utc(post.date).format("MMMM Do, YYYY")}
            </div>
          </Link>
        ))}
      </>
    );
  }
  // im still looking at the code. give me a minute
  render() {
    const postList = this.getPostList();

    return (
      <div style={{ width: "100%" }}>
        {postList.length ? this.renderList(postList) : this.renderEmpty()}
      </div>
    );
  }
}

export default PostListing;
