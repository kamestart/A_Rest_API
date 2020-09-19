if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()   
}
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("connected to the db"))

app.use(express.json())

const subsRouter = require('./routes/subscibers')
app.use('/pkhdbbash52471', subsRouter)

