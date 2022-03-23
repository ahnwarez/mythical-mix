import React, { useState } from 'react'

function TeamsForm (props) {
  console.log('render')
  const [state, setState] = useState(4)
  const [form, setForm] = useState(Array.from({ length: state }, (_, i) => i)
    .reduce((ac, a) => ({ ...ac, ['team' + a]: '' }), {}))

  function onChange (evt) {
    const { name, value } = evt.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function onSubmit () {
    props.onSubmit(form)
  }

  function onNumberChange (event) {
    if (!isNaN(event.target.value)) {
      setState(Number(event.target.value))
      setForm(Array.from({ length: (Number(event.target.value)) }, (_, i) => i)
        .reduce((ac, a) => ({ ...ac, ['team' + a]: '' }), {}))
    }
  }

  return (
    <>
      <input type="range" min="3" max="6" name='teamNumber' onChange={onNumberChange} value={state} />
      <div className='form' >
        { Object.keys(form).map(key =>
          <input
            className='text-box'
            type='text'
            placeholder='Enter team name'
            key={key}
            name={key}
            value={form[key]}
            onChange={onChange}
          />
        )}
        {/* <input className='text-box' type='text' placeholder='Enter team name' name='team1' value={form.team1} onChange={onChange} />
        <input className='text-box' type='text' placeholder='Enter team name' name='team2' value={form.team2} onChange={onChange} />
        <input className='text-box' type='text' placeholder='Enter team name' name='team3' value={form.team3} onChange={onChange} />
        <input className='text-box' type='text' placeholder='Enter team name' name='team4' value={form.team4} onChange={onChange} />
        <input className='text-box' type='text' placeholder='Enter team name' name='team5' value={form.team5} onChange={onChange} /> */}
        <button className='button' onClick={onSubmit} >🔀 Shuffle</button>
      </div>

    </>
  )
}

export default TeamsForm
