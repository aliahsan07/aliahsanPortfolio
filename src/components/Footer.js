import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <strong>Ali Ahsan</strong>
          {' / '}
          <a href="https://twitter.com/aliahsan07" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          {' / '}
          <a href="https://github.com/aliahsan07" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' / '}
          <a
            href="https://github.com/aliahsan07/taniarascia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source
          </a>
        </div>
      </footer>
    )
  }
}