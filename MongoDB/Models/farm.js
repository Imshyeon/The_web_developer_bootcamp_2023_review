const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshopDemo')
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log('MONGO CONNECTION ERROR')
        console.log(err)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})


const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     {name:'Goddess Melon', price:4.99, season:'Summer'},
//     {name:'Sugar Baby Watermelon', price:5.99, season:'Summer'},
//     {name:'Asparagus', price:3.99, season:'Spring'},
// ])

// ========== 예제 1 ==========

// const makeFarm = async () => {
//     const farm = new Farm({
//         name: 'Full Belly Farms',
//         city: 'Guinda, CA'
//     })
//     const melon = await Product.findOne({ name: 'Goddess Melon' })
//     farm.products.push(melon)
//     await farm.save()
//     console.log(farm)
// }
// makeFarm()

// db.farms.find()
// relationshopDemo> db.farms.find()
// [
//   {
//     _id: ObjectId("65361fa7763da116f9211ab1"),
//     name: 'Full Belly Farms',
//     city: 'Guinda, CA',
//     products: [ ObjectId("65361d6790a2e6718c564e23") ],
//     __v: 0
//   }
// ]

// ========== 예제 2 ==========
const addProduct = async () => {
    const farm = await Farm.findOne({name: 'Full Belly Farms'})
    const watermelon = await Product.findOne({name: 'Sugar Baby Watermelon'})
    farm.products.push(watermelon)
    await farm.save()
    console.log(farm)
}
// addProduct()


// ========== populate ========== 
Farm.findOne({name:'Full Belly Farms'})
    .populate('products')
    .then(farm => console.log(farm))