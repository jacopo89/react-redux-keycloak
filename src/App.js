import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Welcome from './components/Welcome';
import Secured from './components/Secured';
import Secured2 from "./components/Secured2";

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div className="container">
            <ul>
              <li><Link to="/public">public component</Link></li>
              <li><Link to="/secured">secured component</Link></li>
              <li><Link to="/2secured">secured component 2</Link></li>
            </ul>
            <Route exact path="/public" component={Welcome} />
            <Route path="/secured" component={Secured} />
            <Route path="/2secured" component={Secured2} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
