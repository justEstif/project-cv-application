import React, { Component } from "react";
import Form from "./components/Form";
import Overview from "./components/Overview";
export default class App extends Component {
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
      classes: {
        formClass: "",
        overViewClass: "hide",
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

  handleSubmit = (e) => {
    if (this.state.classes.overViewClass) {
      this.setState({
        ...this.state,
        classes: {
          formClass: "hide",
          overViewClass: "",
        },
      });
    } else {
      this.setState({
        ...this.state,
        classes: {
          formClass: "",
          overViewClass: "hide",
        },
      });
    }
  };
  render() {
    return (
      <div className="container">
        <Form
          cvApp={this.state.cvApp}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formClass={this.state.classes.formClass}
        />
        <Overview
          cvApp={this.state.cvApp}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          overViewClass={this.state.classes.overViewClass}
        />
      </div>
    );
  }
}
