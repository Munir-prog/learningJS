
let obj = {name: 'weakMap'}

const map = new WeakMap(
    [
        [obj, 'obj data']
    ]
)

obj = null

console.log(map.get(obj))