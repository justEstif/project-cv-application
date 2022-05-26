import React, { Component } from "react";
import Form from "./components/Form";
import Form1 from "./components/Form1";
import Overview from "./components/Overview";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cvApp = {
      firstName: "",
      lastName: "",
      userEmail: "",
      phone: "",
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
      companyName: "",
      positionTitle: "",
      durationOfHire: "",
      mainTasks: "",
    }
    return (
      <div>
        <Overview cvApp={cvApp} />
        {/* <Form cvApp={cvApp} /> */}
        <Form1 cvApp={cvApp} />
      </div>
    );
  }
}
export default App;
