import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'

function App(props) {

  return (
    <>
      <Home />
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    results: globalState.people
  }
}

export default connect(mapStateToProps)(App)
