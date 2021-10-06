const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: () => {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = () => {
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'
