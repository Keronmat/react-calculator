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

  handleClick = () => {
    // attach/remove event handler
    if (!this.state.showDropDown) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState(prevState => ({
      showDropDown: !prevState.showDropDown
    }));
  };

  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  };

  render() {
    const fontColor =
      this.props.theme === "google-theme" || this.props.theme === "android"
        ? "var(--gBlack)"
        : "var(--mdBlue)";
    const IconColor =
      this.props.theme === "google-theme" || this.props.theme === "android"
        ? "var(--altGrey)"
        : "var(--mdBlue)";
    const radDegColor =
      this.props.theme === "google-theme"
        ? "var(--gaWhite)"
        : this.props.theme === "android"
        ? "var(--gBlack)"
        : null;
    const shadow =
      this.props.theme === "google-theme"
        ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000"
        : null;
    const mainBgColor =
      this.props.theme === "google-theme" || this.props.theme === "android"
        ? "var(--gaWhite)"
        : null;

    const linkStyle = { textDecoration: "none", color: fontColor };
    return (
      <div>
        <div
          ref={node => {
            this.node = node;
          }}
          className="menu-icon"
          onClick={this.handleClick}
        >
          <FontAwesomeIcon icon={faEllipsisV} color={IconColor} />
        </div>
        <div
          className="dropdown-content"
          style={{
            display: this.state.showDropDown ? "block" : "none",
            backgroundColor: mainBgColor
          }}
        >
          <ul>
            <li>
              <Link style={linkStyle} to="/history">
                History
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="/settings">
                Settings
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="/help">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div
          style={{ color: radDegColor, textShadow: shadow }}
          className="rad-deg"
        >
          <p>{this.props.deg ? "DEG" : "RAD"}</p>
        </div>
      </div>
    );
  }
}
