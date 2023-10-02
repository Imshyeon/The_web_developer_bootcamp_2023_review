//======================= Inline Event ==========================

const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('YOU CLICKED ME')
    console.log('I HOPE IT WORKED!')
}

function scream(){
    console.log('AHHHHHH')
    console.log('stop touching me')
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('YOU CLICKED THE H1!')
}

//----- addEventListener -----
const btn3 = document.querySelector('#v3')
btn3.addEventListener('mouseup',()=>{ // dblclick : double click
    alert('CLICKED!')                 // mouseup : 클릭 후 마우스를 떼면 동작.
})

function twist(){
    console.log('TWIST')
}
function shout(){
    console.log('SHOUT')
}

const tasButton = document.querySelector('#tas')
// tasButton.onclick = twist;
// tasButton.onclick = shout; // shout만 출력이 됨.

tasButton.addEventListener('click', twist, {once:true}) // once:true => 해당 이벤트가 발생될 때 처음으로 딱 한번 실행하고 그 다음은 안 함.
tasButton.addEventListener('click', shout)

