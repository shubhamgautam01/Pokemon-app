import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import SignInForm from './components/SignInForm';

const ReduxSignIn = reduxForm({
  form: 'signIn',
})(SignInForm);


class App extends Component {

  
handleSignIn = values => {
  console.log(values);
};

  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' 
          render = {() => (
             <ReduxSignIn 
              handleSubmit={this.handleSignIn}
             /> 
          )}/>
          <Route path='/:post_id' component={Post} />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
