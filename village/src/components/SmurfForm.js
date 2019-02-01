import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.smurfs)
    this.state = {
      // smurf: blankSmurf,
      name: '',
      age: '',
      height: ''
    };
    
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post(`http://localhost:3333/smurfs`, {name: this.state.name, age: this.state.age, height: this.state.height})
      .then(res => {
        console.log(res)
        this.setState({
          name: res.data.name,
          age: res.data.age,
          height: res.data.height
        });
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}



export default SmurfForm;
