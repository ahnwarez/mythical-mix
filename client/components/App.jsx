import React from 'react'
import { Link, Route, useHistory } from 'react-router-dom';
import Form from './Form'
import PeopleList from './PeopleList'
import Shuffled from './Shuffled'

function App() {

  const history = useHistory()

  function onSubmit(form) {
    localStorage.setItem('teams', JSON.stringify(form))
    history.push('/shuffle')
  }

  function handleOnClick() {
    history.push('/')
  }

  return (
    <>
      <h2 className='title' onClick={handleOnClick}>Mythical Mix</h2>
      <div className="app">
        <Route path='/' exact render={() => <Form onSubmit={onSubmit} />} />
        <Route path='/' exact component={PeopleList} />
        <Route path='/shuffle' exact component={Shuffled} />
      </div>
    </>
  )
}

export default App
