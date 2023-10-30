const express = require('express')
const app = express()
const shelterRoutes = require('./routes/shelters')
const dogsRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

// npm i cookie-parser
const cookieParser = require('cookie-parser')

app.use('/shelters', shelterRoutes)
app.use('/dogs', dogsRoutes)
app.use('/admin', adminRoutes)

app.use(cookieParser())

//==========cookie==========
app.get('/greet', (req, res) => {
    // console.log(req.cookies)
    const { name = "No-name" } = req.cookies
    res.send(`hey there ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'suhyeon kang')
    res.cookie('animal', 'kitten')
    res.send('ok sent your a cookie')
})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})