import React from 'react';
import classes from './navBar.module.scss';
import Burger from './burger/burger';
import NavItems from '../navItems/navItems';

const navBar = props => {
  return (
    <nav className={`${classes.navBarContainer} ${props.isShowNavBar ? classes.navBarShow : classes.navBarHide}`}>
      <span style={{letterSpacing: "2px", fontSize: "2rem"}}>FF</span>
      <div className={classes.navItemsWrapper}>
        <NavItems setIsShowSideMenu={props.setIsShowSideMenu} />
      </div>
      <div className={classes.mobileView}>
        <Burger clickHandler={()=>props.setIsShowSideMenu(true)} />
      </div>

    </nav>
  );
};

export default navBar;