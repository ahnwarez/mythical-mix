import React, { useEffect, useState } from 'react'
import { deletePerson, getPeople } from '../apis/people'

const selected = (flag) => ({
  backgroundColor: flag ? '#a393eb' : '#5e63b6'
})

function PeopleList (props) {
  const [people, setPeople] = useState([])

  useEffect(async () => {
    const people = await getPeople()
    console.log(people)
    setPeople(people.sort((p1, p2) => p2.name.length - p1.name.length).map(p => ({
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
    <div className='flex-row gap-10px'>
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
      <div className='flex-row gap-10px'>
        <div
          className='action'
          onClick={handleDelete}
        >
                    🗑️
        </div>
        <div
          className='action'
          onClick={handleAdd}
        >
                    ➕
        </div>
      </div>
    </div>
  )
}

export default PeopleList
