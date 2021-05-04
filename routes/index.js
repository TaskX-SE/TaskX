const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

//@desc Login/Landing Page
//@route GET/
router.get('/', ensureGuest, async (req, res) => {
  res.render('welcome')
})

//@desc Login/Landing Page
//@route GET/
router.get('/dashboard', ensureAuth, async (req, res) => {
  res.render('dashboard')
})

module.exports = router