import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPeople } from '../apis/people'
import { assignGroups, assignGroupNames } from '../mythical-mix'

function Shuffled() {

    const [teams, setTeams] = useState([])

    useEffect(async () => {
        const storageItem = localStorage.getItem('teams')
        const teamsArray = Object.values(JSON.parse(storageItem))

        const people = await getPeople()
        const groupedPeople = assignGroups(people.map(person => person.name))
        const finalTeams = assignGroupNames(teamsArray, groupedPeople)
        console.log(finalTeams);
        const f = finalTeams
            .map(team => ({
               ...team, 
                people: team.people
                    .map(name => ({
                        name: name,
                        imageUrl: people.find(p => p.name === name).imageUrl
                    }))
                })
            );
        setTeams(f)
    }, [])

    return (
        <div className='shuffled-teams'>
            {
                teams.map(({ teamName, people }) => (
                    <Team key={teamName} name={teamName} people={people} />
                ))
            }
        </div>
    )
}

const Team = ({ name, people }) => (
    <div className='shuffle-team'>
        <div key={name} className='team-name'>
            <strong>{name}</strong>
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