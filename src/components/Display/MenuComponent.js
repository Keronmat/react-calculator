import React from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu(props) {
  return (
    <div className="faEllipsisV">
      <div>
        <FontAwesomeIcon icon={faEllipsisV} transform="down-4 grow-2.5" />
      </div>

      <div className="rad-deg">
        <p>{props.deg ? "DEG" : "RAD"}</p>
      </div>
    </div>
  );
}
