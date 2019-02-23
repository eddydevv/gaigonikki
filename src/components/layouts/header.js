import React from 'react'

const headerStyle = {
  fontSize: "2.4em",
  fontFamily: ["Athiti", "sans-serif"],
  textAlign: "center",
  padding: "20%",
  color: "white",
  // backgroundColor: "rgba(30,30,30,0.5)"
}

const Header = props => {
  return (
    <header>
      <h2 style={headerStyle}>{props.title}</h2>
    </header>
  )
}

export default Header