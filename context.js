function hello() {
    console.log('Hello', this)
}


const person = {
    name: 'Munir',
    age: 24,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog('HR', '+7(996)-782-9699')

// const fnLenaInfoLog = person.logInfo.bind(lena, 'HR', '+7(996)-782-9699')
// fnLenaInfoLog()'

// person.logInfo.call(lena, 'HR', '+7(996)-782-9699')
// person.logInfo.apply(lena, ['HR', '+7(996)-782-9699'])


const array = [1, 2, 3, 4, 5]

// function multiplyBy(arr, n) {
//     return arr.map(num => num * n)
// }

Array.prototype.multiplyBy = function(n) {
    return this.map(value => value * n)
}


console.log(array.multiplyBy(20));
// console.log(multiplyBy(array, 5))
