import React from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu(props) {
  return (
    <div className="faEllipsisV">
      <FontAwesomeIcon icon={faEllipsisV} transform="down-4 grow-2.5" />
      <div className="rad-deg">
        <p>{props.isRadoRdeg ? "RAD" : "DEG"}</p>
      </div>
    </div>
  );
}
