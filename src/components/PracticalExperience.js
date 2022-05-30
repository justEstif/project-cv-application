import React from 'react'

export default class PracticalExperience extends React.Component {
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
    const { companyName, positionTitle, durationOfHire, mainTasks } =
      this.props.cvApp;

    return (
      <fieldset className="fieldset">
        <legend>Practical Experience</legend>

        <label htmlFor="companyName">Company Name:</label>
        <input
          id="companyName"
          type="text"
          value={companyName}
          onChange={this.handleChange}
        />

        <label htmlFor="positionTitle">Position Title:</label>
        <input
          id="positionTitle"
          type="text"
          value={positionTitle}
          onChange={this.handleChange}
        />

        <label htmlFor="durationOfHire">Position Title:</label>
        <input
          id="durationOfHire"
          type="text"
          value={durationOfHire}
          onChange={this.handleChange}
        />
        <label htmlFor="mainTasks">Main Tasks</label>
        <textarea
          id="mainTasks"
          value={mainTasks}
          rows="5"
          cols="60"
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
