import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  // console.log("showing details for", props.selectedHost);
  // console.log("does this re-render after I click another picture?");

  const renderSomething = (host) => {
    if (host !== null) {
      return (
        <HostInfo
          host={host}
          areas={props.areas}
          changeArea={props.handleChangeArea}
          handleToggle={props.handleToggle}
        />
      )
    } else {
      return (<Image size='medium' src={Images.westworldLogo}/>)
    }
  }

  return(
    <Segment id="details" className="HQComps">
      {renderSomething(props.selectedHost)}
    </Segment>
  )
}

export default Details
