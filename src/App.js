import React, { Component } from "react";
import Form from "./components/Form";
import Form1 from "./components/Form1";
import Overview from "./components/Overview";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvApp: {
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
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) =>
    this.setState({
      ...this.state,
      cvApp: {
        ...this.state.cvApp,
        [e.target.id]: e.target.value,
      },
    });

  render() {
    return (
      <div>
        {/* <Form cvApp={cvApp} /> */}
        <Form1 cvApp={this.state.cvApp} />
        <Overview cvApp={this.state.cvApp} handleChange={this.handleChange} />
      </div>
    );
  }
}
export default App;
