import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import './signup.css';

class Signup extends Component {

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
        .post('http://localhost:8080/registration', credentials)
        .then(() => console.log('credentials Created'))
        .catch(err => {
          console.error(err);
      }); 
  };

  render(){
    return(
<<<<<<< HEAD
      <div id="outerContainer" className=" d-flex justify-content-center border border-primary my-2 ">
        <div id="InnerContainer" className=" border border-primary w-50">
      <h5 id="SignUpHeader" >New User? Sign up right here!</h5>
      <form className=" d-flex justify-content-center border border-primary " onSubmit={this.handleSubmit}>
      <div class=" text-center justify-content-center my-4  "   >
          <div class="form-group">
            <label class="mr-sm-2 h2" for="uname"> Username </label><br/>
            <input type="text" class="form-controll" name="username" id="uname" placeholder="John Smith" onChange={this.handleInputChange}></input>
=======
        /*<form className="container">
            <h1>New User? Sign up right here!</h1>
        <label for="uname"><b>Username: </b></label>
        <input type="text" placeholder="Enter Username" name="username" required/>
        <br />
        <label for="psw"><b>Password: </b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
        <br />
        <label for="psw"><b>Reenter Password: </b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
        <br />
        <button type="submit"> Sign Me Up! </button>
      </form> */
      <div id="outer" className=" border border-primary my-2">
      <h1 className=" text-center my-2">New User? Sign up right here!</h1>
      <div className = "border border-info "></div>
      <form className="border d-flex justify-content-center ">
      <div class="form-group  text-center justify-content-center my-4 border border-warning "   >
          <div class="form-group ">
            <label class="mr-sm-2 " for="uname"> Username </label><br/>
            <input type="text" class="form-controll" id="uname" aria-describedly="emailHelp" placeholder="Enter Username"></input>
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
          </div>
       <br/>
          <div class="form-group ">
            <label class="mr-sm-2 h2" for="psw"> Password </label> <br/>
            <input type="text" class="form-controll" name="password" id="psw" placeholder="****************" onChange={this.handleInputChange}></input>
          </div>
          <div class="form-group ">
            <label class="mr-sm-2 h2" for="psw"> Re-enter Password </label> <br/>
            <input type="text" class="form-controll" name="password" id="psw" placeholder="****************" onChange={this.handleInputChange}></input>
          </div>
         
       <button type="submit" class="btn btn-light btn-outline-light" >Sign Me Up</button>
       <NavLink className="nav-link active" to="login">Login</NavLink>
      </div>
     </form>
<<<<<<< HEAD
     </div>
    </div>

     
=======
    </div>
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
    )
  }
}

export default Signup;