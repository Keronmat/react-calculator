import React from "react";

export default function AnswerDisplay(props) {
  const fontColor =
    props.theme === "google-theme"
      ? "var(--gaWhite)"
      : props.theme === "android"
      ? "var(--gBlack)"
      : null;
  const shadow =
    props.theme === "google-theme"
      ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000"
      : null;
  return (
    <input
      style={{ color: fontColor, textShadow: shadow }}
      className="answer-display"
      value={props.displayResult}
      readOnly
    />
  );
}
