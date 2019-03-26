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
    if (!this.state.showDropDown) {
      // attach/remove event handler
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
    return (
      <div>
        <div className="menu-icon" onClick={this.handleClick}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
        <div
          ref={node => {
            this.node = node;
          }}
          className="dropdown-content"
          style={
            this.state.showDropDown ? { display: "block" } : { display: "none" }
          }
        >
          <ul>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/feedback">Send Feedback</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
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
