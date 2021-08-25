import React, { useEffect, useState } from 'react'
import { deletePerson, getPeople } from '../apis/people'

const selected = (flag) => ({
    borderColor: flag ? 'red' : 'rgb(37, 124, 255)',
    borderWidth: flag ? 'medium' : 'thin'
})

function PeopleList(props) {
    const [people, setPeople] = useState([])

    useEffect(async () => {
        const people = await getPeople()
        setPeople(people.sort(p => p.name).map(p => ({
            ...p,
            selected: false,
            style: { borderColor: 'rgb(37, 124, 255)' }
        })))
    }, [])

    function handleAdd() {
        props.history.push('/add')
    }

    async function handleDelete() {
        const { id } = people.find(person => person.selected)
        await deletePerson(id)
        setPeople([...people.filter(person => person.id !== id)])
    }

    function handlePersonClick(selectedPerson) {
        setPeople(
            people
                .map(person => ({
                    ...person,
                    selected: person.id === selectedPerson.id ? !person.selected : false
                }))
        )
    }

    return (
        <div className='people-group'>
            {people.map(person => (
                <div
                    key={person.id}
                    className='person-card'
                    onClick={() => handlePersonClick(person)}
                    style={ selected(person.selected) }
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
    )
}

export default PeopleList
