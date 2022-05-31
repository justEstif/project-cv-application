import React from "react";

export default function Overview(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(e);
  };
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
  } = props.cvApp;
  const { overViewClass } = props;

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
      <button onClick={handleSubmit}>Edit</button>
    </div>
  );
}
