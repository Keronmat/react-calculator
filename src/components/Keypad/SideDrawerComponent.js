import React from "react";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideDrawer(props) {
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
      style={props.sideDrawerOpen ? { right: "0px" } : { right: "-189px" }}
    >
      <button className="drag-sym" onClick={props.toggleSideDrawer}>
        <FontAwesomeIcon
          icon={props.sideDrawerOpen ? faChevronRight : faChevronLeft}
        />
      </button>

      <button
        className="ripple"
        style={props.inverse ? invStyle : null}
        onClick={() => props.toggleInverse()}
      >
        INV
      </button>
      <button className="ripple" onClick={() => props.handleRadorDeg()}>
        {props.deg ? "RAD" : "DEG"}
      </button>
      <button
        className="ripple"
        value="%"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        &#37;
      </button>
      <button
        className="ripple"
        style={props.inverse ? fontInverseStyle : null}
        value={props.inverse ? "sin⁻¹(" : "sin("}
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        {props.inverse ? "sin⁻¹" : "sin"}
      </button>

      <button
        style={props.inverse ? fontInverseStyle : null}
        value={props.inverse ? "cos⁻¹(" : "cos("}
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        {props.inverse ? "cos⁻¹" : "cos"}
      </button>
      <button
        style={props.inverse ? fontInverseStyle : null}
        value={props.inverse ? "tan⁻¹(" : "tan("}
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        {props.inverse ? "tan⁻¹" : "tan"}
      </button>
      <button
        value={props.inverse ? "exp(" : "ln("}
        style={props.inverse ? fontInverseStyle : null}
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        {props.inverse ? "eˣ" : "ln"}
      </button>
      <button
        value={props.inverse ? "10^" : "log("}
        style={props.inverse ? fontInverseStyle : null}
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        {props.inverse ? "10ˣ" : "log"}
      </button>
      <button
        value="!"
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        !
      </button>
      <button
        value="π"
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        &pi;
      </button>
      <button
        value="e"
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        e
      </button>
      <button
        value="^"
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        &#8963;
      </button>
      <button
        value="("
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        &#8317;
      </button>
      <button
        value=")"
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        &#8318;
      </button>
      <button
        value={props.inverse ? "²" : "√"}
        style={props.inverse ? fontInverseStyle : null}
        className="ripple"
        onClick={e => props.handleSideDrawerKeys(e.target.value)}
      >
        {props.inverse ? <>&#215;&#178;</> : <>&#8730;</>}
      </button>
    </div>
  );
}
