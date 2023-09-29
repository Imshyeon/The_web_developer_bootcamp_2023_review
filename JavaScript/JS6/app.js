//======================== default 매개 변수 ==========================
// function rollDie(numSides){
//     // old
//     if (numSides === undefined){
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides ) + 1
// }

// new
function rollDie(numSides=6){
    return Math.floor(Math.random() * numSides ) + 1
}

function greet(person, msg='Hey there',punc='!'){
    console.log(`${msg}, ${person}${punc}`)
}

//======================== spread 1 ==========================
nums=[3,13,5,6,6,776,976,34567]
Math.max(...nums)
console.log(nums)
console.log(...nums)

console.log('hello')
console.log(...'hello')
console.log('h','e','l','l','o')

//======================== spread 2 ==========================
const cats = ['Blue','Scout','Rocker']
const dogs = ['Rusty','Wyatt']

const allPets = [1,2,3,...cats, ...dogs,'Cheese']
console.log(cats)
console.log(dogs)
console.log(allPets)

console.log([...'Hello'])

//======================== spread 3 ==========================
const feline = {legs : 4, family : 'Felidae'}
const canine = {isFurry : true, family : "Caninae"}
console.log({...feline, color:'black'})

const catDog = {...feline, ...canine} // 둘 다 family가 있다. 따라서 이런 경우에는 뒤에 나오는 canine 특성이 앞의 특성을 덮어쓴다.
console.log(catDog)

console.log({...[2,4,5,6]})
console.log({..."HIIIII"})


const dataFromForm = {
    email : 'kzoen0040@naver.com',
    password : 'amazonamazon',
    username : 'wokingInAmazonnn'
}

const newUser = {...dataFromForm, id : 2345, isAdmin : false}

//======================== Rest ==========================
// function sum(){
//     return arguments.reduce((total, el) => total + el)
// } // 작동하지 않음

function sum(...nums){
    console.log(nums)
    return nums.reduce((total,el) => total+el)
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO : ${gold}`)
    console.log(`SILVER MEDAL GOES TO : ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE : ${everyoneElse}`)
}

//======================== Destructuring 1 ==========================
const scores = [29834,2385858,4889266,82132983,4395802936,2934899,943606]
const highScore = scores[0];
const secondHighScore = scores[1]

const [gold, silver, bronze, ...everyoneElse] = scores; // 콘솔에 gold, silver, bronze 
console.log(gold,'|',silver,'|',bronze,'|', ...everyoneElse)

//======================== Destructuring 2 ==========================
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

const {email, firstName, lastName, city:city1, bio} = user; // 순서가 아니라 이름이 중요

const {born : birthYear, died : deathYear = 'N/A'} = user; // 이름을 변경, default

//----

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const {city, state, died = 'N/A'} = user2; // default

//======================== 매개변수(Param) Destructuring ==========================

// function fullName(user){
//     const {firstName,lastName}=user;
//     return `${firstName} ${lastName}`
// }

function fullName({firstName, lastName = "None"}){
    return `${firstName} ${lastName}`
}

const movies = [
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

// movies.filter((movie) => movie.score >= 90)
movies.filter(({score}) => score >= 90)

// movies.map(movie => {
//     return `${movie.title}(${movie.year}) is rated ${movie.score}`
// })
movies.map(({title, score, year}) => {
    return `${title}(${year}) is rated ${score}`
})