
import React, { useEffect, useState } from 'react'
import { getPeople } from '../apis/people'

function Home() {
    const [form, setForm] = useState({
        team1: '',
        team2: '',
        team3: '',
        team4: ''
    })

    function onChange(evt) {
        const { name, value } = evt.target
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div className='input-fields'>
            <input className='input-team' type='text' placeholder='Enter team name' name='team1' value={form.team1} onChange={onChange} />
            <input className='input-team' type='text' placeholder='Enter team name' name='team2' value={form.team2} onChange={onChange} />
            <input className='input-team' type='text' placeholder='Enter team name' name='team3' value={form.team3} onChange={onChange} />
            <input className='input-team' type='text' placeholder='Enter team name' name='team4' value={form.team4} onChange={onChange} />
            <div >
                <button className='shuffle-button'>🔀 Shuffle</button>
            </div>
        </div>
    )
}

export default Home
