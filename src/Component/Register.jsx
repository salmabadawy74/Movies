import React, { Component } from "react";
class Register extends Component {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  validate = () => {
    const { data } = this.state;
    const errors = {};
    if (data.username.trim() === "") errors.username = "username is required";
    if (data.password.trim() === "") errors.password = "Password is Required";
    if (data.name.trim() === "") errors.name = "name is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };
  hundleChange = (e) => {
    const data = { ...this.state.data };
    let { name, value } = e.target;
    data[name] = value;
    this.setState({ data });
  };
  hundleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
  };
  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container mt-3">
          <h1>Register</h1>

          <form>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                value={this.state.data.username}
                name="username"
                placeholder="Enter email"
                onChange={(e) => this.hundleChange(e)}
              ></input>
              {errors.username && (
                <div className="alert alert-danger">{errors.username}</div>
              )}
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                value={this.state.data.password}
                placeholder="Enter your Password"
                onChange={(e) => this.hundleChange(e)}
              ></input>
              {errors.password && (
                <div className="alert alert-danger">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                class="form-control"
                id="name"
                name="name"
                value={this.state.data.name}
                placeholder="Enter your name"
                onChange={(e) => this.hundleChange(e)}
              ></input>
              {errors.name && (
                <div className="alert alert-danger">{errors.name}</div>
              )}
            </div>
            <button
              disabled={this.validate()}
              type="submit"
              class="btn btn-primary"
              onClick={(e) => this.hundleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
