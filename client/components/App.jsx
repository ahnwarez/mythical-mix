import React from 'react'
import { Route, useHistory } from 'react-router-dom';
import TeamsForm from './TeamsForm'
import PeopleList from './PeopleList'
import Shuffled from './Shuffled'
import AddPerson from './AddPerson';

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
      <div className="details">
        <Route path='/' exact render={() => <TeamsForm onSubmit={onSubmit} />} />
        <Route path='/' exact component={PeopleList} />
        <Route path='/add' exact component={AddPerson} />
        <Route path='/shuffle' exact component={Shuffled} />
      </div>
    </>
  )
}

export default App
