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

app.use(cookieParser('thisismysecret'))

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

app.get('/getsignedcookie',(req,res)=>{
    res.cookie('fruit','grape',{signed:true})
    res.send('ok signed your fruit cookie') // value : s%3Agrape.LMNZojp%2FiR9Tsj50P0ysA22deJjrP0awUK0S8R3lTUk
    // 무결성, 유효성 확인. 아무도 건드리지 않고, 아무것도 바뀌지 않음을 확인
})

app.get('/verifyfruit',(req,res)=>{
    console.log(req.cookies)
    console.log(req.signedCookies)
    // res.send(req.cookies) // fruit와 관련된 쿠키는 보이지 않음.
    res.send(req.signedCookies) // fruit와 관련된 쿠키가 보임.
})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})