const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("CONNECTION OPEN")
    })
    .catch(err => {
        console.log("OH NO ERROR")
        console.log(err)
    })


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

//========================= insert =========================
// const titanic = new Movie({ title: 'Titanic', year: 1997, score: 10.0, rating: "MPAA" })

// node -> .load index.js -> titanic
// titanic.save() 하면 외부 터미널에서 접속한 몽고db에서 db.movies.find()하면 타이타닉에 대한 내용을 볼 수 있다.
// titanic.save() 전에는 볼 수 없었음.. => 마이그레이션

// titanic.score = 9.9 -> titanic.save() 
// 외부 몽고디비에서 확인해보면 값이 변경됨을 확인

// Movie.insertMany([  // return : Promise
//     { title: 'Meet Joe Black', year: 1998, score: 9.8, rating: "MPAA" },
//     { title: 'Dark Knight', year: 2008, score: 9.8, rating: "PG-13" },
//     { title: 'Minions', year: 2015, score: 9.3, rating: "PG" },
//     { title: 'Some Like It Hot', year: 1959, score: 9.4, rating: "N/A" },
//     { title: 'Startrek:Darkness', year: 2013, score: 9.5, rating: "PG-13" },
// ])
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data)
//     })

//========================= find =========================

// Movie.find({}).then(data => console.log(data))
// Movie.find({rating:"PG-13"}).then(data => console.log(data))
// Movie.find({year:{$gte:2010}}).then(data=>console.log(data))
// Movie.find({year:{$lt:1998}}).then(data=>console.log(data))
// Movie.findOne({}).then(m=>console.log(m))
// Movie.findById('652953eaf3e4183f64a66ca9').then(m=>console.log(m))

//========================= update =========================

// Movie.updateOne({title:"Titanic"}, {year:1995}).then(res => console.log(res))
// Movie.updateMany({title: {$in : ['Titanic', 'Meet Joe Black']}}, {score : 10}).then(res=>console.log(res))
// Movie.findOneAndUpdate({title:'Minions'}, {score:8.0}).then(m => console.log(m)) => 예전 버전이 나옴..(find의 default 설정)
// Movie.findOneAndUpdate({title:'Minions'}, {score:8.3}, {new:true}).then(m => console.log(m)) => option - new:true => 바꾼 버전이 나옴

//========================= delete =========================

// Movie.findOneAndRemove({title:'Startrek:Darkness'}).then(msg=>console.log(msg))
// Movie.findOneAndDelete({title:'Some Like It Hot'}).then(msg=>console.log(msg))
// Movie.deleteMany({year:{$gte:2014}}).then(msg=>console.log(msg))

