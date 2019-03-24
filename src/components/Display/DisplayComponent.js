import React from "react";
import InputDisplay from "./InputDisplayComponent";
import AnswerDisplay from "./AnswerDisplayComponent";
import Menu from "./MenuComponent";

export default function Display(props) {
  /* const x =
    props.displayInput.length > 20
      ? { overflow: "scroll" }
      : { overflow: "hidden" };*/
  return (
    <div className="calculator-display col-sm-12 ">
      <Menu deg={props.deg} />
      <InputDisplay displayInput={props.displayInput} />
      <AnswerDisplay displayResult={props.displayResult} />
    </div>
  );
}
