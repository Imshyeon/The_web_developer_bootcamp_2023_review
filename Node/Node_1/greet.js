const args = process.argv.slice(2); // 0번, 1번은 필요없으니까..

for (let arg of args){
    console.log(`Hi there, ${arg}`);
}

// node greet.js suhyeon zoe
// Hi there, suhyeon
// Hi there, zoe