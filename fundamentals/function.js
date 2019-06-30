// function declaration : ------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function greet(firstName = 'jhon', lastName='Doe'){
//     if(typeof firstName === 'undefined'){
//         firstName = 'jhon'
//     }
//     if(typeof lastName === 'undefined'){
//         lastName = 'Doe'
//     }
//     console.log('Hello');
//     // return 'hello ' + firstName + ' ' + lastName;
//     return `hello ${firstName} ${lastName}`
// }
// console.log(greet());

//function expression :  ------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const square = function(x = 3, y=5){
//     return x * y
// }

// console.log (square());

// Immediately invokable function expression - IIFE's  ---------------->>>>>>>>>>>>>>>>>>>>>
// (function(){
//     console.log("test IIFE's")
// })();

// (function(name){
//     console.log('hello ' + name);
// })('Jay')


//Property Methods ------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id) {
        console.log(`edit todo ${id}`)
    }
}
todo.delete = function(){
    console.log('delete todo')
}
todo.add();
todo.edit(40);
todo.delete();
