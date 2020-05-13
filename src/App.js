import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Child from "./components/Child";
import Navbar from "./components/Navbar";


class App extends Component {

  state = {toggle: false};

  render() {

    return(
      <div className="parent">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path={"/todo"} component={Body} />
            <Route path={"/child"} component={Child} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default React.memo(App);
