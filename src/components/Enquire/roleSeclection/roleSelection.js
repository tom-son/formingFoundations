import React from "react";
import classes from "./roleSelection.module.scss";

const roleSelection = props => {
  function directTo(role) {
    props.history.push(`/enquire/${role}`)
  }

  return (
    <section className={classes.roleContainer}>
      <div className={classes.studentParentImg} />
      <h2>I'm a...</h2>
      <button onClick={()=>directTo("student")}>STUDENT</button>
      <button onClick={()=>directTo("parent")}>PARENT</button>
    </section>
  );
};

export default roleSelection;