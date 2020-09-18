const { Router } = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/:id', (req, res) => {
    req.params.id
})

router.post('/', (req, res) => {

})

router.patch('/' , (req, res) => {

})

router.delete('/:id' , (req, res) => {

})

module.exports = router