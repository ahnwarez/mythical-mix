import React, { useState } from 'react'
import { addPerson } from '../apis/people'

const AddPerson = (props) => {
    const [value, setValue] = useState('')

    function handleChange(evt) {
        setValue(evt.target.value)
    }

    async function handleSubmit() {
        await addPerson(value)
        props.history.push('/')
    }

    return (
        <div className='modify-form'>
            <input
                onChange={handleChange}
                value={value}
                className='input-team'
                placeholder='Enter person name'
            />
            <button onClick={handleSubmit}>➕</button>
        </div>
    )
}

export default AddPerson