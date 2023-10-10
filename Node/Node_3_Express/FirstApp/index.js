const express = require('express');
const app = express()
// console.dir(app)

//================== 코드 변경 시, 자동으로 업데이트.. ==================
// npm install -g nodemon
// nodemon [your node app]


//================== routing ==================
app.get('/',(req, res) =>{
    res.send('<h1>😀WELCOME TO THE HOMEPAGE!</h1>')
})

app.get('/cats',(req, res) =>{
    res.send('MEOW!')
})

app.get('/dogs',(req, res) =>{
    res.send('WOOF!')
})

app.post('/cats',(req,res)=>{
    res.send("POST REQUEST TO /cats!")
})


//----------------- 제네릭 path ----------------- 
app.get('/r/:subreddit',(req,res)=>{
    // console.log(req.params) // => { subreddit: 'gardening' } // /r/gardening
    const { subreddit } = req.params;
    res.send(`<h1> Browing the ${subreddit} subreddit</h1`)
}) // 패턴 일치.

app.get('/r/:subreddit/comments/:postId',(req,res)=>{
    // console.log(req.params) // => { subreddit: 'gardening' } // /r/gardening
    const { subreddit, postId } = req.params;
    res.send(`<h1> Viewing Post ID : ${postId} on the ${subreddit} subreddit</h1`)
})


//----------------- query ----------------- 
app.get('/search',(req,res)=>{
    // console.log(req.query);
    const { q,sort } = req.query;
    if (!q){
        res.send('NOTHING SEARCHED!')
    }
    res.send(`<h1>Search result for : ${q} and ${sort}</h1>`)
    console.log(req.query)
})
// localhost:8080/search/?q=hello&sort=cats
// => { q: 'hello', sort: 'cats' }


app.get('*',(req,res)=>{
    res.send(`I don't know that path!`)
}) // 위의 주소줄을 제외한 다른 모든 path에 대한 것..

//================= REQUEST, RESPONSE =================
// app.use((req, res)=>{   // income, outcome
//     console.log("WE GOT A NEW REQUEST")
//     // console.dir(req)
//     // res.send("Hello, we got your request. This is a response")
//     // res.send({color:'red'})
//     res.send('<h1>This is my webpage!</h1>')
// }) // 요청이 들어오면 callback 실행 => 서버에 요청할때마다 리턴..


// app.listen(3000, ()=>{
    //     console.log('LISTENING ON PORT 3000!!!!')
    // })
    // http://localhost:3000
    
    app.listen(8080, ()=>{
    console.log('LISTENING ON PORT 8080!!!!')
})
// http://localhost:8080
