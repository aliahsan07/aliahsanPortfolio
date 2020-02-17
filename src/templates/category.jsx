import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

const CategoryTemplate = ({ pageContext }) => {
  /*
  const { category } = this.props.pageContext;
  // ! post edges is coming from graphql so I did not added them in the import...
  const postEdges = this.props.data.allMarkdownRemark.edges;
  */
  // ! change it back later
  const category = "";
  const postEdges = [];
  // ! add REACT-HELMET back once you have categories!!! as of now it shows null

  return (
    <div className="category-container">
      {/* <Helmet
        title={`Posts in category "${category}" | ${config.siteTitle}`}
      /> */}
      <PostListing postEdges={postEdges} />
    </div>
  );
};

export default CategoryTemplate;
