const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev')) // tiny, dev, common
// app.use((req, res, next)=>{
//     console.log('this is my first middleware')
//     return next()  // move on 을 하려면 next를 써야한다. 만약 쓰지 않으면 멈춤. 
//     console.log('THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()') // 이렇게 자주 사용하지는 않는다.. 
//     // 만약 next()로 끝내고 싶다면, return next() 이렇게 쓰자.
// })
// app.use((req, res, next)=>{
//     console.log('this is my second middleware')
//     return next()
// })
// app.use((req, res, next)=>{
//     console.log('this is my third middleware')
//     return next()
// })

app.use((req, res, next) => {
    // req.method = 'GET'; //요청을 post로 보내면 요청 자체는 post, express에서는 get.... 
    // 자주하지 않는다.
    req.requestTime = Date.now()
    console.log(req.method, req.path)
    next()
})

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOG')
    next()
})// dogs로 오는 요청만..!

app.use((req, res, next) => {
    const { password } = req.query
    if (password === 'chicken') {
        next()
    }
    res.send('SORRY YOU NEED A PASSWORD')
})  
// /dogs => SORRY YOU NEED A PASSWORD
// /dogs?password=chicken => WOof

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('Home Page')
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOof')
})

app.get('/secret', (req, res)=>{
    res.send('My Secret is: Sometimes I wear headphones in public.')
})
//http://localhost:3000/secret?password=chicken => res.send()내용이 나옴

app.use((req, res) => {
    // res.send('NOT FOUND') // 1.
    res.status(404).send('NOT FOUND')
}) // 404 에러 시 실행.. 위의 것 중 어느 것이랑도 매칭이 되지 않음..

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})