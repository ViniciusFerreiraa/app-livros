import React, { Component } from "react";
import api from '../../Services/api'
import { Link, withRouter } from "react-router-dom";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Fill in all data to register" });
    } else {
      try {
        await api.post("/user", { username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "There was an error registering your account. T.T" });
      }
    }
  };

  render() {
    return (
      <div className="box-full">
        <div className="box">
          <form onSubmit={this.handleSignUp} className="register">
            <span className="title">Register</span>
            {this.state.error && <p className="error">{this.state.error}</p>}
            <input
              type="text"
              placeholder="Name"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              type="email"
              placeholder="E-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Pass"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit" className="btn submit">Register</button>
            
            <br />
            <br />
            <hr />
            <br />
            <br />
            <Link to="/" className="btn link">Login</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);