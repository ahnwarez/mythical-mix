import React from 'react'
import { Route, useHistory, useLocation, Switch } from 'react-router-dom'
import TeamsForm from './TeamsForm'
import PeopleList from './PeopleList'
import Shuffled from './Shuffled'
import AddPerson from './AddPerson'

function App () {
  const history = useHistory()
  const location = useLocation()

  function onSubmit (form) {
    localStorage.setItem('teams', JSON.stringify(form))
    history.push('/shuffle')
  }

  function handleOnClick () {
    history.push('/')
  }

  return (
    <div className='app'>
      <header className='header'>
        <h1 onClick={handleOnClick}>Mythical Mix</h1>
        <p className='description'>The awesome Team Generator tool</p>
      </header>
      <main className="main">
        <Switch location={location} key={location.key}>
          <Route exact path='/'>
            <TeamsForm onSubmit={onSubmit} />
            <PeopleList history={history} />
          </Route>
          <Route exact path='/add'>
            <AddPerson history={history} />
          </Route>
          <Route exact path='/shuffle'>
            <Shuffled />
          </Route>
        </Switch>
      </main>
      <footer>
        @EnpiralDevAcademy
      </footer>
    </div>
  )
}

export default App
