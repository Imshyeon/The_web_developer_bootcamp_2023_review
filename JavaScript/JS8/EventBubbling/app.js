const button = document.querySelector('#changeColor')
const container = document.querySelector('#container')

button.addEventListener('click',function(e){
    container.style.backgroundColor = makeRandColor()
    e.stopPropagation(); //이벤트가 더이상 버블링하지 않도록 막음
})

container.addEventListener('click',function(){
    container.classList.add('hide')
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}