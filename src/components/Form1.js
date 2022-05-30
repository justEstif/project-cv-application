import React, { useState } from "react";
import "./FormStyle.css";
export default function Form1(props) {
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
  const [mainTasks, setMainTasks] = useState(props.cvApp.mainTasks);

  const [formDisplayClass, setFormClass] = useState("");
  const [overviewDisplayClass, setOverviewClass] = useState("hide");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormClass("hide");
    setOverviewClass("");
  };

  const editMode = () => {
    setFormClass("");
    setOverviewClass("hide");
  };

  const getLabel = (htmlFor, str) => <label htmlFor={htmlFor}>{str}:</label>;

  const getInput = (changeMethod, value, type, rows, cols) => (
    <input
      onChange={(e) => changeMethod(e.target.value)}
      value={value}
      type={type}
      id={`${value}`}
      rows={rows}
      cols={cols}
    />
  );

  const getTextArea = (changeMethod, value, rows, cols) => (
    <textarea
      onChange={(e) => changeMethod(e.target.value)}
      value={value}
      id={`${value}`}
      rows={rows}
      cols={cols}
    ></textarea>
  );
  return (
    <div>
      <div className={`formcontainer ${formDisplayClass}`}>
        <form onSubmit={handleSubmit}>
          <h1>CV-Application</h1>

          <fieldset className="fieldset ginfo">
            <legend>General Information</legend>

            {getLabel("firstName", "First name")}
            {getInput(setFirstName, firstName, 'text')}

            {getLabel("lastName", "Last name")}
            {getInput(setLastName, lastName, 'text')}

            {getLabel("userEmail", "Email Address:")}
            {getInput(setUserEmail, userEmail, 'email')}

            {getLabel("phone", "Phone Number:")}
            {getInput(setPhone, phone, 'tel')}
          </fieldset>

          <fieldset className="fieldset eexp">
            <legend>Educational Experience</legend>

            {getLabel("schoolName", "School Name")}
            {getInput(setSchoolName, schoolName, 'text')}

            {getLabel("titleOfStudy", "Title of Study")}
            {getInput(setTitleOfStudy, titleOfStudy, 'text')}

            {getLabel("dateOfStudy", "Date of Study")}
            {getInput(setDateOfStudy, dateOfStudy, 'date')}

          </fieldset>

          <fieldset className="fieldset pexp">
            <legend>Practical Experience</legend>

            {getLabel("companyName", "Company Name")}
            {getInput(setCompanyName, companyName, 'text')}

            {getLabel("positionTitle", "Position Title")}
            {getInput(setPositionTitle, positionTitle, "text")}

            {getLabel("durationHire", "Duration of Hire")}
            {/* REVIEW  this should be somekind of dropdown menu*/}
            {getInput(setDurationOfHire, durationOfHire, 'date')}

            {getLabel("mainTasks", "Main Tasks")}
            {getTextArea(setMainTasks, mainTasks, "5", '60')}
          </fieldset>

          <div>
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
