import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Form(props) {
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

    function onSubmit() {
        props.onSubmit(form)
    }

    return (
        <div className='form'>
            <input className='input-team' type='text' placeholder='Enter team name' name='team1' value={form.team1} onChange={onChange} />
            <input className='input-team' type='text' placeholder='Enter team name' name='team2' value={form.team2} onChange={onChange} />
            <input className='input-team' type='text' placeholder='Enter team name' name='team3' value={form.team3} onChange={onChange} />
            <input className='input-team' type='text' placeholder='Enter team name' name='team4' value={form.team4} onChange={onChange} />
            <div >
                <button
                    className='shuffle-button'
                    onClick={onSubmit} >
                    🔀 Shuffle
                </button>
            </div>
        </div>
    )
}

export default Form
