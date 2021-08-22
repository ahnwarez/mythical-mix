import React, { useEffect, useState } from 'react'
import { getPeople } from '../apis/people'

function PeopleList() {
    const [people, setPeople] = useState([])

    useEffect(async () => {
        const people = await getPeople()
        setPeople(people)
    }, [])

    return (
        <div className='people-group'>
            {people.map(person => (
                <div className='person-card'>
                    <div>
                        <img width='20px' src='user.svg' alt='user avatar' />
                    </div>
                    <div className='name'>
                        {person.name}
                    </div>
                </div>
            ))}
            <div className='action'>
                <div>
                    🗑️
                </div>
            </div>
            <div className='action'>
                <div>
                    ➕
                </div>
            </div>
        </div>
    )
}

export default PeopleList
