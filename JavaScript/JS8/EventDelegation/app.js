// const lis = document.querySelectorAll('li')
// for (let li of lis){
//     li.addEventListener('click',function(){
//         li.remove()
//     })
// }

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
    newTweet.append(` - ${tweet}`)
    tweetsList.append(newTweet)
}

tweetsList.addEventListener('click',function(e){
    console.log(e) // target : li
    e.target.nodeName === 'LI' && e.target.remove();
    // e.target.remove()
})