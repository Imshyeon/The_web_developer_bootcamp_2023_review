//======================= forEach ==========================
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

numbers.forEach(function (el){
    if (el % 2 == 0){
        console.log(el)
    }
})

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})

//======================= Map ==========================

const doubles = numbers.map(function(num){
    return num * 2;
})

const movieTitle = movies.map(function (movie){
    return movie.title.toUpperCase()
})

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function(personName){
    return personName.first
})

//======================= 화살표 함수 ==========================
// const add = function(x,y){
//     return x + y
// }

const add = (x,y) => {
    return x + y
}

const square = (x) => {
    return x ** 2;
}

const rollDie = () => (
    // return Math.floor(Math.random()*6)+1
    Math.floor(Math.random()*6)+1
) // {} 대신 ()를 적으면 자바스크립트에게 '나는 하나만 리턴하고 있다'를 알림 -> return 안적어도 된다

const greet = name => {
    console.log(`"Hey ${name}!"`)
}

const sub = (a,b) => a - b


// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score}`
// })

const newMovies = movies.map((movie) => (
    `${movie.title} - ${movie.score}/10`
))


//======================= setTimeout / setInterval ==========================
console.log('Hello')
setTimeout(()=>{
    console.log('Are you still there?')
}, 3000) // 3초
console.log('GoodBye')

const id = setInterval(()=>{
    console.log(Math.random())
},2000); // 2초
clearInterval(id);

//======================= Filter ==========================
numbers.filter(n=>{
    return n < 10
})


const movies2 = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// const goodMovies = movies2.filter(movie => {
//     return movie.score > 80
// })

const goodMovies = movies2.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

// movies.filter(m=> m.score > 80).map(m => m.title)

const badMovies = movies2.filter(m => m.score < 70)
const recentMovies = movies2.filter(m => m.year > 2000)

function validUserNames(usernames) {
    // your code here
    const userName = usernames.filter(m => m.length < 10)
    return userName
}
  
// validUserNames("mark")
// validUserNames("asdfafadsvd")
// validUserNames("tony")
// validUserNames("maoifjdsaiof")
// validUserNames("hello123")

//======================= Some / Every ==========================
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75) // exam에서 해당 조건을 모두 만족하면 참, 하나라도 만족하지 못하면 거짓.
exams.some(score => score >= 75) // exam에서 해당 조건을 하나라도 만족하면 참

movies2.some(movie => movie.year > 2015)

const allEvens = (numbers) => numbers.every(num => num % 2 === 0)

//======================= Reduce ==========================
const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// let total = 0
// for (let price of prices){
//     total += price
// }
// console.log(total)

// const totalPrice = prices.reduce((totalPrice, price) => {
//     return totalPrice + price
// })
// 9.99, 1.50
// 11.49, 19.99
// ..

const totalPrice = prices.reduce((totalPrice, price) => totalPrice + price)

const minPrice = prices.reduce((min,price)=>{
    if (price < min){
        return price;
    }
    return min;
})

const maxPrice = prices.reduce((max,price)=>{
    if (price > max){
        return price;
    }
    return max;
})

const highestMovie = movies2.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score){
        return currMovie;
    }
    return bestMovie;
})

const evens = [2,4,6,8];
evens.reduce((sum, num) => sum + num) // 결과 : 20
evens.reduce((sum, num) => sum + num, 100) // 결과 : 120 (초기값 100 설정.)


//======================= 화살표 함수와 this ==========================
const person = {
    firstName : 'Viggo',
    lastName : 'Mortensen',
    fullName : function() { // () => {}
        console.log(this)
        return `${this.firstName} ${this.lastName}`
    },
    shoutName : function(){
        setTimeout(() => {
            console.log(this)
            console.log(this.fullName())
        },3000)
    }
}

// 일반 함수와 달리 화살표 함수에서 this 키워드는 다르게 동작.