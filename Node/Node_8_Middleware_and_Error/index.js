const express = require('express')
const app = express()
const morgan = require('morgan')

const AppError = require('./AppError')

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


// 1번
// app.use((req, res, next) => {
//     const { password } = req.query
//     if (password === 'chicken') {
//         next()
//     }
//     res.send('SORRY YOU NEED A PASSWORD')
// })  
// /dogs => SORRY YOU NEED A PASSWORD
// /dogs?password=chicken => WOof

// 2번
const verifyPassword = (req, res, next) => {
    const { password } = req.query
    if (password === 'chicken') {
        next()
    }
    throw new AppError('password required', 401)
    // res.send('SORRY YOU NEED A PASSWORD')
    // throw new AppError(401,'Password required')
}

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('Home Page')
})

app.get('/error',(req,res)=>{
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOof')
})

// 이렇게 하면 /secret을 제외한 라우트는 그냥 실행되지만 /secret은 password가 있어야 보인다.
app.get('/secret', verifyPassword, (req, res)=>{
    res.send('My Secret is: Sometimes I wear headphones in public.')
})
//http://localhost:3000/secret?password=chicken => res.send()내용이 나옴

app.get('/admin',(req, res)=>{
    throw new AppError('YOu are not an Admin', 403)
})

app.use((req, res) => {
    // res.send('NOT FOUND') // 1.
    res.status(404).send('NOT FOUND')
}) // 404 에러 시 실행.. 위의 것 중 어느 것이랑도 매칭이 되지 않음..


// 에러 핸들링 미들웨어
// app.use((err, req, res, next)=>{
//     console.log('*************************************')
//     console.log('*****************ERROR***************')
//     console.log('*************************************')
//     // res.status(500).send('OH boy, we got the error')
//     next(err)
// })

app.use((err, req, res, next)=>{
    const {status = 500, message = 'Something went wrong'} = err; // 값이 없으면 디폴트로 수행.
    res.status(status).send(message)   // err.stack 대신 해당 문장 수행..
})
// status
// 1. 401 : 클라이언트가 누군지 모르지만 작업할 권한이 없다.
// 2. 403 : 클라이언트가 누군지 알지만 권한이 없다.

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})