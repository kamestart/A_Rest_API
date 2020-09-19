const PORT = process.env.PORT || '3000'
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

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})

app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();

});


