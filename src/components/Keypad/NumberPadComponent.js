import React from "react";

const NumberPad = props => {
  const toggleThemeClass =
    props.theme === "google-theme"
      ? "ripple-google"
      : props.theme === "android"
      ? "ripple-android"
      : "ripple-numpad";

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
        className={toggleThemeClass}
        value={0}
        onClick={e => props.handleClick(0)}
      >
        0
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        onClick={() => props.handleDot()}
      >
        .
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        onClick={() => props.handleClick("=")}
      >
        =
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        value={1}
        onClick={e => props.handleClick(1)}
      >
        1
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        value={2}
        onClick={e => props.handleClick(2)}
      >
        2
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        value={3}
        onClick={e => props.handleClick(3)}
      >
        3
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        value={4}
        onClick={e => props.handleClick(4)}
      >
        4
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        name={5}
        onClick={e => props.handleClick(5)}
      >
        5
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        value={6}
        onClick={e => props.handleClick(6)}
      >
        6
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        value={7}
        onClick={e => props.handleClick(7)}
      >
        7
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        value={8}
        onClick={e => props.handleClick(8)}
      >
        8
      </button>
      <button
        style={{ color: fontColor, textShadow: shadow }}
        className={toggleThemeClass}
        value={9}
        onClick={e => props.handleClick(9)}
      >
        9
      </button>
    </React.Fragment>
  );
};
export default NumberPad;
