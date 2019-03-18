import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  state = {
    areas: []
  }

  componentDidMount() {
    this.fetchAreas()
  }

  fetchAreas() {
    fetch("http://localhost:4000/areas")
    .then(res => res.json())
    .then( json => {
      this.setState({ areas: json })
    })
  }


  render(){
    // console.log("after setting state", this.state.areas);

    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} cleanName={this.cleanName}/>
        <Headquarters areas={this.state.areas} />
      </Segment>
    )
  }
}

export default App;
