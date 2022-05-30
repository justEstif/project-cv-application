import React, { Component } from "react";
import Form from "./components/Form";
import Overview from "./components/Overview";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvApp: {
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
        <Form cvApp={this.state.cvApp} handleChange={this.handleChange} />
        <Overview cvApp={this.state.cvApp} handleChange={this.handleChange} />
      </div>
    );
  }
}
export default App;
