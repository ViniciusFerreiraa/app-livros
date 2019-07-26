import React, { Component } from "react";
import api from '../../Services/api'
import { Link, withRouter } from "react-router-dom";

class Admin extends Component {
  state = {
    title: "",
    description: "",
    rented: false,
    rentedBy: "seller",
    error: ""
  };

  handleRegister = async e => {
    e.preventDefault();
    const { title, description, rented, rentedBy} = this.state;
    if (!title || !description) {
      this.setState({ error: "Fill in all data to register" });
    } else {
      try {
        await api.post("/books", { title, description, rented, rentedBy });
        document.querySelector("form.form").reset();
      } catch (err) {
        console.log(err);
        this.setState({ error: "There was an error registering your book. T.T" });
      }
    }
  };

  render() {
    return (
      <div className="box-full">
        <div className="box">
          <form onSubmit={this.handleRegister} className="form">
            <span className="title">Register Book</span>
            {this.state.error && <p className="error">{this.state.error}</p>}
            <input
              type="text"
              placeholder="Title"
              onChange={e => this.setState({ title: e.target.value })}
            />
            <input
              type="text"
              placeholder="description"
              onChange={e => this.setState({ description: e.target.value })}
            />
            <button type="submit" className="btn submit">Register</button>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <Link to="/books" className="btn link">Books List</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Admin);