// ========== bajillions ========== 
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

const userSchema = new Schema({
    username: String,
    age: Number,
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

const makeTweets = async () => {
    const user = new User({ username: 'bradpitt', age: 36 })
    const tweet1 = new Tweet({ text: 'I will go to Korea.', likes: 23528 })
    tweet1.user = user
    user.save()
    tweet1.save()
}
makeTweets()

// 몽고 쉘
// relationshopDemo> db.tweets.find()
// [
//   {
//     _id: ObjectId("6537329ce6364d5a183cf0b6"),
//     text: 'I will go to Korea.',
//     likes: 23528,
//     user: ObjectId("6537329ce6364d5a183cf0b5"),
//     __v: 0
//   }
// ]