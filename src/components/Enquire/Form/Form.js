import React from "react";
import classes from "./Form.module.scss";
import UIButtonSlide from '../../UI/Button/slideOverlay/slideOverlay';

class form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: ""
    };
  }

  inputOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  sendEnquiry = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { state } = this;
    return (
      <form className={classes.form}>
        <label htmlFor="firstName">What's your name?</label>
        <div className={classes.nameInput}>
          <input
            className={classes.input}
            id="firstName"
            type="text"
            value={state.firstName}
            onChange={this.inputOnChange}
            placeholder="First name"
          />
          <input
            className={classes.input}
            id="lastName"
            type="text"
            value={state.lastName}
            onChange={this.inputOnChange}
            placeholder="Last name"
          />
        </div>
        <label htmlFor="grade">Child's grade?</label>
        <input
          className={classes.input}
          id="grade"
          type="text"
          value={state.email}
          onChange={this.inputOnChange}
          placeholder="Grade"
        />
        <label htmlFor="email">What's your email address?</label>
        <input
          className={classes.input}
          id="email"
          type="text"
          value={state.email}
          onChange={this.inputOnChange}
          placeholder="Email"
        />
        <label htmlFor="contactNumber">Best contact number?</label>
        <input
          className={classes.input}
          id="contactNumber"
          type="number"
          value={state.contactNumber}
          onChange={this.inputOnChange}
          placeholder="Contact number"
        />
        <div className={classes.enquiryButton} style={{backgroundColor: "blue"}}>
          <UIButtonSlide
            rgb="40,40,200"
          >
            <span>SEND ENQUIRY</span>
          </UIButtonSlide>
        </div>

      </form>
    );
  }
}

export default form;
