import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div style={{background: '#210b31'}}>
      <footer className="footer container">
        <div>
          <a
            href="https://twitter.com/aliahsan07"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <span className="separator">{" • "}</span>
          <a
            href="https://github.com/aliahsan07"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <span className="separator">{" • "}</span>
          <a
            href="https://linkedin.com/in/aliahsan07"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <span className="separator">{" • "}</span>
          <a
            href="mailto: aliahsan07@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
        </div>
        <div style={{ flexBasis: "100%" }}>
          <span>
            Portfolio theme credits:
            <a
              href="https://www.taniarascia.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Tania Rascia
            </a>
          </span>
        </div>
      </footer>
      </div>
    );
  }
}
