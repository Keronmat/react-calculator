import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FadeTransform } from "react-animation-components";

export default function Help(props) {
  const googleStyle = {
    backgroundColor: "var(--gBlue)",
    color: "var(--gaWhite)"
  };
  const androidStyle = {
    backgroundColor: "var(--aGreen",
    color: "var(--gaWhite)"
  };
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
            <div className="title">Help</div>
          </div>
          <div className="helpSec">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Aenean eget sem quis augue mattis cursus eu ac quam.</li>
              <li>Integer sit amet sapien non ipsum imperdiet lobortis.</li>
              <li>Nunc ac quam at neque pellentesque euismod.</li>
              <li>Mauris vel tortor varius, porta nunc id, iaculis enim.</li>
              <li>Mauris finibus ipsum at pharetra faucibus.</li>
            </ul>
          </div>
        </div>
      </div>
    </FadeTransform>
  );
}
