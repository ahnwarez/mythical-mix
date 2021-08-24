import React, { useState } from 'react'

const AddPerson = (props) => {
    const [value, setValue] = useState('')

    function handleChange(evt) {
        setValue(evt.target.value)
    }

    function handleSubmit() {
        console.log('submit add');
        props.history.push('/')
    }

    return (
        <div className='modify-form'>
            <input
                onChange={handleChange}
                value={value}
                className='input-team'
            />
            <button onClick={handleSubmit}>➕</button>
        </div>
    )
}

export default AddPerson