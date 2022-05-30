import React from "react";

export default class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.id);
    console.log(e.target.value);
    this.props.handleChange(e);
  }
  render() {
    const { schoolName, titleOfStudy, dateOfStudy } = this.props.cvApp;
    return (
      <fieldset className="fieldset">
        <legend>Educational Experience:</legend>
        <label htmlFor="schoolName">School Name:</label>
        <input
          id="schoolName"
          value={schoolName}
          type="text"
          onChange={this.handleChange}
        ></input>

        <label htmlFor="titleOfStudy">Title of Study</label>
        <input
          id="titleOfStudy"
          value={titleOfStudy}
          type="text"
          onChange={this.handleChange}
        ></input>

        <label htmlFor="dateOfStudy">Date of Study</label>
        <input
          id="dateOfStudy"
          type="text"
          value={dateOfStudy}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
