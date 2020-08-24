const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const Time = require('../models/time')
const User = require('../models/user')

// Get all times
router.get('/times', auth, async(req, res) => {
    try {
        await req.user.populate({
            path: 'times'
        }).execPopulate()
        
        res.send(req.user.times)
    } catch (err) {
        res.status(500).send()
    }
})

// Add new time
router.post('/times', auth, async(req, res) => {
    const time = new Time({
        ...req.body,
        owner: req.user._id
    })

    try {
        await time.save()
        res.status(201).send(time)
    } catch (err) {
        res.status(400).send()
    }
})

// Delete a time from DB
router.delete('/times/:timeId', auth, async (req, res) => {
    try {
        const time = await Time.findOneAndDelete({ _id: req.params.timeId, owner: req.user._id })
        
        if (!time) {
            res.status(404).send()
        }

        res.send(time)
    } catch(err) {
        res.status(500).send()
    }
})

module.exports = router