import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  // console.log("Host!!!", props.host);

  return(

    <Card
      className={props.host.className}
      onClick={ () => props.handleSelect(props.host.id)}
      image={props.host.imageUrl}
      raised
    />

  )
}

export default Host

// {/* NOTE: The className "host selected" renders a different style than simply "host". */}
// { /* On Click what? */}
// {/* I wonder what goes here...*/}
// <a className="ui raised card host">
