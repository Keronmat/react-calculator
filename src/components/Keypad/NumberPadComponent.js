import React from "react";

const NumberPad = props => {
  return (
    <React.Fragment>
      <button
        className="ripple-numpad"
        name={0}
        onClick={e => props.handleClick(0)}
      >
        0
      </button>
      <button className="ripple-numpad" onClick={() => props.handleDot()}>
        .
      </button>
      <button className="ripple-numpad" onClick={() => props.handleClick("=")}>
        =
      </button>
      <button
        className="ripple-numpad"
        name={1}
        onClick={e => props.handleClick(1)}
      >
        1
      </button>
      <button
        className="ripple-numpad"
        name={2}
        onClick={e => props.handleClick(2)}
      >
        2
      </button>
      <button
        className="ripple-numpad"
        name={3}
        onClick={e => props.handleClick(3)}
      >
        3
      </button>
      <button
        className="ripple-numpad"
        name={4}
        onClick={e => props.handleClick(4)}
      >
        4
      </button>
      <button
        className="ripple-numpad"
        name={5}
        onClick={e => props.handleClick(5)}
      >
        5
      </button>
      <button
        className="ripple-numpad"
        name={6}
        onClick={e => props.handleClick(6)}
      >
        6
      </button>
      <button
        className="ripple-numpad"
        name={7}
        onClick={e => props.handleClick(7)}
      >
        7
      </button>
      <button
        className="ripple-numpad"
        name={8}
        onClick={e => props.handleClick(8)}
      >
        8
      </button>
      <button
        className="ripple-numpad"
        name={9}
        onClick={e => props.handleClick(9)}
      >
        9
      </button>
    </React.Fragment>
  );
};
export default NumberPad;
