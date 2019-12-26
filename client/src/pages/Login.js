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
<<<<<<< HEAD
      <div>
        <div className = " my-2">
            <form className="d-flex justify-content-center">
              <div className="form  text-center  my-4 " >
                <div >
                  <label class="mr-sm-2 h2" for="uname"> Username </label><br/>
                  <input type="text" class="form-controll" id="uname" placeholder="Enter Username"></input>
                </div>
                <br/>
                <div >
                  <label class="mr-sm-2 h2" for="psw"> Password </label><br/>
                  <input type="text" class="form-controll" id="psw" placeholder="Password"></input>
                </div>
                <button type="submit" class="btn btn-dark px-2 ">Take Me In</button>
                <NavLink className="nav-link active" to="signup">Sign up</NavLink>
              </div>
            </form>
        </div>
      </div>
=======
      /*<div id = "JSXmustReturnDIV" >
        <form className="container" className="d-flex align-items-center">
        <h1>Login investa team</h1>
    <label for="uname"><b>Username</b></label>
    <input  type="text" placeholder="Enter Username" name="username" id ="uname" required/>
    <label for="psw"><span className = "padded"><b>Password</b></span></label>
    <input type="password" placeholder="Enter Password" name="pswrd" id="psw" required/>

    <button type="submit"> Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" />
    </label>
  </form>   
  </div> */
      <div className = "border border-secondary my-2">
     <form className="border d-flex justify-content-center">
      <div className="form  text-center  my-4 border border-warning" >
        
          <div >
            <label class="mr-sm-2 " for="uname"> Username </label><br/>
            <input type="text" class="form-controll" id="uname" aria-describedly="emailHelp" placeholder="Enter Username"></input>
          </div>
       <br/>
          <div >
            <label class="mr-sm-2" for="psw"> Password </label><br/>
            <input type="text" class="form-controll" id="psw" placeholder="Password"></input>
          </div>
          <div class="my-2" >
            <input type="checkbox" class="form-check-input " id="Check1"></input>
            <label class="form-check-label " for="Check1">Check me out</label> <br/>
          </div>
         
       <button type="submit" class="btn btn-dark px-2 ">Submit</button>
      </div>
     </form>

      
     </div>

>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
    )
  }
}

export default Login;