import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience"
import React from "react";
import "./FormStyle.css";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <form>
        <GeneralInformation
          cvApp={this.props.cvApp}
          handleChange={this.props.handleChange}
        />
        <EducationalExperience
          cvApp={this.props.cvApp}
          handleChange={this.props.handleChange}
        />
      </form>
    );
  }
}
