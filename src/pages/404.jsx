import React, { Component } from "react";
import Helmet from "react-helmet";
import ThemeContext from "../context/ThemeContext";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import { Link } from "gatsby";

export default class NotFoundPage extends Component {
  static contextType = ThemeContext;

  componentDidMount() {
    const { setNotFound } = this.context;

    // setNotFound();
  }

  componentWillUnmount() {
    const { setFound } = this.context;

    // setFound();
  }

  render() {
    return (
      <Layout>
        <Helmet title={`Page not found – ${config.siteTitle}`} />
        <div className="container">
          <div className="text-center">
            <h1 style={{ color: "rgba(0,0,0,0.45)" }}>404</h1>
          </div>
          <div className="text-center">
            <h1 style={{ color: "rgba(0,0,0,0.45)" }}>Page Not Found</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link className="button" to="/">
              Go To Homepage!
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}
