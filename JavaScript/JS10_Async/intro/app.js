const multiply = (x,y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) =>{
    square(a) + square(b) === square(c)
}

isRightTriangle(3,4,5)

//===================== WebAPI와 단일 스레드 ========================
console.log('sending request to server')
setTimeout(()=>{ // 브라우저에서 3초 있다가 실행하도록 함
    console.log('here is your data from the server...')
},3000)
console.log('i am at the end of the file!')

//===================== Callback ========================

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red'
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = 'blue'
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
        doNext && doNext(); // doNext가 있다면...
    }, delay)
}

delayedColorChange('red',1000, ()=>{
    delayedColorChange('orange',1000,()=>{
        delayedColorChange('yellow',1000,()=>{
            delayedColorChange('green',1000,()=>{
                delayedColorChange('blue',1000,()=>{
        
                })
            })
        })
    })
})


searchMoviesAPI('darkknight',()=>{
    saveToMyDB(movies, ()=>{
        // 성공한다면 여기가 수행
    }, () => {
        // 실패한다면 여기가 수행
    })
}, () => {
    // API가 작동이 안되거나, request failed인 경우.
})


