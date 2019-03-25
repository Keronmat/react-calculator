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
    const invStyle = {
      backgroundColor: "#f79c6f",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10
    };
    const fontInverseStyle = { fontWeight: 600 };
    return (
      <div
        className="extra-operators"
        style={this.state.isOpen ? { right: "0px" } : { right: "-188px" }}
      >
        <button className="drag-sym" onClick={this.SideDrawerHandler}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <button
          style={this.props.inverse ? invStyle : null}
          onClick={() => this.props.toggleInverse()}
        >
          INV
        </button>
        <button onClick={() => this.props.handleRadorDeg()}>
          {this.props.deg ? "RAD" : "DEG"}
        </button>
        <button
          value="%"
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          &#37;
        </button>
        <button
          style={this.props.inverse ? fontInverseStyle : null}
          value={this.props.inverse ? "sin⁻¹(" : "sin("}
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          {this.props.inverse ? "sin⁻¹" : "sin"}
        </button>

        <button
          style={this.props.inverse ? fontInverseStyle : null}
          value={this.props.inverse ? "cos⁻¹(" : "cos("}
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          {this.props.inverse ? "cos⁻¹" : "cos"}
        </button>
        <button
          value="tan("
          style={this.props.inverse ? fontInverseStyle : null}
          value={this.props.inverse ? "tan⁻¹(" : "tan("}
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          {this.props.inverse ? "tan⁻¹" : "tan"}
        </button>
        <button
          value={this.props.inverse ? "eˣ" : "ln("}
          style={this.props.inverse ? fontInverseStyle : null}
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          {this.props.inverse ? "eˣ" : "ln"}
        </button>
        <button
          value={this.props.inverse ? "10ˣ" : "log("}
          style={this.props.inverse ? fontInverseStyle : null}
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          {this.props.inverse ? "10ˣ" : "log"}
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
          value={this.props.inverse ? "X²" : "√"}
          style={this.props.inverse ? fontInverseStyle : null}
          onClick={e => this.props.handleSideDrawerKeys(e.target.value)}
        >
          {this.props.inverse ? <>&#215;&#178;</> : <>&#8730;</>}
        </button>
      </div>
    );
  }
}
