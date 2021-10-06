const person = {
    name: 'Munir',
    age: 22,
    job: 'SE'
}

const op = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop ${prop}`)
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error('No ' + prop + ' field in target')
        }
    },
    has(target, prop){
        return ['age', 'name', 'job'].includes(prop)
    },

})

