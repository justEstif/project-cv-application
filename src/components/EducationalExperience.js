export default function EducationalExperience(props) {
  const handleChange = (e) => props.handleChange(e);

  const { schoolName, titleOfStudy, dateOfStudy } = props.cvApp;
  return (
    <fieldset className="fieldset">
      <legend>Educational Experience:</legend>
      <label htmlFor="schoolName">School Name:</label>
      <input
        id="schoolName"
        value={schoolName}
        type="text"
        onChange={handleChange}
      ></input>

      <label htmlFor="titleOfStudy">Title of Study</label>
      <input
        id="titleOfStudy"
        value={titleOfStudy}
        type="text"
        onChange={handleChange}
      ></input>

      <label htmlFor="dateOfStudy">Date of Study</label>
      <input
        id="dateOfStudy"
        type="text"
        value={dateOfStudy}
        onChange={handleChange}
      />
    </fieldset>
  );
}
