import React from 'react'
import { Route, useHistory } from 'react-router-dom';
import TeamsForm from './TeamsForm'
import PeopleList from './PeopleList'
import Shuffled from './Shuffled'
import AddPerson from './AddPerson';
import DeletePerson from './DeletePerson';

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
        <Route path='/' exact render={() => <TeamsForm onSubmit={onSubmit} />} />
        <Route path='/' exact component={PeopleList} />
        <Route path='/add' exact component={AddPerson} />
        <Route path='/delete' exact component={DeletePerson} />
        <Route path='/shuffle' exact component={Shuffled} />
      </div>
    </>
  )
}

export default App
