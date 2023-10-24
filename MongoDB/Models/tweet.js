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
    // const user = new User({ username: 'bradpitt', age: 36 })
    const user = await User.findOne({ username: 'bradpitt' })
    // const tweet1 = new Tweet({ text: 'I will go to Korea.', likes: 23528 })
    const tweet2 = new Tweet({ text: 'Hello Korea! I am Here now!', likes: 2349825 })
    tweet2.user = user
    // user.save()
    tweet2.save()
}
makeTweets()

// 몽고 쉘
// 예제 1.
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

// 예제 2.
// relationshopDemo> db.tweets.find()
// [
//   {
//     _id: ObjectId("6537329ce6364d5a183cf0b6"),
//     text: 'I will go to Korea.',
//     likes: 23528,
//     user: ObjectId("6537329ce6364d5a183cf0b5"),
//     __v: 0
//   },
//   {
//     _id: ObjectId("6537334a812c4346b35ef128"),
//     text: 'Hello Korea! I am Here now!',
//     likes: 2349825,
//     user: ObjectId("6537329ce6364d5a183cf0b5"),
//     __v: 0
//   }
// ]


const findTweets = async () => {
    const t = await Tweet.find({})
        .populate('user', 'username')
    console.log(t)
}
findTweets()

// [
//  {
//     _id: new ObjectId("653733d43575878255bf3cc6"),
//     text: 'Hello Korea! I am Here now!',
//     likes: 2349825,
//     user: {
//       _id: new ObjectId("6537329ce6364d5a183cf0b5"),
//       username: 'bradpitt'
//     },
//     __v: 0
//   },
//   {
//     _id: new ObjectId("65373402ec9c433b9ebbc8fc"),
//     text: 'Hello Korea! I am Here now!',
//     likes: 2349825,
//     user: {
//       _id: new ObjectId("6537329ce6364d5a183cf0b5"),
//       username: 'bradpitt'
//     },
//     __v: 0
//   }
// ]