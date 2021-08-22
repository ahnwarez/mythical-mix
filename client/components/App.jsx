import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import PeopleList from './PeopleList'

function App() {

  return (
    <>
      <h2 className='title'>Mythical Mix</h2>
      <div className="app">
        <Form />
        <PeopleList />
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    results: globalState.people
  }
}

export default connect(mapStateToProps)(App)
