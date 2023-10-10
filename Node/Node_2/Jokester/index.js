const jokes = require('give-me-a-joke') // 패키지 이름 참조
const colors = require('colors');
// console.dir(jokes)
jokes.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow.underline);
});

// npm 패키지를 전역으로 설치하고싶다면 -g 를 적어주면 된다.
// ex. npm i -g cowsay(패키지이름)

// 만약 node_modules에 쓰기 권한이 없다고 오류가 뜨면 다음과 같이 해결하자
// sudo chown -R $USER /usr/local/lib/node_modules

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));

