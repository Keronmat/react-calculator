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
        <button onClick={() => this.props.handleRadorDeg}>
          {this.props.isRadoRdeg ? "RAD" : "DEG"}
        </button>
        <button
          value="%"
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          &#37;
        </button>
        <button
          value="sin("
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          sin
        </button>
        <button
          value="cos("
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          cos
        </button>
        <button
          value="tan("
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          tan
        </button>
        <button
          value="ln("
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          ln
        </button>
        <button
          value="log("
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          log
        </button>
        <button
          value="!"
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          !
        </button>
        <button
          value="π"
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          &pi;
        </button>
        <button
          value="e"
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          e
        </button>
        <button
          value="^"
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          &#8963;
        </button>
        <button
          value="("
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          &#8317;
        </button>
        <button
          value=")"
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          &#8318;
        </button>
        <button
          value="√"
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          &#8730;
        </button>
      </div>
    );
  }
}
