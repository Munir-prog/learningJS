const person = Object.create({}, {
    name: {
        value: 'Munir',
        enumerable: true,
        writable: true
    },
    birthYear: {
        value: 2001,
        enumerable: true,
        writable: true
    }
})

console.log(person)

person.name = 'test'
for (let key in person){
    console.log('Key: ', key, person[key])
}