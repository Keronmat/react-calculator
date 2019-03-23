import React from "react";

const NumberPad = props => {
  return (
    <React.Fragment>
      <button name={0} onClick={e => props.handleClick(0)}>
        0
      </button>
      <button onClick={() => props.handleDot()}>.</button>
      <button onClick={() => props.handleClick("=")}>=</button>
      <button name={1} onClick={e => props.handleClick(1)}>
        1
      </button>
      <button name={2} onClick={e => props.handleClick(2)}>
        2
      </button>
      <button name={3} onClick={e => props.handleClick(3)}>
        3
      </button>
      <button name={4} onClick={e => props.handleClick(4)}>
        4
      </button>
      <button name={5} onClick={e => props.handleClick(5)}>
        5
      </button>
      <button name={6} onClick={e => props.handleClick(6)}>
        6
      </button>
      <button name={7} onClick={e => props.handleClick(7)}>
        7
      </button>
      <button name={8} onClick={e => props.handleClick(8)}>
        8
      </button>
      <button name={9} onClick={e => props.handleClick(9)}>
        9
      </button>
    </React.Fragment>
  );
};
export default NumberPad;
