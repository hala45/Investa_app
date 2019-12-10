import React from 'react';

function Login(props){
    return(
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
      <div className = " my-2">
     <form className="d-flex justify-content-center">
      <div className="form  text-center  my-4 " >
        
          <div >
            <label class="mr-sm-2 h2" for="uname"> Username </label><br/>
            <input type="text" class="form-controll" id="uname" aria-describedly="emailHelp" placeholder="Enter Username"></input>
          </div>
       <br/>
          <div >
            <label class="mr-sm-2 h2" for="psw"> Password </label><br/>
            <input type="text" class="form-controll" id="psw" placeholder="Password"></input>
          </div>
          
         
       <button type="submit" class="btn btn-dark px-2 ">Take Me In</button>
      </div>
     </form>

      
     </div>

    )
}

export default Login;