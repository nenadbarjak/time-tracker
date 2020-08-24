const path = require('path')
const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const usersRouter = require('./routes/users')
const timesRouter = require('./routes/times')

const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../dist', '/time-tracker')))

app.use(cors())
app.use(express.json())
app.use(usersRouter)
app.use(timesRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', '/time-tracker/index.html'))
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

