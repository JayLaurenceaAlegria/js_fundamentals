// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 36,
//     email: 'steve@gmail.com',
//     hobbies: ['music', 'sport'],
//     address: {
//         city: 'Manila',
//         state: 'NCR'
//     },
//     getBirthYear : function() {
//         return 2019 - this.age;
//     }
// };

// let val; 
// val = person;
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[0];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();
// console.log(val);
const people = [{name: 'john doe', age: 36},{name: 'Mike', age: 22},{name: 'Nancy', age: 36}];

//es5 
for(let i = 0; i < people.length; i++){
    console.log(people[i].age);
}



