const input = document.querySelector('input');
const h1 = document.querySelector('h1')

// input.addEventListener('change',function(e){
//     console.log('dajsdsfadfagf')
// }) // change : 입력 후 다른 곳을 클릭(blur) 할 때 적용

input.addEventListener('input',function(e){
        // console.log('INPUT!')
        // console.log(e)
        h1.innerText = input.value
}) // input과 동시에 적용.