import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
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
        </div>
      </footer>
    );
  }
}
