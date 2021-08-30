import React, { useEffect, useState } from 'react'
import { getPeople } from '../apis/people'
import { makeTeams } from '../mythical-mix'

function Shuffled () {
  const [teams, setTeams] = useState([])

  useEffect(async () => {
    const storageItem = localStorage.getItem('teams')
    const teamsArray = Object.values(JSON.parse(storageItem))

    const people = await getPeople()
    const result = makeTeams(teamsArray, people)
    setTeams(result)
  }, [])

  return (
    <div className='teams'>
      {
        Object.keys(teams).map(teamName => (
          <Team key={teamName} name={teamName} people={teams[teamName]} />
        ))
      }
    </div>
  )
}

const Team = ({ name, people }) => (
  <div className='team'>
    <div key={name} className='team-name'>
      <h2>{name}</h2>
    </div>
    <div className='people-list'>
      {people.map(person => (
        <div
          key={person.id}
          className='person-card'
        >
          <div>
            <img
              width='50px'
              src={person.imageUrl ? person.imageUrl : '/user.svg'}
              className='avatar'
              alt='user avatar' />
          </div>
          <div className='name'>
            {person.name}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Shuffled
