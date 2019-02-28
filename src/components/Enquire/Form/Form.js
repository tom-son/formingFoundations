import React from 'react';

class form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: ""
    }
  }

  inputOnChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  }

  sendEnquiry = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { state } = this;
    return (
      <form>
        <h2>What's your name?</h2>
        <input 
          id="firstName"
          type="text"
          value={state.firstName}
          onChange={this.inputOnChange}
          placeholder="First name"
        />
        <input 
          id="lastName"
          type="text"
          value={state.lastName}
          onChange={this.inputOnChange}
          placeholder="Last name"
        />
        <h2>What's your email address?</h2>
        <input
          id="email" 
          type="text"
          value={state.email}
          onChange={this.inputOnChange}
          placeholder="Email"
        />
        <h2>Best contact number?</h2>
        <input
          id="contactNumber"
          type="number"
          value={state.contactNumber}
          onChange={this.inputOnChange}
          placeholder="Contact number"
        />
        <button onClick={this.sendEnquiry}>SEND ENQUIRY</button>
      </form>
    );
  }
};

export default form;