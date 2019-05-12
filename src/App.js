import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyHome from "./pages/myHome";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={MyHome} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
