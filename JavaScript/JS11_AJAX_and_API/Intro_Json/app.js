// AJAX : 비동기식 javascrip와 xml -> js로 요청하면 순수 데이터를 받아옴. => 요새는 xml보다는 JSON을 이용함.

// WebAPI : 웹, HTTP를 기반으로 하는 인터페이스. 특정 엔드포인트를 제공.
// 제공되는 엔더포인트는 사용되는 코드에 정보로 응답하거나 다른 소프트웨어에 정보로 응답.

// JSON : Java Script Object Notation. 자바스크립트 객체 구문을 기반으로해서 중괄호와 키-값을 가짐. 

// JSON.parse : JSON -> JS
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`
const parseData = JSON.parse(data)
console.log(parseData.ticker.price)

// JSON.stringify : JS -> JSON
const dog = { breed: 'lab', color: 'black', isAlive: true, owner: undefined }
JSON.stringify(dog)


//================= HTTP verbs =================
// Get : 정보를 가져올 때 사용. API로 부터 정보를 가져옴.
// Post : 일반적으로 데이터를 어딘가로 보낼 때 사용함. 



//================= HTTP Status Codes =================
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status



//================= Understanding Query String =================
// https://swapi.dev/api/people/:id
// https://swapi.dev/api/people/{{id}}
// https://swapi.dev/api/people/<id>
// => id로 대체하라!

// https://api.tvmaze.com/schedule?country=KR&date=2023-12-01



//================= HTTP Headers =================
// https://icanhazdadjoke.com/
// Headers -> key (Accept) , Value (application/json) => json으로 데이터가 옴



//================= Making XHRs =================
// promise, async 안됨..
const req = new XMLHttpRequest();

req.onload = function () {
    console.log('IT LOADED!!!!!')
    const data = JSON.parse(this.responseText)
    console.log(data.name, data.height)
}

req.onerror = function () {
    console.log('ERROR!!!!!')
    console.log(this)
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send();



//================= Using The Fetch API =================
// promise 지원

// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log('RESOLVE', res)
//         return res.json()
//     })
//     .then(data => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2")
//     })
//     .then(res => {
//         console.log('SECOND REQUEST RESOLVED', res)
//         return res.json()
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log('ERROR', e)
//     })

const loadStarWarsPeople = async () =>{
    try{
    const res = await fetch("https://swapi.dev/api/people/1");
    const data =  await res.json()
    console.log(data)

    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 =  await res2.json()
    console.log(data2)
    }
    catch(e){
        console.log('ERROR', e)
    }
}
loadStarWarsPeople();


