import React from 'react';
import NavBar from './navBar/navBar';
import SideMenu from './sideMenu/sideMenu';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.navBarVisibility = this.navBarVisibility.bind(this);
    this.setIsShowSideMenu = this.setIsShowSideMenu.bind(this);


    this.lastScrollTime = 0;
    this.throttleDelay = 400;
    this.lastScrollY = 0;

    this.state = {
      isShowNavBar: false,
      isShowSideMenu: false
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.navBarVisibility);
  }

  navBarVisibility() {
    let now = Date.now();

    if (this.lastScrollTime + this.throttleDelay < now) {
      const curScrollY = window.scrollY;
      if (curScrollY < this.lastScrollY) {
        this.setState({ isShowNavBar: true });
      } else {
        this.setState({ isShowNavBar: false});
      }
      this.lastScrollY = curScrollY;
      this.lastScrollTime = now;
    }
  }

  setIsShowSideMenu(isShowSideMenu) {
    console.log(isShowSideMenu)
    this.setState({ isShowSideMenu: isShowSideMenu });
    this.toggleBodyOverflow(isShowSideMenu);
  }

  toggleBodyOverflow(isHide) {
    if (isHide) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }

  render() {

    const { state } = this;
    return (
      <React.Fragment>
        <NavBar isShowNavBar={state.isShowNavBar} setIsShowSideMenu={this.setIsShowSideMenu}/>
        <SideMenu isShowSideMenu={state.isShowSideMenu} setIsShowSideMenu={this.setIsShowSideMenu}  />
        {this.props.children}
        <div style={{height: "600px", backgroundColor: "#151515"}}>
        </div>
      </React.Fragment>
    );
  };
};

export default Layout;