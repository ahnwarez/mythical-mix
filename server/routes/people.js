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

module.exports = router
