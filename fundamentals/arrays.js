// creates some arrays 
const numbers = [43,45,56,34,44,5];
const numbers2 = new Array(22,34,54,76,65);
const fruit = ['apple', 'banana','orange','pear'];
const mixed = [22 , 'banana', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// get array length
// val=numbers.length;             //check the length
// val = Array.isArray(numbers);     // check if array
// val = numbers[3];               // get the third array
// val = numbers[0];              // get the 0 index
// val =numbers[2]=100;                 //  set the 2nd index to 100 
// val = numbers.indexOf(34);          //find index value


// mutating arrays 
// add on to end
// val = numbers.push(21);

// //add on front
// val = numbers.unshift(22);
// // take off from end
// val = numbers.pop();
// val = numbers.shift(); 
// val = numbers.slice(2,3);


// val = numbers.reverse();
// // concatenate array 
// val = numbers.concat(numbers2);

// // sorting arrays 
// // val = fruit.sort();
// // val = numbers.sort();
// // val = mixed.sort();

// // use compare function
// // val = numbers.sort(function(x, y) {
// // return x-y;
// // });
// // val = numbers.sort(function(x, y) {
// // return y-x;
// // });

function over50(num) {
    return num>50;
}
val = numbers.find(over50);


console.log(val);