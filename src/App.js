import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundaryComponent";
import { BrowserRouter as Router } from "react-router-dom";
import Calculator from "./components/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <ErrorBoundary>
          <Router>
            <Calculator />
          </Router>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
