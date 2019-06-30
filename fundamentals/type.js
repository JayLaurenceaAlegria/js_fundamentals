let val;
//number to string
val = String(555);
val = String(4 + 4);


//bolean to string
val = String(true);
//date of string
val = String(new Date());
//arrays to string
val= String([1,2,3,4]);

//toString
val = (5).toString();
val = true.toString();

//string to number 
val= Number('5');
val= Number(true);
val= Number(null);
val= Number(undefined);
val = parseInt('10.30');
val = parseFloat('10.322222222222222222');
val= Number([1,2,3]);
val = [1,2,3,4,5];

//output

// console.log(typeof val);
// console.log(val.length);
const val1 = String(5);
const val2 = 6
const sum = Number (val1 + val2);
console.log(sum);