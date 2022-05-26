import React from "react";

// class Overview1 extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   printProps() {
//     console.log(this.props)
//   }
//   render() {
//     return <div>{this.printProps}</div>;
//   }
// }

export default function Overview(props) {
  const { firstName, lastName, userEmail, phone } = props.cvApp
  const { schoolName, titleOfStudy, dateOfStudy } = props.cvApp
  const { companyName, positionTitle, durationOfHire, mainTasks } =
    props.cvApp
  return (
    <div>
      <p>
        {firstName}, {lastName}, {userEmail}, {phone}
      </p>
      <p>
        {schoolName}, {titleOfStudy}, {dateOfStudy}
      </p>
      <p>
        {companyName}, {positionTitle}, {durationOfHire}, {mainTasks}
      </p>
    </div>
  );
}
