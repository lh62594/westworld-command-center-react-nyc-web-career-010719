import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  // console.log("HostList", props.hosts)

  return(
    <Card.Group itemsPerRow={6}>
      {/* What do you think, partner? */}
      { props.hosts.map( host => {
        return <Host
          host={host}
          key={host.id}
          handleSelect={props.handleSelect}
        />
      })}
    </Card.Group>
  )
}

export default HostList
