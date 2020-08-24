const mongoose = require('mongoose')

const timeSchema = new mongoose.Schema({
    startTime: {
        type: Number,
        required: true,
    },
    endTime: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

timeSchema.methods.toJSON = function () {
    const time = this
    const timeObject = time.toObject()

    delete timeObject.__v
    delete timeObject.owner

    return timeObject
}

const Time = mongoose.model('Time', timeSchema)

module.exports = Time