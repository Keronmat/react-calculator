import React from "react";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainOperators = props => {
  const toggleThemeClass =
    props.theme === "google-theme"
      ? "ripple-google"
      : props.theme === "android"
      ? "ripple-android"
      : "ripple-numpad";

  const backspaceColor =
    props.theme === "google-theme"
      ? { color: "var(--gBlue)" }
      : props.theme === "android"
      ? { color: "var(--aGreen)" }
      : { color: "var(--orange)" };
  const fontColor =
    props.theme === "google-theme"
      ? "var(--gBlack)"
      : props.theme === "android"
      ? "var(--gaWhite)"
      : null;
  const shadow =
    props.theme === "android"
      ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000"
      : null;

  return (
    <React.Fragment>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        name="C"
        className={toggleThemeClass}
        onClick={() => props.handleClear()}
      >
        C
      </button>
      <button
        style={backspaceColor}
        className={toggleThemeClass}
        onClick={() => props.handleBackSpace()}
      >
        <FontAwesomeIcon icon={faBackspace} />
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        name="x"
        className={toggleThemeClass}
        onClick={e => props.toggleOperator(e.currentTarget.name)}
      >
        &#215;
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        name="÷"
        className={toggleThemeClass}
        onClick={e => props.toggleOperator(e.currentTarget.name)}
      >
        &#247;
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        name="-"
        className={toggleThemeClass}
        onClick={e => props.toggleOperator(e.currentTarget.name)}
      >
        &#8722;
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        name="+"
        className={toggleThemeClass}
        onClick={e => props.toggleOperator(e.currentTarget.name)}
      >
        &#43;
      </button>
    </React.Fragment>
  );
};
export default MainOperators;
