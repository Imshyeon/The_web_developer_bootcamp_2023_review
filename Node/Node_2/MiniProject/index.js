//========================= 나 ==========================
const str = process.argv[2]
const fr = require('franc')
const lan = require('langs')
require('colors')

const countryName = fr(str)
// // console.log(countryName)

// if(countryName === 'vec'){
//     console.log('잘못 입력하셨습니다.. 다시 입력해주세요'.red)
// }
// else if(countryName === 'und'){
//     console.log('너무 짧습니다. 조금 더 긴 문장을 쓰세요'.yellow)
// }
// else{
//     console.log(lan.where('2T', countryName).name)
// }

// usage : node index.js '안녕하세요 반갑습니다 한국어를 예시로 들고 있습니다.'
// result : Korean

//========================= colt ==========================

if (countryName === 'und'){
    console.log('너무 짧습니다. 더 긴 문장을 쓰세요.'.red)
}
else{
    const language = lan.where('3', countryName)
    console.log(`언어 : ${language.name}`.green)
}


