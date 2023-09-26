// 내가 구현함
// howTo = prompt('what would you like to do?')
// todos = []
// while (true) {
//     if (howTo === 'quit') break
//     else if (howTo === 'new') {
//         add = prompt('Enter new todo')
//         if (todos.length === 0) {
//             todos.push([0,add])
//             console.log('successfully added!')
//         }
//         else {
//             todos.push([todos.length, add])
//             console.log('successfully added!')
//         }
//     }
//     else if (howTo === 'list') {
//         console.log('***************')
//         for (let i of todos) {
//             console.log(`${i[0]}: ${i[1]}`)
//         }
//         console.log('***************')
//     }
//     else if (howTo === 'delete') {
//         index = parseInt(prompt('Enter the index you want to delete'))
//         for (let i of todos) {
//             if (i[0] === index) {
//                 todos.splice(index, 1)
//                 console.log('successfully delete!')
//                 for (let i=index; i<todos.length; i++){
//                     todos[i][0] -= 1
//                 }
//             }
//         }
//     }
//     howTo = prompt('what would you like to do?')
// }

//=================================================
// colt
let input = prompt('what would you like to do?')
const todos = [];
while(input !=='quit' && input !== 'q'){
    if (input.toLowerCase() === 'list'){
        console.log('***********************')
        for (let i = 0; i < todos.length; i++){
            console.log(`${i} : ${todos[i]}`);
        }
        console.log('***********************')
    }
    else if (input.toLowerCase() === 'new'){
        const newTodo = prompt('Ok, what is the new to do?')
        todos.push(newTodo)
        console.log(`${newTodo} added to the list`)
    }
    else if(input.toLowerCase()==='delete'){
        const index=parseInt(prompt('Ok, enter an index to delete : '))
        if (!Number.isNaN(index)){ // 만약에 index가 숫자면
            const deleted = todos.splice(index,1)
            console.log(`deleted ${deleted[0]}`) // deleted[0] : str    
        }
        else{
            console.log('invalid index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')