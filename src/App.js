import React from 'react';
import './App.css';
import Typing from './components/Typing';
import Speed from './components/Speed';
import GetText from './components/GetText'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Signup from "./components/user/signup"

const initialState = {
  text: GetText(),
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
  hamsterDance: [
    'https://www.jibjab.com/assets/images/hamster-aeaf34b8a130ab5a75fd65e769cf5e67.gif'
  ],
}

class App extends React.Component {

  state = initialState;

  onRestart = () => {
    this.setState(initialState)
  }

  onUserInputChange = (e) => {
    const v = e.target.value;
    this.setTimer();
    this.onFinish(v)
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v)
    })
  }

  onFinish(userInput) {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      })
    }
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((s,i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({started: true});
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      }, 1000)
    }
  }

  removeHamster = () => {
    this.setState({
      hamsterDance: this.state.hamsterDance.splice(1, 0)
    })
  }

  render() {
    return (
      <div className="pos-f-t">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="/home">Type & Hamsters</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/resources">Resources</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">Sign out</a>
      </li>
    </ul>
  </div>
</nav>
<div className = "p-3 mb-2 bg-warning text-dark" id="yellow-background"></div>
      <div className="background-color" >
      <div className="container mt-5 mb-5" >
        <div className="row">
          <div className="col-md-6 offset-md-3" >
            <Typing text={this.state.text} userInput={this.state.userInput} bgcolor='blue'/>
            <textarea
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              className="form-control mb-3"
              placeholder="Start typing..."
              readOnly={this.state.finished}
            ></textarea>
            <Speed sec={this.state.sec} symbols={this.state.symbols}/>
            <div className="text-right">
              <button className="btn btn-light" onClick={this.onRestart}>Restart</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <img className="hamster-dance" src={this.state.hamsterDance[0]} onClick={this.removeHamster} />
      </div>
    );
  }
}

export default App;
