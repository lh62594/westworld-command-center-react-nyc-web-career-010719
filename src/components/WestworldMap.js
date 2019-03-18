import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {
  // console.log("in WestworldMap, props:", props.areas)

  return (
    <Segment id="map" >
      { props.areas.map( area => {
        return <Area
          area={area}
          key={area.id}
        />
      })}
    </Segment>
  )
}

export default WestworldMap
