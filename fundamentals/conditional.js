// if (something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// equal to 
// if(id == 100){
// console.log('Correct');
// }
// else {
//     console.log('Incorret')
// }
// // not equal
// if(id != 101){
// console.log('Correct');
// }
// else {
//     console.log('Incorret')
// }

// if (id === 100){
//     console.log('Correct');
// }
// else{
//     console.log('Incorrect')
// }

// if (typeof id !=='undefined'){
//     console.log(`The id is ${id}`);
// }
// else {
//     console.log('no ID');
// }

// if(id <= 100){
//     console.log ('Correct')
// }
// else{
//     console.log('Incorrect')
// }

// const color = 'yellow';
// // if else
// if (color === 'red'){
//     console.log('color is red');
// }
// else if (color === 'blue'){
//     console.log('color is blue')
// }
// else {
//     console.log('not red and not blue')
// }

// // logical Operators 
// const name = 'steve'
// const age = 70;

// // condition
// if (age>0 && age < 12){
//     console.log(`name ${name} is a child`);
// }
// else if (age >= 13 && age <=19){
//     console.log('teenage');
// }
// else {
//     console.log('adult');
// }

// //OR || 

// if (age<16 || age >65){
//     console.log(`name ${name} cannot run in a race`);
// }
// else{
//     console.log(`name ${name} is register for the race`);
// }

//ternary operator
console.log(id === 100 ? 'correct' : 'incorrect');

// without braces 
if(id === 100)
    console.log('correct');
    else
    console.log('incorrect');