import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponent";
import ErrorBoundary from "./ErrorBoundaryComponent";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
