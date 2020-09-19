const Sub = require('../models/subscriber')
const express = require('express')
const router = express.Router()
json_file = require('../views/return_statement.json')

router.get('/', async (req, res) => {
    try {
        res.json({ json_file })
        
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



module.exports = router
