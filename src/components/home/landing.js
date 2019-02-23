import React, { Component } from 'react'
import Header from '../layouts/header'

const page = { title: "Welcome to GaigoNikki" }

const landingStyle = {
  // backgroundImage: 'url("https://images.alphacoders.com/716/716962.jpg")',
  // backgroundColor: "rgba(122,232,12,0.3)",
  // backgroundSize: "cover"
}

export default class Landing extends Component {
  render() {
    return (
      <div style={landingStyle}>
        <Header title={page.title}/>
      </div>
    )
  }
}