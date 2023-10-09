const fs = require('node:fs');
const folderName = process.argv[2] || 'Project' // 이름이 주어지지 않으면 Project로 파일 생성

// async 버전 (비동기)
// fs.mkdir('Cats', { recursive: true }, (err) => {
//     console.log('IN THE CALLBACK')
//     if (err) throw err;
//   }); 

// sync (동기)
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, 'index')
    fs.writeFileSync(`${folderName}/app.js`, 'app JS')
    fs.writeFileSync(`${folderName}/styles.css`, 'CSS')
}
catch(err){
    console.log("SOMETHING WENT WRONG")
    console.log(err)
}