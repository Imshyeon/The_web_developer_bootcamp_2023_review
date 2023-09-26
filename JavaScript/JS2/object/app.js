const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for (let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`)
// }

// Object.values()
// Object.keys()
// Object.entries()

total=0;
let scores = Object.values(testScores)  // [80, 67, ,,]
for (let score of scores){
    total += score;   
}
console.log(total/scores.length)