import React, { PropTypes } from "react"

// import styles from "./index.css"

const Content = (props) => (
  <div id="container">
      <div className="content">
        <h2>Home</h2>
        <p>
          This is my first webpage! I was able to code all the HTML and CSS in order to make it. Watch out world of web design here I come!
        </p>
        <p>
          I can use my skills here to create websites for my business, my friends and family, my C.V, blog or articles. As well as any games or more experiment stuff (which is what the web is really all about).
        </p>
      </div>
      <div className="content">
        <h2>Home 1</h2>
        <p>
          This is my first webpage! I was able to code all the HTML and CSS in order to make it. Watch out world of web design here I come!
        </p>
        <p>
          I can use my skills here to create websites for my business, my friends and family, my C.V, blog or articles. As well as any games or more experiment stuff (which is what the web is really all about).
        </p>
      </div>
      <div className="content">
        <h2>Home 2</h2>
        <p>
          This is my first webpage! I was able to code all the HTML and CSS in order to make it. Watch out world of web design here I come!
        </p>
        <p>
          I can use my skills here to create websites for my business, my friends and family, my C.V, blog or articles. As well as any games or more experiment stuff (which is what the web is really all about).
        </p>
      </div>
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
