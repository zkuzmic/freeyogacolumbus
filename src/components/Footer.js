import React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className="footer has-background-white-ter"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div className="content has-text-centered">
          Brought to you by&nbsp;
          <a href="https://teamkuzmic.com/">
            Darlene Kuzmic, ERA Real Solutions Realty
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
