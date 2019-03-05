import React from 'react';
import classes from './sideMenu.module.scss';
import NavItems from '../navItems/navItems';

const sideMenu = props => {


  return (
    <div className={`${classes.sideMenuContainer} ${props.isShowSideMenu ? classes.sideMenuShow : classes.sideMenuHide}`} >
      <div className={classes.navItemsWrapper}>
        <NavItems setIsShowSideMenu={props.setIsShowSideMenu}/>
      </div>
      <span
        onClick={()=>props.setIsShowSideMenu(false)}
        style={{color: "white", position: "absolute", right: "10px", top: "10px"}}
      >
        Close
      </span>
    </div>
  );
};

export default sideMenu;