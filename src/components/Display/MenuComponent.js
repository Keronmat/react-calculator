import React from "react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu() {
  return (
    <div className="faEllipsisV">
      <FontAwesomeIcon icon={faEllipsisV} transform="down-4 grow-2.5" />
    </div>
  );
}
