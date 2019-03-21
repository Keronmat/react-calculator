import React, { Component } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SideDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  SideDrawerHandler = () => {
    console.log(this.state);
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div
        className="extra-operators"
        style={this.state.isOpen ? { right: "0px" } : { right: "-188px" }}
      >
        <button className="drag-sym" onClick={this.SideDrawerHandler}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <button>INV</button>
        <button>DEG</button>
        <button>&#37;</button>
        <button>sin</button>
        <button>cos</button>
        <button>tan</button>
        <button>In</button>
        <button>log</button>
        <button>!</button>
        <button> &pi;</button>
        <button>e</button>
        <button>&#8963;</button>
        <button>&#8317;</button>
        <button>&#8318;</button>
        <button>&#8730;</button>
      </div>
    );
  }
}
