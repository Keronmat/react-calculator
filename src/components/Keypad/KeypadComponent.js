import React from "react";
import SideDrawer from "./SideDrawerComponent";
import MainOperators from "./MainOperatorsComponent";
import NumberPad from "./NumberPadComponent";

export default function Keypad(props) {
  return (
    <div className="calculator-keypad col-sm-12">
      <div className="pad row">
        <div className="number-pad col-9">
          <NumberPad
            handleClick={props.handleClick}
            handleEqualSign={props.handleEqualSign}
            handleDot={props.handleDot}
          />
        </div>
        <div className="operators col-2">
          <MainOperators
            handleClick={props.handleClick}
            handleBackSpace={props.handleBackSpace}
            handleClear={props.handleClear}
            toggleOperator={props.toggleOperator}
            operatorInUse={props.operatorInUse}
          />
        </div>
        <React.Fragment>
          <SideDrawer
            handleClick={props.handleClick}
            handleSideDrawerKeys={props.handleSideDrawerKeys}
            handleRadorDeg={props.handleRadorDeg}
            deg={props.deg}
            inverse={props.inverse}
            toggleInverse={props.toggleInverse}
          />
        </React.Fragment>
      </div>
    </div>
  );
}
