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
        min: [0, 'Price must be positive!!'],   // minValue, Error Msg
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
    },
    size:{
        type: String,
        enum: ['S','M','L','XL']
    }
})

//================== instance method ==================
productSchema.methods.greet = function(){
    console.log('HELLLLO!')
    console.log(`- from ${this.name}`)  // this = foundProduct
}
// node -> .load product.js -> const p = new Product({name:'bike bag', price:10})
// p.greet() => 결과 : HELLLLO!

const Product = mongoose.model('Product', productSchema);

const findProduct = async ()=>{
    const foundProduct = await Product.findOne({name:'Bike Helmet'})
    foundProduct.greet();
}

findProduct(); 
// 1. HELLLLO!
// 2. HELLLLO!
// - from Bike Helmet


// const bike = new Product({
//     name: 'Cycling Jersey',
//     price: 28.50,  // '599'도 가능
//     categories: ['Cycling'],
//     qty:{
//         online: 20,
//         inStore: 5
//     },
//     size: 'XS'  // size: `XS` is not a valid enum value for path `size`
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

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 20 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('IT WORKED')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('ERROR')
//         // console.log(err.errors.name.properties.message)
//         console.log(err)
//     })


