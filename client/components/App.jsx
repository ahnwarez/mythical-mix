import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import PeopleList from './PeopleList'

function App() {

  return (
    <div className="app">
      <Home />
      <PeopleList />
    </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    results: globalState.people
  }
}

export default connect(mapStateToProps)(App)
