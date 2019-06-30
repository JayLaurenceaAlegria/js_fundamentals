// for loop ------------------------------------------------------>>>>>>>>>>>>>>>>
for(let i = 1; i < 10; i++){
if(i === 2){
    console.log('2 is my fav number');
    continue;
    }

// if(i===5){
//     console.log('Stop the loop');
//     break;
// }
// console.log('Number '+ i);
// }

// while loop ----------------------------------------------------->>>>>>>>>>>>>>>>>>>>>
// let i = 0;

// while(i<10){
//     console.log('number '+ i);
//     i++
// }

// do while 
// let i = 1;
// do{
//     console.log ('Number '+ i);
//     i++;
// }
// while (i<10);

// const cars = ['Ford','chevy','honda','toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// cars.forEach(function(cars){
//     console.log(` ${cars}`);
// });

//map 
const user = [{id : 1, name: 'jhon'},{id : 2, name: 'sara'},{id : 3, name: 'steve'}];

const ids = user.map(function(user){
return user.name;
})
console.log(ids)

// for in loop
const user = {
    firstName: 'jhon',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
console.log(`${x}: ${user[x]}`);
}