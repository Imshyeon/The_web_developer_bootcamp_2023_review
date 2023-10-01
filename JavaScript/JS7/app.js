// const allImages = document.getElementsByTagName('img')

// for (let img of allImages){
//     console.log(img.src)
// }

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
}

//======================= querySelector ==========================
document.querySelector('#banner')
document.querySelector('p')
document.querySelector('.square')
document.querySelector('img:nth-of-type(2)')

document.querySelectorAll('p')
document.querySelectorAll('p a') // p 안의 모든 a

const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href)
}


//======================= innerHTML, textContent & innerText ==========================
const h1 = document.querySelector('h1')
console.dir(h1)

// document.querySelector('p').innerText = 'lololol'; // 안의 모든 콘텐츠를 보여주지 않고 어느 것은 hidden

document.querySelector('p').textContent //안의 모든 콘텐츠를 보여줌

// const allLinks = document.querySelectorAll('a');
// for (let link of allLinks){
//     link.innerText = 'I AM A LINK'; 
// }

document.querySelector('h1').innerHTML
document.querySelector('h1').innerHTML = '<i>Silkie Chickens</i>'
document.querySelector('h1').innerHTML += '<sup>Asdfsdgasg</sup>'


//======================= Properties & Methods 1 ==========================
document.querySelector('#banner').id // "banner". id 변경 가능
document.querySelector('#banner').src
document.querySelector('a').href
document.querySelector('a').title


const firstLink = document.querySelector('a')
firstLink.href
firstLink.getAttribute('href')
firstLink.getAttribute('title')
firstLink.setAttribute('href', 'http://www.google.com')

const input = document.querySelector('input[type="text"]')
input.type
input.type = 'password'
input.type = 'color'
input.setAttribute('type', 'text')

//======================= Properties & Methods 2 ==========================
h1.style // 카멜 케이스 사용
h1.style.color // "" . css 작성한 내용이 안 나옴. 대신 js에서 직접 style=""로 설정한 애들은 나옴.

// h1.style.color = 'green'
// h1.style.fontSize = '3em'
// h1.style.border = '2px solid pink' // 선호되는 방법은 아님.

const allLinks = document.querySelectorAll('a')
for (let link of allLinks) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

//default
window.getComputedStyle(h1)
window.getComputedStyle(h1).fontSize
window.getComputedStyle(h1).fontFamily
window.getComputedStyle(h1).marginLeft
window.getComputedStyle(h1).margin


//======================= ClassList ==========================
const h2 = document.querySelector('h2')
h2.classList.add('purple')
h2.classList.add('border')
h2.classList.remove('border')
h2.classList.contains('border') // false
h2.classList.contains('purple') // true
h2.classList.toggle('border') // border o
h2.classList.toggle('border') // border x
h2.classList.toggle('border') // border o


//======================= 계층이동 ==========================
//-----parent/child-----
const firstBold = document.querySelector('b')
firstBold.parentElement
firstBold.parentElement.parentElement

const paragraph = firstBold.parentElement
paragraph.children
paragraph.children[0]

//-----sibling-----

const squareImg = document.querySelector('.square')
squareImg.nextSibling // nextElementSibling과는 다르게 노드를 나타냄. => 결과 : #text => 이유 : 어떤 브라우저는 새 줄을 자동으로 텍스트 노드로 만듦.
squareImg.previousSibling

squareImg.nextElementSibling // img
squareImg.previousElementSibling // p


//======================= Append & AppendChild ==========================
//-----appendChild-----
const newImg = document.createElement('img')
console.dir(newImg)
newImg.src = 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80'
//1. 페이지 추가 방법 1
document.body.appendChild(newImg) // 마지막에 추가
newImg.classList.add('square')
//2. 페이지 추가 방법 2
const newH3 = document.createElement('h3')
newH3.innerText = 'I AM NEW'
document.body.appendChild(newH3)

//-----append-----
const p = document.querySelector('p')
p.append('I am new text yaaaayy!!')
p.append('I am new text yaaaayy!!', '가나다라마바사아자차카타파하')

const newB = document.createElement('b')
newB.append('안녕하세용용용용')
p.prepend(newB)

//-----insertAdjacentElement-----
const newH2 = document.createElement('h2')
newH2.append("Are adorable chickens")
h1.insertAdjacentElement('afterend', newH2)
h1.nextElementSibling // h2

//-----after, before-----
const testH3 = document.createElement('h3')
const testH3_2 = document.createElement('h3')
testH3.innerText = 'I AM H3'
testH3_2.innerText = 'I AM H3 TOO'
newH2.after(testH3)
newH2.before(testH3_2)

// for (let i = 0; i < 100; i++) {
//     const myButton = document.createElement('button')
//     myButton.innerText='Hey!'
//     document.getElementById('container').appendChild(myButton)
// }

//======================= removeChild & remove ==========================
//----- removeChild -----
const firstLi = document.querySelector('li')
const ul = firstLi.parentElement
ul.removeChild(firstLi)

const b = document.querySelector('b')
b.parentElement.removeChild(b)  //안녕하세용용용용 이 사라짐

//----- remove -----
const imgD = document.querySelector('img:nth-of-type(5)')
imgD.remove() // 고양이 사진 사라짐
