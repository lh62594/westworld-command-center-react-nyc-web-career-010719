import React from 'react';
import '../stylesheets/Area.css'

const Area = (props) => {
  console.log("this is in Area", props)

  const cleanName = name => {
    name = name.split("_")
    for (var i = 0; i < name.length; i++) {
      name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    // console.log("cleanName", name.join(" "));
    return name.join(" ")
  }

  return (
    <div className='area' id={props.area.name}>
      <h3 className='labels'>{cleanName(props.area.name)}</h3>
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
    </div>
  )

}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
