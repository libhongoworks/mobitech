import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";

const HeadComponent = () => (
  <Head>
    <title>VincenTech</title>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" type="text/css" href="../static/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="../static/index.css" />
    <link rel="stylesheet" type="text/css" href="../static/navbar.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
    />
  </Head>
);

export default class Home extends Component {
  componentDidMount() {
    this.addjQueryScript = document.createElement("script");
    this.addjQueryScript.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.3.1.slim.min.js"
    );
    document.body.appendChild(this.addjQueryScript);
    this.addPopperjs = document.createElement("script");
    this.addPopperjs.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    );
    document.body.appendChild(this.addPopperjs);
    this.addBootstrapScript = document.createElement("script");
    this.addBootstrapScript.setAttribute("src", "../static/bootstrap.min.js");
    document.body.appendChild(this.addBootstrapScript);
  }
  render() {
    return (
      <div id="indexBody">
        <HeadComponent />
        <Navbar />
        {/* <h2>All your cellphone needs in one place</h2> */}
      </div>
    );
  }
}
