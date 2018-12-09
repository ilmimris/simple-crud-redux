import React, { Component } from 'react';
import RegisterForm from "./RegisterForm";
import ViewData from "./ViewData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterForm />
        <ViewData />
      </div>
    );
  }
}

export default App;
