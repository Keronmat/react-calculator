import React, { Component } from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropDown: false
    };
  }
  handleClickMenu = () => {
    this.setState(() => ({
      showDropDown: !this.state.showDropDown
    }));
  };

  render() {
    const linkStyle = { textDecoration: "none", color: "var(--mdBlue)" };
    return (
      <div>
        <div className="menu-icon" onClick={this.handleClickMenu}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div
          className="dropdown-content"
          style={
            this.state.showDropDown ? { display: "block" } : { display: "none" }
          }
        >
          <ul>
            <li>
              <Link style={linkStyle} to="/history">
                History
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="/feedback">
                Send Feedback
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="/help">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="rad-deg">
          <p>{this.props.deg ? "DEG" : "RAD"}</p>
        </div>
      </div>
    );
  }
}
