//Numbers
// const num = 43
// const numFloat = 42.42
// const numPow = 10e3
// console.log(num)
// console.log(numFloat)
// console.log(numPow )
//
//
// function getRandom(max, min){
//     return Math.floor(Math.random() * (max - min) + min)
// }
//
// console.log(getRandom(9, 5));
//
// const name = 'Vladilen'
//
// console.log(name.indexOf('lin'))
// let counter = 0;
//
// const interval = setInterval(function (){
//     if (counter === 5){
//         clearInterval(interval)
//     }else {
//         console.log(++counter)
//     }
// }, 500)

const arr = [1, 2, 3, 4, 5, 9, 7, 4, 8]
//
// arr.push(10)
// arr.unshift(0)
//
// console.log(arr)
// console.log(arr.reverse())


// Task 1

// const text = 'Hello, we are learning JavaScript';
// const arrayText = text.split('').reverse().join('');
// console.log(arrayText)

// Task 2

const people = [
    {name: 'Munir', salary: 5000},
    {name: 'Jake', salary: 1500},
    {name: 'Alice', salary: 7000},
]

const cars = ['car1', 'car2', 'car3']

const uppercaseCars = cars.map(car => car.toUpperCase())
console.log(uppercaseCars)

const index = people.findIndex(
    (person) => person.salary === 7000
)

const person1 = people.find(person => person.salary === 7000)

console.log(index)

console.log(person1)

const toSquare = arr.map(x => x * x).map(Math.sqrt)
console.log(toSquare)

const allSalary = people
    .filter(person => person.salary > 2000)
    .reduce((acc, person) => acc += person.salary, 0)
console.log(allSalary)