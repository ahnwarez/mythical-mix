import React, { useEffect, useState } from 'react'
import { getPeople } from '../apis/people'

function PeopleList(props) {
    const [people, setPeople] = useState([])

    useEffect(async () => {
        const people = await getPeople()
        setPeople(people)
    }, [])

    function handleAdd() {
        props.history.push('/add')
    }

    function handleDelete() {
        props.history.push('/delete')
    }

    return (
        <div className='people-group'>
            {people.map(person => (
                <div key={person.id} className='person-card'>
                    <div>
                        <img width='20px' src='user.svg' alt='user avatar' />
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
