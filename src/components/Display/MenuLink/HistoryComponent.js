import React from "react";
import { Link } from "react-router-dom";
import classes from "./History.css";

export default function History() {
  return (
    <div className={classes.App}>
      <div className={classes.Back}>
        <Link to="/main">Back</Link>
      </div>
      <div className={classes.History}>This is the history</div>
    </div>
  );
}
