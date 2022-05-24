import React, { Component } from "react";
import Form from "./components/Form";
class App extends Component {
  constructor() {
    super();

    this.state = {
      inputs: []
    };
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
export default App;
