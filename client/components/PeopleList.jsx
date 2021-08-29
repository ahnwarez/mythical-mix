import React, { useEffect, useState } from 'react'
import { deletePerson, getPeople } from '../apis/people'

const selected = (flag) => ({
  backgroundColor: flag ? '#a393eb' : '#5e63b6'
})

function PeopleList (props) {
  const [people, setPeople] = useState([])

  useEffect(async () => {
    const data = await getPeople()
    setPeople(data.sort((p1, p2) => p1.name.localeCompare(p2.name)).map(p => ({
      ...p,
      selected: false,
      style: { backgroundColor: '#a393eb' }
    })))
  }, [])

  function handleAdd () {
    props.history.push('/add')
  }

  async function handleDelete () {
    const { id } = people.find(person => person.selected)
    await deletePerson(id)
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
    <div className='people-list'>
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
          <div className=''>
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
    </div>
  )
}

export default PeopleList
