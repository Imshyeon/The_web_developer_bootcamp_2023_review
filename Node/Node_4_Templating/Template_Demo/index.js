const express = require('express')
const app = express()
const path = require('path')
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname,'asset')))   //static

app.set('view engine','ejs') // npm i ejs
app.set('views',path.join(__dirname, '/views')) // 해당 코드가 어디서나 작동하게 하기 위함

app.get('/',(req,res)=>{
    res.render('home') // default 위치가 views안이기 때문에 views/home.ejs 할 필요가 없다
})

app.get('/cats',(req,res)=>{
    const cats=[
        'Blue', 'Rocket','Monty','Stephanie','Winston'
    ]
    res.render('cats',{ cats })
})

app.get('/r/:subreddit', (req,res)=>{
    const {subreddit} = req.params;
    const data = redditData[subreddit]
    if(data){
        res.render('subreddit', { ...data }) // 각 특성에 접근 가능
    } else{
        res.render('notfound',{ subreddit })
    }
})

app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { num : num })
})

app.listen(3000,()=>{
    console.log('LISTENING ON PORT 3000')
})

