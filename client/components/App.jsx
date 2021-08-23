import React from 'react'
import { Route, useHistory } from 'react-router-dom';
import Form from './Form'
import PeopleList from './PeopleList'
import Shuffled from './Shuffled'

function App() {

  const history = useHistory()

  function onSubmit(form) {
    console.log(form);
    localStorage.setItem('teams', JSON.stringify(form))
    history.push('/shuffle')
  }

  return (
    <>
      <h2 className='title'>Mythical Mix</h2>
      <div className="app">
        <Route path='/' exact render={() => <Form onSubmit={onSubmit} />} />
        <Route path='/' exact component={PeopleList} />
        <Route path='/shuffle' exact component={Shuffled} />
      </div>
    </>
  )
}

export default App
