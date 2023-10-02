document.querySelector('button').addEventListener('click', function(evt){
    console.log(evt)
})

const input = document.querySelector('input')
input.addEventListener('keydown',function(e){
    console.log(e.key)  // 어떤 키가 눌렸는지 알고 싶을 떼
    console.log(e.code) // 키가 제대로 눌렸고 왼쪽인지 오른쪽인지 알고 싶을 때
})

// input.addEventListener('keyup',function(){
//     console.log('KEYUP')
// })

window.addEventListener('keydown',function(e){
    switch(e.code){
        case "ArrowUp":
            console.log('UP!'); 
            break;
        case "ArrowDown":
            console.log('Down!');
            break;
        case "ArrowLeft":
            console.log('Left!');
            break;
        case "ArrowRight":
            console.log('Right!');
            break;
        default:
            console.log('IGNORED!')
    }
})

