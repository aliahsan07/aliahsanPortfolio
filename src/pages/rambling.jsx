import React from "react";
import Layout from "../layout";

const Rambles = () => {
  return (
    <Layout>
      <div className="container">
        <h2>Rambles</h2>
        <h3>
          <strong style={{color: "red"}}>You have been warned! </strong>
          {' '}
          Dont take the content on this page too seriously. Seriously though, I want to write about movies and books and anything really that intrigues me. Might be a bad idea ¯\_(ツ)_/¯.
        </h3>        
      </div>
    </Layout>
  );
};

export default Rambles;
