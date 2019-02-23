import React, { Component } from 'react'
import Landing from './home/landing'
import Footer from './layouts/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
