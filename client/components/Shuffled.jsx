import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPeople } from '../apis/people'
import { assignGroups, assignGroupNames } from '../mythical-mix'

function Shuffled() {

    const [teams, setTeams] = useState()

    useEffect(async () => {
        const storageItem = localStorage.getItem('teams')
        const teamsArray = Object.values(JSON.parse(storageItem))

        const people = await getPeople()
        const groupedPeople = assignGroups(people.map(person => person.name))
        const finalTeams = assignGroupNames(teamsArray, groupedPeople)
        setTeams(finalTeams)
    }, [])

    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                {
                    teams ?
                        teams.map(team => (
                            <>
                                <div key={team.teamName}>
                                    {team.teamName}
                                </div>
                                {team.people.map(person => (
                                    <div key={person}>
                                        {person}
                                    </div>
                                ))}
                            </>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default Shuffled