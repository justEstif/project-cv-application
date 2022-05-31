import React, { useState } from "react";
import Form from "./components/Form";
import Overview from "./components/Overview";
export default function App() {
  const [cvApp, setCvApp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
    companyName: "",
    positionTitle: "",
    durationOfHire: "",
    mainTasks: "",
  });
  const [classes, setClasses] = useState({
    formClass: "",
    overViewClass: "hide",
  });

  const handleChange = (e) => {
    setCvApp((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };
  const handleSubmit = () => {
    if (classes.overViewClass) {
      setClasses({
        formClass: "hide",
        overViewClass: "",
      });
    } else {
      setClasses({
        formClass: "",
        overViewClass: "hide",
      });
    }
  };
  return (
    <div className="container">
      <Form
        cvApp={cvApp}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formClass={classes.formClass}
      />
      <Overview
        cvApp={cvApp}
        handleSubmit={handleSubmit}
        overViewClass={classes.overViewClass}
      />
    </div>
  );
}
