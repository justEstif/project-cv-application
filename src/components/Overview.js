import React from "react";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log("Edit Mode")
    this.props.handleSubmit(e)
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
    const { overViewClass } = this.props

    return (
      <div className={`${overViewClass}`}>
        <p>Submitted Form</p>
        <p>
          Full Name: {firstName} {lastName}
        </p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>School Attended: {schoolName}</p>
        <p>Title of Study: {titleOfStudy}</p>
        <p>Date of Graduation: {dateOfStudy}</p>
        <p>Previous Name of Employer: {companyName}</p>
        <p>Previous Position Title: {positionTitle}</p>
        <p>Duration of Position: {durationOfHire}</p>
        <p>Previous Responsibilities: {mainTasks}</p>
        <button onClick={this.handleSubmit}>Edit</button>
      </div>
    );
  }
}
