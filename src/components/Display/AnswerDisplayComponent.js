import React from "react";

export default function AnswerDisplay(props) {
  return (
    <input className="answer-display" value={props.displayResult} disabled />
  );
}
