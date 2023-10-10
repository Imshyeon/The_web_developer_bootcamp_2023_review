const add = (x,y) => x + y;

const PI = 3.141592;

const square = x => x * x;

// ----- 방법 4 -----
exports.add = add;
exports.square = square;
exports.PI = PI;


// ----- 방법 3 -----
// module.exports.add = (x,y) => x + y;
// module.exports.PI = 3.141592;
// module.exports.square = x => x * x;


// ----- 방법 2 -----
// const math = {
//     add : add,
//     PI : PI,
//     square : square
// }
// module.exports = math


// ----- 방법 1 -----
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;