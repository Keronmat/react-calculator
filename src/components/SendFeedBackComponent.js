import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SendFeedBack(props) {
  return (
    <div className="App">
      <div className="calculator">
        <div className="top-pane">
          <div className="backButton">
            <Link to="/main">
              <FontAwesomeIcon icon={faArrowLeft} color="var(--mainWhite)" />
            </Link>
          </div>
          <div className="title">Feedback</div>
        </div>
        <div className="feedback-sec" />
      </div>
    </div>
  );
}
