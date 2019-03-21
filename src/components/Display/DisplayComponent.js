import React from "react";
import InputDisplay from "./InputDisplayComponent";
import AnswerDisplay from "./AnswerDisplayComponent";
import Menu from "./MenuComponent";

export default function Display(props) {
  return (
    <div className="calculator-display col-sm-12 ">
      <Menu />
      <InputDisplay displayInput={props.displayInput} />
      <AnswerDisplay displayResult={props.displayResult} />
    </div>
  );
}
