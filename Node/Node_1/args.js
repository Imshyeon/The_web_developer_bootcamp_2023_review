console.log('Hello from Args File')
console.log(process.argv)
// [
//     '/opt/homebrew/Cellar/node/20.8.0/bin/node', -> process.execPath
//     '/Users/gangsuhyeon/Desktop/my/Front-end/The Web Developer Bootcamp 2023/code/Node/args.js' -> 실행하고 있는 파일 경로
//  ]

// node args.js puppies chickens
// =>
// [
//     '/opt/homebrew/Cellar/node/20.8.0/bin/node',
//     '/Users/gangsuhyeon/Desktop/my/Front-end/The Web Developer Bootcamp 2023/code/Node/args.js',
//     'puppies',
//     'chickens'
// ]