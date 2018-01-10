import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventInfo from './eventInfo';
import Login from './login'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route exact path='/' component={EventInfo}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
