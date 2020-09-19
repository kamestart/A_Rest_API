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

router.patch('/:id' ,getSub,  async (req, res) => {
    if (req.body.name == null) {
        res.sub.name = req.body.name
    }

    if (req.body.subedToChannel == null) {
        res.sub.subedToChannel = req.body.subedToChannel
    }

    try {
        const updatedSub = await res.sub.save()
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id' ,getSub,  async (req, res) => {
    try {
        await res.sub.remove()
        res.json({ messgae: 'deleted Subscriber' })
    } catch (err) {
        res.status(500).json({ messgae: err.message })

    }
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
    next()
}

module.exports = router
