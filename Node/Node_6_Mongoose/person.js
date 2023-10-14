const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN")
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String,
})

//===================== getter =====================
// personSchema.virtual('fullName').get(function(){
//     return `${this.first} ${this.last}` // this = instance 참조
// })

// const Person = mongoose.model('Person', personSchema)

// > const Brad = new Person({first:'Brad', last:'Pitt'})
// undefined
// > Brad.fullName
// 'Brad Pitt'

// Brad.save()한 뒤, 실제 mongodb에서 보면 fullName에 대한 것은 없다. => 가상 특성에 대한 getter
// 해당 특성은 데이터베이스 내부에 존재하는 것이 아니고 mongoose에서만 가능. 


//===================== setter =====================
personSchema.virtual('fullName')
    .get(function () {
        return `${this.first} ${this.last}` // this = instance 참조
    })
    .set(function (v) {
        const firstName = v.substring(0, v.indexOf(' '));
        const lastName = v.substring(v.indexOf(' ') + 1);
        this.set({ first: firstName, last: lastName })
    })


// > const Brad = new Person({first:'Brad', last:'Pitt'})
// undefined
// > Brad
// {
//   first: 'Brad',
//   last: 'Pitt',
//   _id: new ObjectId("652a4846cf1d6f7019dbf5c4")
// }
// > Brad.fullName
// 'Brad Pitt'
// > Brad.fullName = 'Brad Kang'
// 'Brad Kang'
// > Brad.fullName
// 'Brad Kang'


//===================== middelware =====================
personSchema.pre('save', async function(){
    this.first = 'YO'
    this.last = 'AY'
    console.log('ABOUT TO SAVE')
})
personSchema.post('save', async function(){
    console.log('JUST SAVE')
})

//1. 
// > const k = new Person({first:'zoe', last:'kang'})
// undefined
// > k.save()
// Promise {
//   <pending>,
//   [Symbol(async_id_symbol)]: 654,
//   [Symbol(trigger_async_id_symbol)]: 6
// }
// > ABOUT TO SAVE
// JUST SAVE

// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// > k
// {
//   first: 'YO',
//   last: 'AY',
//   _id: new ObjectId("652a4a470489ab1846496211"),
//   __v: 0
// }



const Person = mongoose.model('Person', personSchema)