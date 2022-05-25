import "./FormStyle.css";
import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      user_email: "",
      phone: "",
      school_name: "",
      title_of_study: "",
      date_of_study: "",
      company_name: "",
      position_title: "",
      duration_of_hire: "",
      main_tasks: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="form_container">
        <form onSubmit={this.handleSubmit}>
          <h1>CV-Application</h1>

          <fieldset className="fieldset g_info">
            <legend>General Information</legend>

            <label htmlFor="first_name">First name:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.first_name}
              type="text"
              id="first_name"
              name="first_name"
            />

            {/* optional middle name, maybe?? */}

            <label htmlFor="last_name">Last name:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.last_name}
              type="text"
              id="last_name"
              name="last_name"
            />

            <label htmlFor="user_email">Email Address:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.user_email}
              type="email"
              id="user_email"
              name="email"
              placeholder="you@example.com"
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.phone}
              type="tel"
              id="phone"
              name="phone"
            />
          </fieldset>

          <fieldset className="fieldset e_exp">
            <legend>Educational Experience</legend>

            {/* maybe it could expand based on some kind of choice */}

            <label htmlFor="school_name">School Name:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.school_name}
              type="text"
              id="school_name"
              name="school_name"
            />

            <label htmlFor="title_of_study">Title of Study:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.title_of_study}
              type="text"
              id="title_of_study"
              name="title_of_study"
            />

            <label htmlFor="date_of_study">Date of Study:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.date_of_study}
              type="date"
              id="date_of_study"
              name="date_of_study"
            />
          </fieldset>

          <fieldset className="fieldset p_exp">
            <legend>Practical Experience</legend>

            <label htmlFor="company_name">Company Name:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.company_name}
              type="text"
              id="company_name"
              name="company_name"
            />

            <label htmlFor="position_title">Postion Title:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.position_title}
              type="text"
              id="position_title"
              name="position_title"
            />

            <label htmlFor="duration_of_hire">Duration of Hire:</label>
            <input
              onChange={this.changeHandler}
              value={this.state.duration_of_hire}
              type="date"
              id="duration_of_hire"
              name="duration_of_hire"
            />

            <label htmlFor="main_tasks">Main Tasks:</label>
            <textarea
              onChange={this.changeHandler}
              value={this.state.main_tasks}
              id="main_tasks"
              name="main_tasks"
              rows="5"
              cols="60"
            ></textarea>
          </fieldset>
          <div>
            {/*this button would change to edit when in edit mode*/}
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
