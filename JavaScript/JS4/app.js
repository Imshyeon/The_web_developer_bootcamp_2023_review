//======================== 범위(scope) ===========================

//======================== 함수 범위 ===========================
// let totalEggs=0;
// function collectEggs(){
//     totalEggs=6;    
//     // console.log(totalEggs)
// }
// console.log(totalEggs)
// collectEggs()
// console.log(totalEggs)

// let bird = 'Scarlet Macaw';
// function birdWatch(){
//     // let bird='Great Blue Heron';
//     console.log(bird)
// }
// birdWatch()
// console.log(bird)

//======================== 블록 범위 ===========================
// let radius = 8
// if (radius > 0){
//     const PI=3.14159;
//     let msg = 'HIII!!'
// }

// console.log(radius)
// console.log(msg)

// for (var i = 0; i<5; i++){
//     let msg= "asdjfosafjiaosdfj"
//     console.log(msg)
// }
// console.log(msg)    // var는 인식
// console.lol(i)      // let은 인식 못함

//======================== 렉시컬 범위 ===========================

// function bankRobbery(){
//     const heros=['Spiderman','Ironman','Doctor Strange','Black Widow']
//     function cryForHelp(){
//         function inner(){
//             for (let hero of heros){
//                 console.log(`PLZ HELP US, ${hero.toUpperCase()}`)
//             }    
//         }
//         inner()
//     } 
//     cryForHelp()
// }

//======================== 함수 표현식 ===========================
// function add(x,y){
//     return x+y;
// }

const add = function (x, y){
    return x + y;
} // 이름 없는 함수를 add라는 변수에 저장

// ----------console-----------
// add(1,2)             // 3
// -----------------------------

//======================== 고차 함수 ===========================
function callTwice(func){
    func();
    func();
}

function callTenTimes(f){
    for (let i = 0; i<10; i++){
        f()
    }
}

function rollDie(){
    const roll=Math.floor(Math.random() * 6)+1
    console.log(roll)
}

callTwice(rollDie)
console.log('===========')
callTenTimes(rollDie)

//======================== 반환 함수 ===========================
function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log('CONGRATS, I AM A GOOD FUNCTION')
            console.log("YOU WIN A MILLION DOLLARS")
        }
    }
    else{
        return function(){
            alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
            alert('STOP TRYING TO CLOSE THIS WINDOW')
        }
    }
}


function makeBetweenFunc(min,max){
    return function(num){
        return num >= min && num <= max
    }
}

// ----------console-----------
//const isChild =makeBetweenFunc(0,18)
//isChild
    // // ƒ (num){
    // //         return num >= min && num <= max
    // //     }
//isChild(40)       // false
//isChild(7)        //true
// -----------------------------


// function isBetween(num){
//     return num>=50 && num <= 100;
// }

// function isBetween2(num){
//     return num>=1 && num <= 10;
// }

//======================== Methods ===========================
const myMath = {
    PI:3.14159,
    square(num){
        return num * num
    },
    cube : function(num){
        return num ** 3 // num의 세제곱
    }
}

// ----------console-----------
// myMath.PI            // 3.14159
// myMath.cube(3)       // 27
// myMath['square'](4)  // 16
// -----------------------------

const square = {
    area(num){
        return num*num
    },
    perimeter : function(num){
        return num * 4
    }
}

//======================== this ===========================
const cat = {
    name : 'blue Steele',
    color : 'gray',
    breed : 'scottish fold',
    meow(){
        console.log('This is ', this)
        console.log(`${this.name} says MEOW`)
    }
}
// cat.meow() // this : cat 객체
// blue Steele says MEOW

const meow2 = cat.meow;
// meow2()   // this : window 객체 (자바스크립트의 최상위 객체)
// says MEOW


const hen = {
    name : 'Helen',
    eggCount : 0,
    layAnEgg(){
        this.eggCount++;
        return "EGG"
    }
}

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // /2

//======================== Try/Catch ===========================
try{
    hello.toUpperCase()
}
catch {
    console.log('ERROR')
}

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3))
    }
    catch (e) {
        console.log(e)
        console.log("Plz pass a string next time")
    }
}