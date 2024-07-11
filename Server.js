require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/Workout')
const { default: mongoose } = require('mongoose')


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req,res,next )=>{  
    console.log(req.path,req.method )
    next()
})

//routes
app.use('/api/workout', workoutRoutes)
//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT,()=>{
        console.log('connected to db listning on port',process.env.PORT)
    })
        })
        .catch(err => console.log(err))


