import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }



  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route path = "/smurf-form" render={props => <SmurfForm {...props} smurfs={this.state.smurfs}/>}/>
        {/* <SmurfForm smurfs={this.state.smurfs}/> */}
        <Route exact path = "/" render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>} />
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
