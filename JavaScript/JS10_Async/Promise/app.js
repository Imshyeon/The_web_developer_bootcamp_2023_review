//===================== Promise intro ========================
// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//----- callback -----
// fakeRequestCallback('www.google.com/page1',
//     function (response) {
//         console.log('IT WORKED')
//         console.log(response)
//         fakeRequestCallback('www.google.com/page2',
//             function (response) {
//                 console.log('IT WORKED AGAIN')
//                 console.log(response)
//                 fakeRequestCallback('www.google.com/page3',
//                     function (response) {
//                         console.log('IT WORKED 3')
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log('FAILED 3')
//                         console.log(err)
//                     })
//             },
//             function (err) {
//                 console.log('FAILED second')
//                 console.log(err)
//             })
//     }, function (err) {
//         console.log('FAILED')
//         console.log(err)
//     })



//----- promise -----
// const request = fakeRequestPromise('yelp.com/api/coffee')
// request.then(() => console.log('it worked')) //성공

// request
//     .then(() => {
//         console.log('PROMISE RESOLVED')
//         console.log('it worked')
//     })
//     .catch(() => {
//         console.log('PROMISE REJECTED')
//         console.log('oh no.. error')
//     })



// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('IT WORKED!!!! (page1) ')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('IT WORKED!!!! (page2) ')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('IT WORKED!!!! (page3) ')
//                     })
//                     .catch(() => {
//                         console.log('ERROR (page3)')
//                     })
//             })
//             .catch(() => {
//                 console.log('ERROR (page2)')
//             })
//     })
//     .catch(() => {
//         console.log('ERROR (page1)')
//     })


// ------------------- Promise 개선 --------------------
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('IT WORKED!!!! (page1) ')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data)=>{
        console.log('IT WORKED!!!! (page2) ')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data)=>{
        console.log('IT WORKED!!!! (page3) ')
        console.log(data)
    })
    .catch((err)=>{
        console.log('OH NO, A REQUEST FAILED')
        console.log(err)
    })