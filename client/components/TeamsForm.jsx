import React, { useEffect, useState } from 'react'

function TeamsForm(props) {
    const [form, setForm] = useState({
        team1: '',
        team2: '',
        team3: '',
        team4: ''
    })

    useEffect(() => {
        const teams = localStorage.getItem('teams')
        
        if(teams) {
            setForm(JSON.parse(teams))
        }
    }, [])

    function onChange(evt) {
        const { name, value } = evt.target
        setForm({
            ...form,
            [name]: value
        })
    }

    function onSubmit() {
        props.onSubmit(form)
    }

    return (
        <div className='form'>
            <input className='text-box' type='text' placeholder='Enter team name' name='team1' value={form.team1} onChange={onChange} />
            <input className='text-box' type='text' placeholder='Enter team name' name='team2' value={form.team2} onChange={onChange} />
            <input className='text-box' type='text' placeholder='Enter team name' name='team3' value={form.team3} onChange={onChange} />
            <input className='text-box' type='text' placeholder='Enter team name' name='team4' value={form.team4} onChange={onChange} />
            <button
                className='shuffle-button'
                onClick={onSubmit} >
                🔀 Shuffle
            </button>
        </div>
    )
}

export default TeamsForm
