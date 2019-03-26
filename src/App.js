import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundaryComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import History from "./components/Display/MenuLink/HistoryComponent";
import Main from "./components/MainComponent";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <ErrorBoundary>
          <Router>
            <Switch>
              <Main exact path="/main" component={Main} />

              <Route path="/history" component={History} />
              <Redirect to="/main" />
            </Switch>
          </Router>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
