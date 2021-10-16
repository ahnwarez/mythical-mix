import React, { useEffect, useState } from 'react'
import { getPeople } from '../apis/people'
import { makeTeams } from '../mythical-mix'
import { motion } from 'framer-motion'

const variants = {
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.5,
      ease: 'easeOut'
    }
  }),
  hidden: {
    scale: 0.5,
    opacity: 0
  }
}

function Shuffled () {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const storageItem = localStorage.getItem('teams')
    const teamsArray = Object.values(JSON.parse(storageItem))

    const people = getPeople()
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
      {people.map((person, i) => (
        <motion.div
          key={person.id}
          className='person-card'
          custom={i}
          initial='hidden'
          animate='visible'
          variants={variants}
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
        </motion.div>
      ))}
    </div>
  </div>
)

export default Shuffled
