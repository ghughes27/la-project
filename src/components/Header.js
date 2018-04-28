import React, { Component } from "react";
import "../scss/header.scss";

class Header extends Component {
  render() {
    return (
      <nav>
        <li>
          <a href="#">Schedule</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </nav>
    );
  }
}

export default Header;
