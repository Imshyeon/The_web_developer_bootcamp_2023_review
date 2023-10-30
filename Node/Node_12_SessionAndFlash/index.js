// npm i express-session
// 해당 모듈을 작동하기 위해서 cookie-parser는 더 필요하지 않음
const express = require('express')
const app = express()
const session = require('express-session')

const sessionOption = { secret: 'thissisnotagoodsecret', resave: false, saveUninitialized: false }
app.use(session(sessionOption)) // connect.sid 라는 이름으로 쿠키 생성.

app.get('/viewcount', (req, res) => {
    // res.send('you have viewed this page x times')
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`you have viewed this page ${req.session.count} times`)    // 새로고침 할 때 마다 +1
    // 사파리나 postman 등 다른 곳으로 가면 쿠키가 달라짐.. 새로 카운팅. => 완전히 분리되어 서버에 저장
})

app.get('/register',(req,res)=>{
    const {username="Anonymous"} = req.query
    req.session.username = username
    res.redirect('/greet')
})

app.get('/greet',(req,res)=>{
    const {username} = req.session
    res.send(`Welcome back, ${username}`)   // /register?username=suhyeon
})

app.listen(3000, () => {
    console.log('Serving...')
})