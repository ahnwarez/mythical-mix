
import React, { useEffect, useState } from 'react'
import { getPeople } from '../apis/people'

function Home(props) {
    const [form, setForm] = useState({
        team1: '',
        team2: '',
        team3: '',
        team4: ''
    })

    const [people, setPeople] = useState([])

    useEffect(async () => {
        const people = await getPeople()
        setPeople(people)
    }, [])

    function onChange(evt) {
        const { name, value } = evt.target
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <>
            <div className='input-fields'>
                <input type='text' placeholder='Enter team name' name='team1' value={form.team1} onChange={onChange} />
                <input type='text' placeholder='Enter team name' name='team2' value={form.team2} onChange={onChange} />
                <input type='text' placeholder='Enter team name' name='team3' value={form.team3} onChange={onChange} />
                <input type='text' placeholder='Enter team name' name='team4' value={form.team4} onChange={onChange} />
                <button>Shuffle</button>
            </div>
            <div>
                <button>Add</button>
                <ul>
                    {people.map(person => (<li>
                        {person.name}
                    </li>))}
                </ul>
            </div>
        </>
    )
}

export default Home
