const Sub = require('../models/subscriber')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const subscribers = await Sub.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', (req, res) => {
    req.params.id
})

router.post('/', async (req, res) => {
    const subscriber = new Sub({
        name: req.body.name,
        subedToChannel: req.body.subToChannel
    })
    try {
        newSub = await subscriber.save()
        res.status(201).json(newSub)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

router.patch('/:id' , (req, res) => {

})

router.delete('/:id' , (req, res) => {
    
})

async function getSub(req, res, next) {
    let sub
    try {
        sub = await Sub.findById(req.params.id)
        if (sub == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ messgae: err.message }) 
    }

    res.sub = sub
}

module.exports = router
