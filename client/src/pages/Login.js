import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

  state = {
    username:"",
    password:""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    const credentials = {
      username,
      password
    };

      axios
        .post('http://localhost:8080/login', credentials)
        .then(() => console.log('credentials Created'))
        .catch(err => {
          console.error(err);
      }); 
  };

  render(){
    return(
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '50%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="username"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '50%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="password"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Login
              </button>
            </div>
          </form>
          <div>
            <NavLink className="nav-link active" to="login">Login</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;