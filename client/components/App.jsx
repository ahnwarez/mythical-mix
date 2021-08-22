import React from 'react'
import Form from './Form'
import PeopleList from './PeopleList'
import Shuffled from './Shuffled'

import { Route } from 'react-router-dom';
function App() {

  return (
    <>
      <h2 className='title'>Mythical Mix</h2>
      <div className="app">
        <Route path='/' exact component={Form} />
        <Route path='/' exact component={PeopleList} />
        <Route path='/shuffle' exact component={Shuffled} />
      </div>
    </>
  )
}

export default App
