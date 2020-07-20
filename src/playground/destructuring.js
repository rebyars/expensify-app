//Objet Destructuring

// const person = {
//     age: 21,
//     location: {
//         city: 'Tuscaloosa',
//         temp: 88
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         publisher: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName);

//Array Destructuring

// const address = ['2510 Saratoga Ln', 'Tuscaloosa', 'Alabama', '35406'];
// const [ , city, state = 'Maryland', ] = address;
// console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , mdCost] = item
console.log(`A medium ${name} costs ${mdCost}`);
