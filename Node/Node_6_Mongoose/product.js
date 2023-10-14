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

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // 필수
        maxLength: 20,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: {
        type: [String],
        default: ['cycling']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

const Product = mongoose.model('Product', productSchema);
// const bike = new Product({
//     name: 'Tire Pump',
//     price: 20.50,  // '599'도 가능
//     categories: ['Cycling'],
//     qty:{
//         online: 20,
//         inStore: 5
//     }
// })

// bike.save()
//     .then(data => {
//         console.log('IT WORKED')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('ERROR')
//         // console.log(err.errors.name.properties.message)
//         console.log(err)
//     })

Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -100 }, { new: true, runValidators: true })
    .then(data => {
        console.log('IT WORKED')
        console.log(data)
    })
    .catch(err => {
        console.log('ERROR')
        // console.log(err.errors.name.properties.message)
        console.log(err)
    })


