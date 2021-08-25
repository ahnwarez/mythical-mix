const express = require('express')

const db = require('../db/people')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const results = await db.getPeople()
    res.json({ results })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  }
})

router.post('/add', async (req, res) => {
  try {
    const { name, imageUrl } = req.body
    await db.addPerson({ name, imageUrl })
    res.sendStatus(201)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  }
})

router.delete('/delete', async (req, res) => {
  try {
    const { id } = req.body
    await db.deletePerson(id)
    res.sendStatus(201)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  }
})

module.exports = router
