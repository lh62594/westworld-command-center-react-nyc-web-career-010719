import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  state = {
    hosts: [],
    selectedHost: null,
    logButton: "ACTIVATE ALL"
  }

  componentDidMount() {
    this.fetchHosts()
  }

  fetchHosts() {
    fetch("http://localhost:4000/hosts")
    .then(res => res.json())
    .then( json => {

      let hosts = json.map( host => {
        return {...host, className: "ui raised card host" }
      })

      this.setState({ hosts })
    })
  }


  /***************************************
        HANDLE EVENT LISTENERS
  ***************************************/

  handleSelectHost = (id) => {
    // sets the class for the selected host
    let newHosts = this.state.hosts.map( host => {
      if (host.id === id) {
        return {...host, className: "ui raised card host selected"}
      } else {
        return {...host, className: "ui raised card host" }
      }
    })

    // find the object of the selected host
    let host = this.state.hosts.find( host => host.id === id)

    // console.log("after mapping, this is selected host", host);
    this.setState({
      hosts: newHosts,
      selectedHost: host
    })

  }

  handleChangeArea = (e, id) => {
    let newHosts = this.state.hosts.map( host => {
      if (host.id === id) {
        return {...host, area: this.reverseName(e.target.innerText)}
      } else {
        return host
      }
    })

    let host = newHosts.find( host => host.id === id)

    this.setState({ hosts: newHosts, selectedHost: host })

    // console.log("handleChangeArea", newHosts, "selected host", this.state.selectedHost)
    // console.log("this will change the area", this.reverseName(e.target.innerText), id);
  }

  handleToggle = (id) => {
    // let newHost = {...host, active: !host.active}
    // console.log("toggle clicked", host, newHost)
    let newHosts = this.state.hosts.map( host => {
      if (host.id === id) {
        return {...host, active: !host.active}
      } else {
        return host
      }
    })

    let host = newHosts.find( host => host.id === id)

    // console.log("new hosts", newHosts, "host", host);
    this.setState({ hosts: newHosts, selectedHost: host })
  }

  handleLogButton = () => {
    if (this.state.logButton === "ACTIVATE ALL") {
      let newHosts = this.state.hosts.map( host => {
        return {...host, active: true}
      })

      let host = {...this.state.selectedHost, active: true}

      this.setState({ logButton: "DECOMMISSION ALL", hosts: newHosts, selectedHost: host })

    } else {
      let newHosts = this.state.hosts.map( host => {
        return {...host, active: false}
      })

      let host = {...this.state.selectedHost, active: false}

      this.setState({ logButton: "ACTIVATE ALL", hosts: newHosts, selectedHost: host })
    }
    // console.log("does this work");
  }


  /***************************************
            HELPER FUNCTIONS
  ***************************************/
  reverseName(name) {
    return name.split(" ").join("_").toLowerCase()
  }

  /***************************************
                  RENDER
  ***************************************/

  render(){
    // console.log("in HQ, set state", this.state.hosts, this.state.selectedHost)
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
        {/* Something goes here.... */}
          <ColdStorage
            hosts={this.state.hosts}
            handleSelect={this.handleSelectHost}
          />
        </Grid.Column>

        <Grid.Column width={5}>
          <Details
            selectedHost={this.state.selectedHost}
            areas={this.props.areas}
            handleChangeArea={this.handleChangeArea}
            handleToggle={this.handleToggle}
          />
        </Grid.Column>

        <Grid.Column width={3}>
          <LogPanel
            button={this.state.logButton}
            handleLogButton={this.handleLogButton}
          />
          {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        </Grid.Column>

      </Grid>
    )
  }
}

export default Headquarters;
