import React from "react";
import { withRouter } from "react-router-dom";
import UIButtonFlick from "../../UI/Button/Flick/Flick";

const navItems = props => {
  function routeTo(path) {
    props.history.push(path);
    props.setIsShowSideMenu(false);
  }
  return (
    <React.Fragment>
      <UIButtonFlick
        onClick={() => routeTo("/about")}
        padding="5px 10px"
        fontSize="1.1rem"
      >
        ABOUT
      </UIButtonFlick>
      <UIButtonFlick
        onClick={() => routeTo("/")}
        padding="5px 10px"
        // fontSize="1.5rem"
        fontSize="1.1rem"
      >
        HOME
      </UIButtonFlick>
      <UIButtonFlick
        onClick={() => routeTo("/contact")}
        padding="5px 10px"
        // fontSize="1.5rem"
        fontSize="1.1rem"
      >
        CONTACT
      </UIButtonFlick>
      <UIButtonFlick
        onClick={() => routeTo("/enquire")}
        padding="5px 10px"
        // fontSize="1.5rem"
        fontSize="1.1rem"
      >
        ENQUIRE
      </UIButtonFlick>
    </React.Fragment>
  );
};

export default withRouter(navItems);
