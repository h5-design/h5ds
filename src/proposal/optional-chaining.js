let a = null
let b = { a: 1 }

console.log(a?.b, a == null ? undefined : b)
console.log(b?.a, b == null ? undefined : b.a)
