import React from 'react';
import './Signup.css';
function Signup(){
    return(
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
      <div id="outerContainer" className=" d-flex justify-content-center border border-primary my-2 ">
        <div id="InnerContainer" className=" border border-primary w-50">
      <h1 id="SignUpHeader" className=" text-center my-2 h2">New User? Sign up right here!</h1>
      <form className=" d-flex justify-content-center border border-primary ">
      <div class=" text-center justify-content-center my-4  "   >
          <div class="form-group">
            <label class="mr-sm-2 h2" for="uname"> Username </label><br/>
            <input type="text" class="form-controll" id="uname" aria-describedly="emailHelp" placeholder="John Smith"></input>
          </div>
       <br/>
          <div class="form-group ">
            <label class="mr-sm-2 h2" for="psw"> Password </label> <br/>
            <input type="text" class="form-controll" id="psw" placeholder="****************"></input>
          </div>
          <div class="form-group ">
            <label class="mr-sm-2" for="psw"> Re-enter Password </label> <br/>
            <input type="text" class="form-controll" id="psw" placeholder="****************"></input>
          </div>
         
       <button type="submit" class="btn btn-light btn-outline-light" >Sign Me Up</button>
      </div>
     </form>
     </div>
    </div>
    )
}

export default Signup;