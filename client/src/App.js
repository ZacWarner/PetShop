import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, } from "react-router-dom";
import Landing from './pages/landing';
class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" component={Landing} />
      </Router>
    )
  }
}

export default App;
