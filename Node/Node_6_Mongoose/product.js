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
    size: {
        type: String,
        enum: ['S', 'M', 'L', 'XL']
    }
})

//================== instance method ==================
// => 하나의 Product에 호출.

productSchema.methods.greet = function () {
    console.log('HELLLLO!')
    console.log(`- from ${this.name}`)  // this = foundProduct
}
// node -> .load product.js -> const p = new Product({name:'bike bag', price:10})
// p.greet() => 결과 : HELLLLO!

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}
//=====================================================


//=================== static method ===================
// this가 Product 모델 클래스 자체를 가리키게 됨. 위의 instance와는 다르다..
// instance에서는 this가 인스턴스인 foundProduct를 가리킴.
// static method는 전체적인 Product 모델과 관련됨
//=> 모델의 정적 메서드는 항목을 찾거나 업데이트하거나 생성하고 삭제할 수 있어서 편하고 유용하다

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}
//=====================================================


const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct)
    foundProduct.greet();
}

Product.fireSale().then(res => console.log(res))
// 1. price : 0 & onSale : true

findProduct();
// 1. HELLLLO!
// 2. HELLLLO!
// - from Bike Helmet
// 3. onsale : false -> true
// 4. categories : ['cycling'] -> ['cycling', 'Outdoors'] 


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


