export default function PracticalExperience(props) {
  const handleChange = (e) => props.handleChange(e);

  const { companyName, positionTitle, durationOfHire, mainTasks } = props.cvApp;
  return (
    <fieldset className="fieldset">
      <legend>Practical Experience</legend>

      <label htmlFor="companyName">Company Name:</label>
      <input
        id="companyName"
        type="text"
        value={companyName}
        onChange={handleChange}
      />

      <label htmlFor="positionTitle">Position Title:</label>
      <input
        id="positionTitle"
        type="text"
        value={positionTitle}
        onChange={handleChange}
      />

      <label htmlFor="durationOfHire">Duration of Hire:</label>
      <input
        id="durationOfHire"
        type="text"
        value={durationOfHire}
        onChange={handleChange}
      />
      <label htmlFor="mainTasks">Main Tasks</label>
      <textarea
        id="mainTasks"
        value={mainTasks}
        rows="5"
        cols="60"
        onChange={handleChange}
      />
    </fieldset>
  );
}
