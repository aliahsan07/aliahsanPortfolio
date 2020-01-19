import React from "react";
import { Link } from "gatsby";
import noctowl from "../../images/noctowl.png";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
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
      <div className="search-container">
        <input className="search" type="text" name="searchTerm" placeholder="Type here to filter posts..." />
        <div className="filter-count">{length}</div>
      </div>
      postList.map(post => (
        <Link to={post.path} key={post.title}>
          <h1>{post.title}</h1>
        </Link>
      ))
      </>
    );
  }

  render() {
    const postList = this.getPostList();

    return (
      <div style={{"width": "100%"}}>
        {
          postList.length ? (
            this.renderList(postList)
          ) : (
            this.renderEmpty()
          )
        }
      </div>
    );
  }
}

export default PostListing;
