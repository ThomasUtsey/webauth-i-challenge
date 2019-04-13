import React, { Component } from 'react';

class Register extends Component {

    state = {
    
      user:'',
      password:'',
      confirm:''
  
}
handleChange (evt) {
  // check it out: we get the evt.target.name (which will be either "email" or "password")
  // and use it to target the key on our `state` object with the same name, using bracket syntax
  this.setState({ [evt.target.name]: evt.target.value });
}
  
  render() {
    return (
      
      <div className="App">
      {console.log(this.state)}
      <h2>Register</h2>
      <form>
      <div><input type='text' placeholder='Username' name ='user' onChange={this.handleChange}></input></div>
      <div><input type='text' placeholder='Password' name ='password' onChange={this.handleChange}></input></div>
      <div><input type='text' placeholder='Confirm Password' name ='confirm' onChange={this.handleChange} ></input></div>
      <button>Register</button>
      </form>
    
      </div>
    );
  }
}

export default Register;
