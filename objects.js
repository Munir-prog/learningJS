const person = {
    name: 'Munir',
    surname: 'Zikrullaev',
    email: 'munirprog@gmail.com',
    age: 20,
    salary: 10000,
    languages: ['ru', 'en', 'tj'],
    greet: value => console.log('Hello, ' + value)
}



person.greet('Munir')


const logger = {
    keys(){
        console.log('Object keys: ', Object.keys(this))
    },

    keysAndValues(){
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    }
}

// const bound = logger.keys().bind(person)
// bound()
// logger.keys().call(person)

logger.keysAndValues.call(person)