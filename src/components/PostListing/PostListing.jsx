import React from "react";
import { Link } from "gatsby";

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
    return <h1>Articles will be added very soon!</h1>;
  }

  renderList() {
    return (
      <>
      <div className="search-container">
        <input className="search" type="text" name="searchTerm" placeholder="Type here to filter posts..." />
        <div className="filter-count">127</div>
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
            this.renderList()
          ) : (
            this.renderEmpty()
          )
        }
      </div>
    );
  }
}

export default PostListing;
