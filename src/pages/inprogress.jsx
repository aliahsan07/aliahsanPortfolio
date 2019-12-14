import React from "react";
import Layout from "../layout";
import noctowl from "../images/noctowl.png";

function PageInProgress(props) {
  return (
    <Layout>
      <div className="inprogress">
        <img src={noctowl} alt="Noctowl" />
        <h1>Coming Soon</h1>
      </div>
    </Layout>
  );
}

export default PageInProgress;
