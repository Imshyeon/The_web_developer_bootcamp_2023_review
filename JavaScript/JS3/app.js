// function funcName(){
//     // do something
// }

function prayFor(){
    console.log('Plz..')
    console.log('I want he come back to us safely..')
    console.log('I am seriously praying for him..')
}
prayFor();

//========================================================

function greet(firstName, lastName){
    console.log(`Hi! ${firstName} ${lastName[0]}.`)
}

//========================================================

function repeat(str,times){
    let result ='';
    for (let i =0; i<times; i++){
        result += str;
    }
    console.log(result)
}
repeat('hi ',3)
greet('Brad','Pitt')

//========================================================

function add(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    else{
        let sum = x+y;
        return sum;    
    }
}

//========================================================

function lastElement(items){
    if (items.length === 0){
        return null
    }
    else{
        return items[items.length-1]
    }
}

lastElement([3,5,7])
lastElement([1])
lastElement([])

//========================================================

function capitalize(str){
    first = str[0].toUpperCase()
    return first + str.slice(1)
}
capitalize('eggplant')
capitalize('pamplemousse')
capitalize('squid')

//========================================================

function sumArray(items){
    total = 0
    for (let i of items){
        i=parseInt(i)
        total += i;
    }
    return total
}

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101

//========================================================

function returnDay(dayNum){
    if (dayNum < 1 || dayNum > 7){
        return null
    }
    
    switch (dayNum){
        case 1 : return "Monday";
        case 2 : return "Tuesday"; 
        case 3 : return "Wednesday"; 
        case 4 : return "Thursday"; 
        case 5 : return "Friday"; 
        case 6 : return "Saturday"; 
        case 7 : return "Sunday"; 
    }
}
returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null