const express = require('express')
const app = express()
const shelterRoutes = require('./routes/shelters')
const dogsRoutes = require('./routes/dogs')

app.use('/shelters', shelterRoutes)
app.use('/dogs',dogsRoutes)

app.listen(3000, ()=>{
    console.log('Serving app on localhost:3000')
})