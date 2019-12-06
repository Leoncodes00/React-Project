import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"

export default class SignUp extends Component {
    onsubmitclickSignIn = (e) =>{
      e.preventDefault()
      let signInEmail2 = document.getElementById("inputEmailSignIn")
      let signInPassword2 = document.getElementById("inputPassword2")
      console.log(signInEmail2.value, signInPassword2.value)
      window.location = "/home"
    }

    onsubmitclickSignUp = (e) =>{
      e.preventDefault()
      let signUpEmail1 = document.getElementById("inputEmailSignUp")
      let signUpPassword1 = document.getElementById("inputPassword1")
       console.log(signUpEmail1.value)
       console.log(signUpPassword1.value)
       fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          email: signUpEmail1.value,
          password: signUpPassword1.value
        })
      })
      window.location = "/home"
    }

    render() {
        return (
          <div className="sign-up-div">
              <div className="container-fluid">
                <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
                <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5" >
                <div className="container">
                <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                <h3 className="login-heading mb-4">
                <div className="sign-up-text">
                Sign-Up
                </div>
                </h3>
                <form onSubmit={this.onsubmitclickSignUp}>
                <div className="form-label-group">
                <input type="email" id="inputEmailSignUp" className="form-control" placeholder="Email address" required autofocus></input>
                <label for="inputEmail"></label>
                </div>
                <div className="form-label-group">
                <input type="password" id="inputPassword1" className="form-control" placeholder="Password" required></input>
                <label for="inputPassword"></label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                <label className="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button type="submit" className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</button>
                <div className="text-center">
                </div>
                </form>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div className="login-div" >
                <div className="container-fluid">
                <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
                <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5" >
                <div className="container">
                <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                <h3 className="login-heading mb-4">
                <div className="sign-up-text">
                Sign-In
                </div>
                </h3>
                <form onSubmit={this.onsubmitclickSignIn}>
                <div className="form-label-group">
                <input type="email" id="inputEmailSignIn" className="form-control" placeholder="Email address" required autofocus></input>
                <label for="inputEmail"></label>
                </div>
                <div className="form-label-group">
                <input type="password" id="inputPassword2" className="form-control" placeholder="Password" required></input>
                <label for="inputPassword"></label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                <label className="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button type="submit" className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign In
                </button>
                <div className="text-center">
                <a className="small" href="#">Forgot password?</a>
                </div>
                </form>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}