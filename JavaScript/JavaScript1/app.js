// console.log('hello form our first js file');
// let total = 1+3;
// console.log('goodbye')

// let random = Math.random()
// if (random < 0.5){
//     console.log('Your number is less than 0.5');
//     console.log(random);
// }
// else {
//     console.log('your number is greater (or equal) than 0.5')
//     console.log(random)
// }


// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();
// if (dayOfWeek === 'monday'){
//     console.log('i hate mondays')
// }
// else if(dayOfWeek ==='saturday'){
//     console.log('i love saturday')
// }
// else if(dayOfWeek ==='friday'){
//     console.log('fridays are decent, especially after work')
// }
// else {
//     console.log('MEH')
// }


// const age = 89;
// if (age < 5){
//     console.log('You are a baby. you get in for free')
// }
// else if (age < 10){
//     console.log('You are a child. you pay $10.')
// }
// else if (age < 65){
//     console.log('You are a adult. you pa $ 20.')
// }
// else{
//     console.log('you are a senior. you pay $10')
// }

// ===============================================

// const password=prompt('please enter a new pw')

// if (password.length >= 6){
//     if (password.indexOf(' ') === -1){
//         console.log('valid pw')
//     }
//     else{
//         console.log('pw cannot contain spaces')
//     }
// }
// else{
//     console.log('pw too short. must be 6+ characters')
// }

// ===============================================

// const userinput = prompt('enter something')

// if (userinput){
//     console.log('truthy')   // 그 외
// }
// else{
//     console.log('falsy') // false, 0, "", NaN, null, undefined
// }

if(0){
    console.log('truthy')
}
else{
    console.log('falsy')
}

if(false){
    console.log('truthy')
}
else{
    console.log('falsy')
}

if(NaN){
    console.log('truthy')
}
else{
    console.log('falsy')
}

if(undefined){
    console.log('truthy')
}
else{
    console.log('falsy')
}

if("i"){
    console.log('truthy')
}
else{
    console.log('falsy')
}

// ======================AND=========================

// const password=prompt('please enter a new pw')

// if (password.length >= 6  && password.indexOf(' ') === -1 ){
//     console.log('valid pw')
// }
// else{
//     console.log('invalid pw')
// }

// ======================OR=========================

// && 가 || 보다 더 먼저 수행된다. (우선순위가 높음)
const age = 90;
if (age >= 0 && age < 5 || age >= 65){
    console.log('free')
}
else if (age >= 5 && age < 10){
    console.log('$10')
}
else if (age >= 10 && age < 65){
    console.log('$20')
}
else{
    console.log('invalid age')
}

// ======================NOT=========================

// const firstName = prompt('enter your first name')

// if (!firstName){
//     firstName = prompt('try again')
// }
// else{
//     console.log(firstName)
// }

// ======================SWITCH=========================

const day = 6;

switch(day){
    case 1 : 
        console.log('Monday');
        break;
    case 2 : 
        console.log('Tuesday');
        break;
    case 3 : 
        console.log('Wednesday');
        break;
    case 4 : 
        console.log('Thursday');
        break;
    case 5 : 
        console.log('Friday');
        break;
    case 6 : 
    case 7 : 
        console.log('Weekend');
        break;
    default:
        console.log('invalid');
        break;
}