import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage, CodingPage } from "./pages/";
// import AppRouter from './App.router'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <AppRouter /> */}
          <Route exact path="/" component={HomePage} />
          <Route path="/:sessionid" component={CodingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
