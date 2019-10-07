import React from 'react';
import { BrowserRouter as Router, Route, Redirect, } from "react-router-dom";

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
