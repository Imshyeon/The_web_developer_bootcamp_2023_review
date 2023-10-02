const btn = document.querySelector('button')
const heading = document.querySelector('h1')

btn.addEventListener('click',()=>{
    const newColor = makeRandomColor()
    let r = parseInt(newColor.split(',')[0])
    let g = parseInt(newColor.split(',')[1])
    let b = parseInt(newColor.split(',')[2])
    console.log(r+g+b)
    if ((r+g+b) <= 230){
        heading.style.color = 'white';
    }
    else{
        heading.style.color = 'black';
    }
    document.body.style.backgroundColor = `rgb(${newColor})`;;
    heading.innerText = `rgb(${newColor})`;
})

const makeRandomColor = () =>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `${r},${g},${b}`;
}