import "./FormStyle.css";
import React from "react";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Hello, world!");
  }
  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <h1>CV-Application</h1>
        <fieldset className="fieldset g_info">
          <legend>General Information</legend>

          <label htmlFor="first_name">First name:</label>
          <input type="text" id="first_name" name="first_name" />

          {/* optional middle name, maybe?? */}

          <label htmlFor="last_name">Last name:</label>
          <input type="text" id="last_name" name="last_name" />

          <label htmlFor="user_email">Email Address:</label>
          <input
            type="email"
            id="user_email"
            name="email"
            placeholder="you@example.com"
          />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />
        </fieldset>

        <fieldset className="fieldset e_exp">
          <legend>Educational Experience</legend>

          {/* maybe it could expand based on some kind of choice */}

          <label htmlFor="school_name">School Name:</label>
          <input type="text" id="school_name" name="school_name" />

          <label htmlFor="title_of_study">Title of Study:</label>
          <input type="text" id="title_of_study" name="title_of_study" />

          <label htmlFor="date_of_study">Date of Study:</label>
          <input type="date" id="date_of_study" name="date_of_study" />
        </fieldset>

        <fieldset className="fieldset p_exp">
          <legend>Practical Experience</legend>

          <label htmlFor="company_name">Company Name:</label>
          <input type="text" id="company_name" name="company_name" />

          <label htmlFor="position_title">Postion Title:</label>
          <input type="text" id="position_title" name="position_title" />

          <label htmlFor="duration_of_hire">Duration of Hire:</label>
          <input type="date" id="duration_of_hire" name="duration_of_hire" />

          <label htmlFor="main_tasks">Main Tasks:</label>
          <textarea
            id="main_tasks"
            name="main_tasks"
            rows="5"
            cols="60"
          ></textarea>
        </fieldset>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;