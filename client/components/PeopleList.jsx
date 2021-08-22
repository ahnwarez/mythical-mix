import React, { useEffect, useState } from 'react'
import { getPeople } from '../apis/people'

function PeopleList() {
    const [people, setPeople] = useState([])

    useEffect(async () => {
        const people = await getPeople()
        setPeople(people)
    }, [])

    return (
        <div className='list'>
            <div className='people-list'>
                {people.map(person => (
                    <div className='person-card-group' key={person.id}>
                        <div className='person-card'>
                            <div>
                                👤
                            </div>
                            <div>
                                {person.name}
                            </div>
                        </div>
                    </div>
                ))}
                <div className='person-add'>
                    <div>
                        ➕
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleList
