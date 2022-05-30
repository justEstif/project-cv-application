import React from "react";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.props.handleChange(e);
  }
  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      schoolName,
      titleOfStudy,
      dateOfStudy,
      companyName,
      positionTitle,
      durationOfHire,
      mainTasks,
    } = this.props.cvApp;

    return (
      <div>
        <p>
          {firstName}, {lastName}, {email}, {phone}
        </p>
        <p>
          {schoolName}, {titleOfStudy}, {dateOfStudy}
        </p>
        <p>
          {companyName}, {positionTitle}, {durationOfHire}, {mainTasks}
        </p>
      </div>
    );
  }
}

