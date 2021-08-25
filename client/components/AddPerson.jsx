import React, { useState } from 'react'
import { addPerson } from '../apis/people'

const AddPerson = (props) => {
    const [form, setForm] = useState({
        name: '',
        image: ''
    })

    function handleChange(evt) {
        const { name, value } = evt.target
        setForm({
            [name]: value
        })
    }

    async function handleSubmit() {
        const defaultImageUrl = '/user.svg'

        await addPerson({
            name: form.name,
            imageUrl: form.image ? form.image : defaultImageUrl
        })
        props.history.push('/')
    }

    return (
        <div className='modify-form'>
            <input
                onChange={handleChange}
                value={form.name}
                className='input-team'
                placeholder='Enter person name'
                name='name'
            />
            <input
                onChange={handleChange}
                value={form.image}
                className='input-team'
                placeholder='Paste image url here'
                name='image'
            />
            <button onClick={handleSubmit}>➕</button>
        </div>
    )
}

export default AddPerson