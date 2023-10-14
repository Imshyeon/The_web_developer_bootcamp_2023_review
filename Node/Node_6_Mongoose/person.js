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
    last : String,
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
.get(function(){
    return `${this.first} ${this.last}` // this = instance 참조
})
.set(function(v){
    const firstName = v.substring(0, v.indexOf(' '));
    const lastName = v.substring(v.indexOf(' ') + 1);
    this.set({first: firstName, last: lastName})
})

const Person = mongoose.model('Person', personSchema)

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
