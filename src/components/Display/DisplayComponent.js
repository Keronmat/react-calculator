import React from "react";
import InputDisplay from "./InputDisplayComponent";
import AnswerDisplay from "./AnswerDisplayComponent";
import Menu from "./MenuComponent";

export default function Display(props) {
  const mainBgColor =
    props.theme === "google-theme" || props.theme === "android"
      ? "var(--gaWhite)"
      : null;
  return (
    <div
      style={{ backgroundColor: mainBgColor }}
      className="calculator-display col-sm-12 "
    >
      <Menu deg={props.deg} theme={props.theme} />
      <InputDisplay displayInput={props.displayInput} theme={props.theme} />
      <AnswerDisplay displayResult={props.displayResult} theme={props.theme} />
    </div>
  );
}
