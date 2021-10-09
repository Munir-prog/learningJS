const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

console.log(set)

set.add(30).add(50).add(80)

console.log(set)

console.log(set.has(50));

console.log(set.size)

console.log(set.delete(2))
console.log(set.has(2))
// set.clear()
// console.log(set.size);

console.log(set.entries())


