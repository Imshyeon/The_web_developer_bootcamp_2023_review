const express = require('express')
const router = express.Router()

router.use((req,res,next)=>{    // 이렇게 하면 해당 라우터에만 isAdmin이 적용됨
    if(req.query.isAdmin){
        next()
    }
    res.send('sorry not an admin')
})

router.get('/topsecret',(req,res)=>{
    res.send('this is top secret')  // /topsecret?isAdmin=true 하면 나옴
})

router.get('/deleteeverything',(req,res)=>{
    res.send('ok deleted it all')
})

module.exports=router