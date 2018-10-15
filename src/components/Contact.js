import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SignInForm from './components/SignInForm';

class Contact extends React.Component{


  onHandleChange(){

  }

  onHandleSubmit(){

  }

  render(){
    return(

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contact Us</h1>
        </header>
        <div className="container">
          <p className="App-intro">
            Contact Form
          </p>
          <SignInForm />
        </div>
      </div>




      // <div className="container">
      //   <h4 className="center">Contact Us</h4>
      //   <form onSubmit={this.onHandleSubmit} className="">
      //     <label>Username</label>
      //     <input onchange={this.onHandleChange} type='text' name="" placeholder="Username"></input>
      //     <label>Email</label>
      //     <input onChange={this.onHandleChange} type='email' name="" placeholder="Email"></input> 
      //     <button className="center" type="Submit">Submit</button>
      //   </form>
      // </div>
    )
  }
}

export default Contact;