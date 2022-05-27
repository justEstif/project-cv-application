import React, { useState } from "react";
import "./FormStyle.css";
export default function Form1(props) {
  // NOTE the button state
  const [firstName, setFirstName] = useState(props.cvApp.firstName);
  const [lastName, setLastName] = useState(props.cvApp.lastName);
  const [userEmail, setUserEmail] = useState(props.cvApp.userEmail);
  const [phone, setPhone] = useState(props.cvApp.phone);
  const [schoolName, setSchoolName] = useState(props.cvApp.schoolName);
  const [titleOfStudy, setTitleOfStudy] = useState(props.cvApp.titleOfStudy);
  const [dateOfStudy, setDateOfStudy] = useState(props.cvApp.dateOfStudy);
  const [companyName, setCompanyName] = useState(props.cvApp.companyName);
  const [positionTitle, setPositionTitle] = useState(props.cvApp.positionTitle);
  const [durationOfHire, setDurationOfHire] = useState(
    props.cvApp.durationOfHire
  );
  const [formDisplayClass, setFormClass] = useState("");
  const [overviewDisplayClass, setOverviewClass] = useState("hide");
  const [mainTasks, setMainTasks] = useState(props.cvApp.mainTasks);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormClass("hide")
    setOverviewClass("")
  };
  const editMode = () => {
    setFormClass("")
    setOverviewClass("hide")
  }
  return (
    <div>
      <div className={`formcontainer ${formDisplayClass}`}>
        <form onSubmit={handleSubmit}>
          <h1>CV-Application</h1>

          <fieldset className="fieldset ginfo">
            <legend>General Information</legend>

            <label htmlFor="firstName">First name:</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              id="firstName"
              name="firstName"
            />

            <label htmlFor="lastName">Last name:</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              id="lastName"
              name="lastName"
            />

            <label htmlFor="userEmail">Email Address:</label>
            <input
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder="you@example.com"
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setSchoolName(e.target.value)}
              value={schoolName}
              type="text"
              id="schoolName"
              name="schoolName"
            />

            <label htmlFor="titleOfStudy">Title of Study:</label>
            <input
              onChange={(e) => setTitleOfStudy(e.target.value)}
              value={titleOfStudy}
              type="text"
              id="titleOfStudy"
              name="titleOfStudy"
            />

            <label htmlFor="dateOfStudy">Date of Study:</label>
            <input
              onChange={(e) => setDateOfStudy(e.target.value)}
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
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
              type="text"
              id="companyName"
              name="companyName"
            />

            <label htmlFor="positionTitle">Postion Title:</label>
            <input
              onChange={(e) => setPositionTitle(e.target.value)}
              value={positionTitle}
              type="text"
              id="positionTitle"
              name="positionTitle"
            />

            <label htmlFor="durationOfHire">Duration of Hire:</label>
            <input
              onChange={(e) => setDurationOfHire(e.target.value)}
              value={durationOfHire}
              type="date"
              id="durationOfHire"
              name="durationOfHire"
            />

            <label htmlFor="mainTasks">Main Tasks:</label>
            <textarea
              onChange={(e) => setMainTasks(e.target.value)}
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
      <div className={`${overviewDisplayClass}`}>
        <p>
          {firstName}, {lastName}, {userEmail}, {phone}
        </p>
        <p>
          {schoolName}, {titleOfStudy}, {dateOfStudy}
        </p>
        <p>
          {companyName}, {positionTitle}, {durationOfHire}, {mainTasks}
        </p>
        <button onClick={editMode}>Edit</button>
      </div>
    </div>
  );
}
