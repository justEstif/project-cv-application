import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

import React from "react";
import "./FormStyle.css";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted")
    this.props.handleSubmit(e)
  }
  render() {
    const { formClass } = this.props
    return (
      <form onSubmit={this.handleSubmit} className={`${formClass}`}>
        <h1>CV Application</h1>
        <GeneralInformation
          cvApp={this.props.cvApp}
          handleChange={this.props.handleChange}
        />
        <EducationalExperience
          cvApp={this.props.cvApp}
          handleChange={this.props.handleChange}
        />
        <PracticalExperience
          cvApp={this.props.cvApp}
          handleChange={this.props.handleChange}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    );
  }
}
