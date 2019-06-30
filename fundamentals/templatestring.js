const firstName = 'Jay';
const lastName = 'Alegria';
const age = 21;
const str = 'hello there my name is jay';
const tags = 'Web design, Web Dev and programming';

let val;
// concatenation
val = firstName+ " " + lastName;

// Append
val = 'Jay ';
val += 'Laurence';

val = 'Hello my name is ' + firstName + ' and I am '+ age ;

//escaping 
val= "that's awesome, I can't wait";


//Length 
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val= firstName[2];

//indexof()
val= firstName.indexOf('y');
val= firstName.lastIndexOf('y');
val= firstName.length;

//charAt()
val = firstName.charAt(2);
val = firstName.charAt(1);
//get last char 
val = firstName.charAt(firstName.length-1);             

// substring

val = firstName.substring(0,3);               //string from 0-3

// slice
val= firstName.slice(0,3);                  //slice 0 - 3
val= firstName.slice(-1);
// split 
val=str.split(' ');                        //split into words
val=tags.split('');                     //split into char

// replace 
val = str.replace('jay', 'jack');       //replace jay with jack

// includes
val = str.includes('foo');          //check if there's foo in str
val = str.includes('hello');         //check if there's hello in str


console.log(val);

