let Dog = {
  name: 'dog',
  sayName() {
    return this.name
  }
}
let Cat = { name: 'cat' }

console.log(Dog.sayName())
console.log(Cat::Dog.sayName())
