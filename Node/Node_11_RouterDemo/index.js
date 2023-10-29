const express = require('express')
const app = express()
const shelterRoutes = require('./routes/shelters')
const dogsRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

app.use('/shelters', shelterRoutes)
app.use('/dogs', dogsRoutes)
app.use('/admin', adminRoutes)

//==========cookie==========
app.get('/greet', (req, res) => {
    res.send('hey there')
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'suhyeon kang')
    res.cookie('animal', 'kitten')
    res.send('ok sent your a cookie')
})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})