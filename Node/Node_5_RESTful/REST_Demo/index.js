const express = require('express');
const app = express();

app.use(express.urlencoded({ extended : true }))    // post - req.body

app.get('/tacos',(req,res)=>{
    res.send('GET /tacos response')
})

app.post('/tacos',(req,res)=>{
    const {meat, qty} = req.body   // { meat: 'pork', qty: '1' }
    res.send(`OK, here are your ${qty} ${meat} taco`)
})

app.listen(3000,()=>{
    console.log('ON PORT 3000')
})