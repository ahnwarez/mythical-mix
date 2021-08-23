import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Shuffled() {

    const [teams, setTeams] = useState()

    useEffect(() => {
        const storageItem = localStorage.getItem('teams')
        setTeams(JSON.parse(storageItem))
    }, [])

    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                {teams ? teams.team1 : null}
            </div>
        </div>
    )
}

export default Shuffled