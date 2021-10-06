function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

const calc = createCalcFunction(55)

// calc()

function createIncrementor(n) {
    return function (num){
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

// console.log(addOne(10))
// console.log(addTen(15))

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
console.log(comUrl('google'))
console.log(comUrl('netflix'))


function bind(context, fn){
    return function (...args) {
        fn.apply(context, args)
    }
}

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Mixa',
    age: 22,
    job: 'HR'
}

const person2 = {
    name: 'Tom',
    age: 19,
    job: 'SMM'
}

bind(person1, logPerson)()
bind(person2, logPerson)()