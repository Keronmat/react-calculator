import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FadeTransform } from "react-animation-components";

export default function History(props) {
  const googleStyle = {
    backgroundColor: "var(--gBlue)",
    color: "var(--gaWhite)"
  };
  const androidStyle = {
    backgroundColor: "var(--aGreen",
    color: "var(--gaWhite)"
  };

  const historyVal = props.history.map((h, i) => {
    return (
      <div key={i} className="historyVal">
        <div className="historyExp">{h.exp} </div>
        <div className="historyResults"> {h.result}</div>
      </div>
    );
  });
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(-50%)"
      }}
    >
      <div className="App">
        <div className="calculator">
          <div
            style={
              props.theme === "google-theme"
                ? googleStyle
                : props.theme === "android"
                ? androidStyle
                : null
            }
            className="top-pane"
          >
            <div className="backButton">
              <Link to="/main">
                <FontAwesomeIcon icon={faArrowLeft} color="var(--mainWhite)" />
              </Link>
            </div>
            <div className="title">History</div>
          </div>
          <div className="historySec">{historyVal}</div>
        </div>
      </div>
    </FadeTransform>
  );
}
