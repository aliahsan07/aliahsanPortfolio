import React from "react";
import Layout from "../layout";

const Uses = () => {
  return (
    <Layout>
      <div className="container" style={{ marginTop: "-60px" }}>
        <h2>Uses</h2>
        <h5>
          Motivated by{" "}
          <a target="_blank" href="https://uses.tech/">
            Wes Bos's Uses page{" "}
          </a>{" "}
          to create my own uses page, albeit there is not alot here.
        </h5>
        <h3 style={{ textDecoration: "underline" }}>Editor</h3>
        <ul>
          <li>Visual Studio Code</li>
          <li>VS Code Theme: Night Owl</li>
        </ul>
        <h4>Some notable extensions:</h4>
        <ul>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>GitLens</li>
          <li>Highlight Matching Tag</li>
          <li>Live Share</li>
        </ul>
        <h3 style={{ textDecoration: "underline" }}>Desktop Apps and IDEs</h3>
        <ul>
          <li>IntelliJ Idea for Java/Scala Projects</li>
          <li>Google Chrome for web development</li>
          <li>Notion to manage my workflows</li>
          <li>Evernote for notes</li>
          <li>PomoDone to time my work</li>
          <li>Telegram, Slack and Skype for communication</li>
        </ul>
        <h3 style={{ textDecoration: "underline" }}>Computer</h3>
        <ul>
          <li>Macbook Pro 2016, 15" base model</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Uses;
