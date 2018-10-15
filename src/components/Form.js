import React,{ Component } from 'react';

class Form extends Component {

    state = {
      Name: null,
      age: null,
      belt: null
    }

    handleChange= (e) =>{
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    
    handleSubmit= (e) =>{
      e.preventDefault();
      console.log(this.state);
    }



    render(){
      return(

        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="Name">Name:</label>
            <input type="text" id="Name" onChange={this.handleChange}></input>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" onChange={this.handleChange}></input>
            <label htmlFor="belt">Belt:</label>
            <input type="text" id="belt" onChange={this.handleChange}></input>
            <button>Submit</button>
          </form>
        </div>
      );
    }

}

export default Form;