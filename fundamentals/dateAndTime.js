let val; 
const today = new Date();
let birthday = new Date('5-13-1983 11:25:00');
// let birthday = new Date ('May 13 1983');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getHours();
val = today.getMinutes();
val = today.getMilliseconds();

val = birthday.setMonth(2);
val = birthday.setDate(12);
val = birthday.setFullYear(1983);
console.log(val);