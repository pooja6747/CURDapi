const mongoose = require('mongoose')
const express = require('express')
const userRoute = require('./Route/userRoute')
require('dotenv/config')

//init
const app = express();

//middleware
app.use(express.json())



//default routee
app.get('/', (req, res) => {
    res.send('home')
})


//user main route
app.use('/api/user',userRoute)



//port
app.listen(process.env.PORT, () => {
    console.log(`the port no is ${process.env.PORT}`)
})


async function DB() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected)
    } catch (error) {
        console.log(error.message)
    }
}

DB()