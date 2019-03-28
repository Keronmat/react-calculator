import React from "react";
import Display from "./Display/DisplayComponent";
import Keypad from "./Keypad/KeypadComponent";

export default function Main(props) {
  return (
    <div className="calculator">
      <Display
        displayInput={props.displayInput}
        displayResult={props.displayResult}
        deg={props.deg}
        theme={props.theme}
      />

      <Keypad
        toggleOperator={props.toggleOperator}
        operatorInUse={props.operatorInUse}
        handleClick={props.handleClick}
        handleBackSpace={props.handleBackSpace}
        handleClear={props.handleClear}
        handleDot={props.handleDot}
        handleSideDrawerKeys={props.handleSideDrawerKeys}
        handleRadorDeg={props.handleRadorDeg}
        deg={props.deg}
        inverse={props.inverse}
        toggleInverse={props.toggleInverse}
        sideDrawerOpen={props.sideDrawerOpen}
        toggleSideDrawer={props.toggleSideDrawer}
        theme={props.theme}
      />
    </div>
  );
}
