import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import PeopleList from './PeopleList'

function App() {

  return (
    <div className="app">
      <h2 className='title'>Mythical Mix</h2>
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
