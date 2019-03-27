import React from "react";
import SideDrawer from "./SideDrawerComponent";
import MainOperators from "./MainOperatorsComponent";
import NumberPad from "./NumberPadComponent";

export default function Keypad(props) {
  return (
    <div className="calculator-keypad col-sm-12">
      <div className="pad row">
        <div className="number-pad col-8">
          <NumberPad
            handleClick={props.handleClick}
            handleEqualSign={props.handleEqualSign}
            handleDot={props.handleDot}
          />
        </div>
        <div className="operators col-3">
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
            sideDrawerOpen={props.sideDrawerOpen}
            toggleSideDrawer={props.toggleSideDrawer}
          />
        </React.Fragment>
      </div>
    </div>
  );
}
