import React from 'react'
import styles from '../../stylesheets/layouts/headerStyle'

const Header = props => {
  return (
    <header>
      <h2 style={styles.headerStyle}>{props.title}</h2>
    </header>
  )
}

export default Header