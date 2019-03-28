import React from "react";
import SideDrawer from "./SideDrawerComponent";
import MainOperators from "./MainOperatorsComponent";
import NumberPad from "./NumberPadComponent";

export default function Keypad(props) {
  const border = props.theme === "google-theme" ? "1px solid #D1D4D6" : null;
  const numberBgColor =
    props.theme === "google-theme"
      ? "var(--gltGrey)"
      : props.theme === "android"
      ? "var(--adkgrey)"
      : null;
  const operBgColor =
    props.theme === "google-theme"
      ? "var(--gltGrey)"
      : props.theme === "android"
      ? "var(--altGrey)"
      : null;

  return (
    <div className="calculator-keypad col-sm-12">
      <div className="pad row">
        <div
          style={{ backgroundColor: numberBgColor, borderRight: border }}
          className="number-pad col-8"
        >
          <NumberPad
            handleClick={props.handleClick}
            handleEqualSign={props.handleEqualSign}
            handleDot={props.handleDot}
            theme={props.theme}
          />
        </div>
        <div
          style={{ backgroundColor: operBgColor }}
          className="operators col-3"
        >
          <MainOperators
            handleClick={props.handleClick}
            handleBackSpace={props.handleBackSpace}
            handleClear={props.handleClear}
            toggleOperator={props.toggleOperator}
            operatorInUse={props.operatorInUse}
            theme={props.theme}
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
            theme={props.theme}
          />
        </React.Fragment>
      </div>
    </div>
  );
}
