import "./FormStyle.css";
import React from "react";

export default class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.id);
    console.log(e.target.value);
    this.props.handleChange(e);
  }
  render() {
    const { firstName, lastName, email, phone } = this.props.cvApp;

    return (
      <fieldset className="fieldset ginfo">
        <legend>General Information</legend>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          value={firstName}
          type="text"
          onChange={this.handleChange}
        ></input>

        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          value={lastName}
          type="text"
          onChange={this.handleChange}
        />

        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          value={email}
          type="text"
          onChange={this.handleChange}
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          id="phone"
          value={phone}
          type="tel"
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
