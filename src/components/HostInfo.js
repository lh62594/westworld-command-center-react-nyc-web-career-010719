import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  state = {
    options: []
  }

  componentDidMount() {
    // console.log("showing areas after mounting components", this.props.areas)
    let options = this.props.areas.map( area => {
      return { key: area.name, text: this.cleanName(area.name), value: area.name}
    })

    this.setState({ options })
  }

  cleanName(name) {
    name = name.split("_")
    for (var i = 0; i < name.length; i++) {
      name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }

    return name.join(" ")
  }

  toggle = () => {
    console.log("The radio button fired");
  }

  render(){

    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.firstName + " " + this.props.host.lastName} |
                { this.props.host.gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}

              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={ () => this.props.handleToggle(this.props.host.id)}

                  label={"Active"}

                  checked={this.props.host.active}

                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:

              <Dropdown
                onChange={ (e) => this.props.changeArea(e, this.props.host.id)}
                value={this.props.host.area}
                options={this.state.options}
                selection
              />

            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo

// state = {
//   options: [{key: "some_area" text: "Some Area" value: "some_area"}, {key: "another_area" text: "Another Area" value: "another_area"}],
//   value: "some_area",
//   // This state is just to show how the dropdown component works.
//   // Options have to be formatted in this way (array of objects with keys of: key, text, value)
//   // Value has to match the value in the object to render the right text.
//
//   // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
// }

// { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
// {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
// {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
