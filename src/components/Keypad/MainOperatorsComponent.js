import React from "react";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainOperators = props => {
  return (
    <React.Fragment>
      <button
        name="C"
        className="ripple-oper"
        onClick={() => props.handleClear()}
      >
        C
      </button>
      <button className="ripple-oper" onClick={() => props.handleBackSpace()}>
        <FontAwesomeIcon icon={faBackspace} />
      </button>
      <button
        name="x"
        className="ripple-oper"
        onClick={e => props.toggleOperator(e.currentTarget.name)}
      >
        &#215;
      </button>
      <button
        name="÷"
        className="ripple-oper"
        onClick={e => props.toggleOperator(e.currentTarget.name)}
      >
        &#247;
      </button>
      <button
        name="-"
        className="ripple-oper"
        onClick={e => props.toggleOperator(e.currentTarget.name)}
      >
        &#8722;
      </button>
      <button
        name="+"
        className="ripple-oper"
        onClick={e => props.toggleOperator(e.currentTarget.name)}
      >
        &#43;
      </button>
    </React.Fragment>
  );
};
export default MainOperators;
