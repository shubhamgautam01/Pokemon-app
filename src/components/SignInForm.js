import React from 'react';

let SignInForm = props => {
  const { handleSubmit } = props;

  return  (
  <div>
    <h3 className="Container center">SignUp Form</h3>
    <br/><br/>
    <form onSubmit={handleSubmit} className="form">
    <div className="container field">
      <div className="control">
        <label className="label">First Name</label>
        <input className="input" name="firstName" component="input" type="text" placeholder="First Name"/>
      </div>
    </div>

    <div className="container field">
      <div className="control">
        <label className="label">Last Name</label>
        <input className="input" name="lastName" component="input" type="text" placeholder="Last Name"/>
      </div>
    </div>

    <div className="container field">
      <div className="control">
        <label className="label">Email</label>
        <input className="input" name="email" component="input" type="email" placeholder="Email Address"/>
      </div>
    </div>

    <div className="container field">
      <div className="control">
        <label className="label">Proficiency</label>
        <div className="select">
          <select className="input" name="proficiency" component="select">
            <option />
            <option value="beginner">Beginner Dev</option>
            <option value="intermediate">Intermediate Dev</option>
            <option value="expert">Expert Dev</option>
          </select>
        </div>
      </div>
    </div>

    <div className="container field">
      <div className="control">
        <label className="label">Age</label>
        <input className="input" name="age" component="input" type="number" placeholder="Age"/>
      </div>
    </div>

    <div className="container field">
      <div className="control">
        <label className="label">Gender</label>
        <select className="input" name="gender" component="select">
            <option value="male">Male </option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
      </div>
    </div>

    <div className="container field">
      <div className="control">
        <label className="checkbox">
          <input name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
          Save Details
        </label>
      </div>
    </div>

    <div className="container field">
      <div className="control">
        <label className="label">Message</label>
        <input className="textarea" name="message" component="textarea" />
      </div>
    </div>

    <div className="container field">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>

  </form>;

  </div>
  
  )
};
export default SignInForm;