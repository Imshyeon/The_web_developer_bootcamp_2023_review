//====================== My Form =========================
const form = document.querySelector('#shelterForm')
const input = document.querySelector('#catName')
const list = document.querySelector('#cats')

form.addEventListener('submit',function(e){
    e.preventDefault(); // 화면이 다른 url로 넘어가지 않도록. 특정 이벤트의 기본 동작이 작동하지 않도록 하기 위해서 사용
    const catName = input.value
    const newLI = document.createElement('li');
    newLI.innerText = catName
    console.log(newLI)
    // list.appendChild(newLI)
    list.append(newLI)
    input.value = ""
})

//====================== Form Events =========================
const tweetForm = document.querySelector('#tweetForm')
const tweetsList = document.querySelector('#tweetsList')

tweetForm.addEventListener('submit',function(e){
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[1];
    // const tweetInput = document.querySelectorAll('input')[2];
    const usernameInput = this.elements.username; // this = tweetForm
    const tweetInput = this.elements.tweet; // this = tweetForm
    addTweet(usernameInput.value,tweetInput.value)
    usernameInput.value = ""
    tweetInput.value = ""
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(username)
    newTweet.append(bTag)
    newTweet.append(`- ${tweet}`)
    tweetsList.append(newTweet)
}

// 테스트
// const form = document.querySelector('form');
// const productList = document.querySelector('#list');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const productInput = this.elements.product;
//     const qtyInput = this.elements.qty;
    
//     const newLI = document.createElement('li');
//     newLI.innerText = `${qtyInput.value} ${productInput.value}`;
//     productList.appendChild(newLI);
//     document.body.appendChild(productList);
    
//     productInput.value = "";
//     qtyInput.value = "";
// })

// 수정
// const form = document.querySelector('form');
// const productList = document.querySelector('#list');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const productInput = this.elements.product;
//     const qtyInput = this.elements.qty;
//     addList(productInput,qtyInput)
//     productInput.value = "";
//     qtyInput.value = "";
// })

// const addList = (productInput,qtyInput) => {
//     const newLI = document.createElement('li');
//     newLI.innerText = `${qtyInput.value} ${productInput.value}`;
//     productList.appendChild(newLI);
//     document.body.appendChild(productList);
// }