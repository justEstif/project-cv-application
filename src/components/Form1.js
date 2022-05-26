import React, { useState } from "react";
export default function Form1(props) {
  // const { schoolName, titleOfStudy, dateOfStudy } = props.cvApp.educationalExperience;
  // const { companyName, positionTitle, durationOfHire, mainTasks } = props.cvApp.practicalExperience;
  // NOTE the button state
  const [cvApp, setCvApp] = useState(props.cvApp);
  const {
    firstName,
    lastName,
    userEmail,
    phone,
    schoolName,
    titleOfStudy,
    dateOfStudy,
    companyName,
    positionTitle,
    durationOfHire,
    mainTasks,
  } = cvApp;
  // TODO handleChange function
  //
  function handleChange(e) {
    console.log(e.target.id)
  }
  return (
    <div className="formcontainer">
      <form>
        <h1>CV-Application</h1>

        <fieldset className="fieldset ginfo">
          <legend>General Information</legend>

          <label htmlFor="firstName">First name:</label>
          <input
            onChange={handleChange}
            value={firstName}
            type="text"
            id="firstName"
            name="firstName"
          />

          <label htmlFor="lastName">Last name:</label>
          <input
            onChange={handleChange}
            value={lastName}
            type="text"
            id="lastName"
            name="lastName"
          />

          <label htmlFor="userEmail">Email Address:</label>
          <input
            onChange={handleChange}
            value={userEmail}
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="you@example.com"
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            onChange={handleChange}
            value={phone}
            type="tel"
            id="phone"
            name="phone"
          />
        </fieldset>

        <fieldset className="fieldset eexp">
          <legend>Educational Experience</legend>

          {/* NOTE maybe it could expand based on some kind of choice */}
          {/*REVIEW What if the has more user than school one/*/}

          <label htmlFor="schoolName">School Name:</label>
          <input
            onChange={handleChange}
            value={schoolName}
            type="text"
            id="schoolName"
            name="schoolName"
          />

          <label htmlFor="titleOfStudy">Title of Study:</label>
          <input
            onChange={handleChange}
            value={titleOfStudy}
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
          />

          <label htmlFor="dateOfStudy">Date of Study:</label>
          <input
            onChange={handleChange}
            value={dateOfStudy}
            type="date"
            id="dateOfStudy"
            name="dateOfStudy"
          />
        </fieldset>

        <fieldset className="fieldset pexp">
          <legend>Practical Experience</legend>

          <label htmlFor="companyName">Company Name:</label>
          <input
            onChange={handleChange}
            value={companyName}
            type="text"
            id="companyName"
            name="companyName"
          />

          <label htmlFor="positionTitle">Postion Title:</label>
          <input
            onChange={handleChange}
            value={positionTitle}
            type="text"
            id="positionTitle"
            name="positionTitle"
          />

          <label htmlFor="durationOfHire">Duration of Hire:</label>
          <input
            onChange={handleChange}
            value={durationOfHire}
            type="date"
            id="durationOfHire"
            name="durationOfHire"
          />

          <label htmlFor="mainTasks">Main Tasks:</label>
          <textarea
            onChange={handleChange}
            value={mainTasks}
            id="mainTasks"
            name="mainTasks"
            rows="5"
            cols="60"
          ></textarea>
        </fieldset>

        <div>
          {/*TODO button should change on edit after submit*/}
          <button type="submit" className="btn">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
