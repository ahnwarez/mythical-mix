import React, { useEffect, useState } from 'react'
import { deletePerson, getPeople } from '../apis/people'
import { motion } from 'framer-motion'
import { peopleVariant } from './animations/animations'

const selected = (flag) => ({
  backgroundColor: flag ? '#a393eb' : '#27296d'
})

function PeopleList (props) {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const data = getPeople()
    setPeople(data.sort((p1, p2) => p1.name.localeCompare(p2.name)).map(p => ({
      ...p,
      selected: false
      // style: { backgroundColor: '#27296d' }
    })))
  }, [])

  function handleAdd () {
    props.history.push('/add')
  }

  function handleDelete () {
    const { id } = people.find(person => person.selected)
    deletePerson(id)
    setPeople([...people.filter(person => person.id !== id)])
  }

  function handlePersonClick (selectedPerson) {
    setPeople(
      people
        .map(person => ({
          ...person,
          selected: person.id === selectedPerson.id ? !person.selected : false
        }))
    )
  }

  return (
    <motion.div className='people-list-view'
      variants={peopleVariant}
      initial='hidden'
      animate='visible'
    >
      {people.map(person => (
        <div
          key={person.id}
          className='flex-row person-card gap-10px'
          onClick={() => handlePersonClick(person)}
          style={selected(person.selected)}
        >
          <img
            width='50px'
            src={person.imageUrl ? person.imageUrl : '/user.svg'}
            className='avatar'
            alt='user avatar' />
          <div key={person.id + 'name'}>
            <strong>{person.name}</strong>
          </div>
        </div>
      ))}
      <div className='add-delete'>
        <div
          className='person-card'
          onClick={handleDelete}
        >
                    🗑️
        </div>
        <div
          className='person-card'
          onClick={handleAdd}
        >
                    ➕
        </div>
      </div>
    </motion.div>
  )
}

export default PeopleList
