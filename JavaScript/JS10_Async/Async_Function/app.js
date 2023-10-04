// ----- async keyword -----

// async 자체가 함수를 비동기로 하겠다... 라는 의미. 함수는 자동으로 Promise를 반환
// async function hello(){

// }


// const sing = async () => {
//     throw ('OH NO! PROBLEM!')
//     return 'LA LA LA LA'
// }

// sing()
//     .then(data => {
//         console.log('PROMISE RESERVED WITH :', data)
//     })
//     .catch(err => {
//         console.log('ERROR :', err)
//     })


const login = async (username, pw) => {
    if (!username || !pw) throw 'Missing Credentials'
    if (pw === 'lovecat') return 'Welcome'
    throw 'Invalid Password'
}

login('suuuu', 'lovecat')
    .then(msg => {
        console.log('Logged in ||', msg)
    })
    .catch(err => {
        console.log('ERROR ||', err)
    })


// ----- await keyword -----

// 역할 : Promise가 값을 전달하기 전까지 비동기 함수의 실행을 일시 정지.
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'ALL DONE!'
}

// rainbow()
//     .then((data) => console.log('END OF RAINBOW...', data))

async function printRainbow() {
    await rainbow()
    console.log('End of Rainbow')
}

printRainbow()


// ----- 오류 처리하기 -----

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests(){
    try{ // 오류가 될 코드가 있으면
        let data1 = await fakeRequest('/page1') // pending
        console.log(data1) 
        let data2 = await fakeRequest('/page2') // pending
        console.log(data2) 
    }
    catch(e){ // 해당 오류를 어떻게 처리?
        console.log('CAUGHT AN ERROR')
        console.log('ERROR IS..', e)
    }
}