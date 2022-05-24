import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="copyright">
          © 2022 Copyright
          <p>
            {" "}
            Jaqueline Medina, Miguel Molina, Omar Beltran, Oscar Arroyo
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
