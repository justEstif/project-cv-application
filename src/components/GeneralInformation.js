export default function GeneralInformation(props) {
  const handleChange = (e) => props.handleChange(e);

  const { firstName, lastName, email, phone } = props.cvApp;

  return (
    <fieldset className="fieldset">
      <legend>General Information</legend>
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        value={firstName}
        type="text"
        onChange={handleChange}
      ></input>

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        value={lastName}
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="email">Email Address:</label>
      <input
        id="email"
        value={email}
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="phone">Phone Number:</label>
      <input
        id="phone"
        value={phone}
        type="tel"
        onChange={handleChange}
      />
    </fieldset>
  );
}

