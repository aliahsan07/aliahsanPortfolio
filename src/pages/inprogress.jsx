import React from "react";
import Layout from "../layout";
import noctowl from "../images/noctowl.png";

function PageInProgress(props) {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "inherit"
        }}
      >
        <img src={noctowl} alt="Noctowl" />
        <h1 style={{ alignSelf: "center", fontSize: "4em", color:"#605353" }}>Coming Soon</h1>
      </div>
    </Layout>
  );
}

export default PageInProgress;
