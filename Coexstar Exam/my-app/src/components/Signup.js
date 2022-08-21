import "../App.css";
import React from "react";
import { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Successful from "./Successful";
import { createBrowserHistory } from "history";

class Signup extends Component {


  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      full_name: "",
      email: "",
      password: "",
    };
  }

  onChangeName(e) {
    this.setState({
      full_name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      full_name: this.state.full_name,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('http://localhost/php-react/coexstar-register/insert-user.php', obj)
      .then(function(response){
        history.push('successful');
        document.location.reload()
      })
      .catch((error) => {
        console.log(error.response);
      });
      history.push('/successful')
    console.log(obj);
  }
  render() {
    return (
      <form>
        <div className="signup-page">
          <div className="signup-intro">
            <h1 className="signup-title">Start your free trial</h1>
            <p className="signup-paragraph">
              Lorem Ipsum is simply a dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <br />
          <div className="signup-form">
            <label htmlFor="full_name">Name</label>
            <input
              type="text"
              name="full_name"
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.name}
              onChange={this.onChangeEmail}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              minLength={8}
              value={this.state.name}
              onChange={this.onChangePassword}
            />
            <input
              type="submit"
              className="signup-submit"
              value="Sign up"
              onClick={this.onSubmit}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;

export const history = createBrowserHistory();