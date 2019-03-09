import React, { Component } from 'react'
import Header from '../layouts/header'
import landingStyle from '../../stylesheets/home/landingStyle'

const page = { title: "Welcome to GaigoNikki" }

export default class Landing extends Component {
  render() {
    return (
      <div style={landingStyle}>
        <Header title={page.title}/>
      </div>
    )
  }
}