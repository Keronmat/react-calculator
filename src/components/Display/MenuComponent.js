import React from "react";
import { faEllipsisV, faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu(props) {
  return (
    <div>
      <div className="menu-icon">
        <FontAwesomeIcon icon={faEllipsisV} size="md" />
      </div>

      <div className="rad-deg">
        <p>{props.deg ? "DEG" : "RAD"}</p>
      </div>
    </div>
  );
}
