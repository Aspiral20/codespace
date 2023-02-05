
// Ex. 1

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n) //n - closure
//   }
// }
//
// const calc = createCalcFunction(42)

// Ex. 2

// function createIncrementer(n) {
//   return function (num) {
//     return n + num
//   }
// }
//
// createIncrementer(10)(2)
//
// const addOne = createIncrementer(1)
// const addTen = createIncrementer(10)
//
// console.log(addOne(10))
// console.log(addOne(41))
//
// console.log(addTen(10))
// console.log(addTen(41))

// Ex. 3

// function urlGenerator(domain) {
//   return function (url) {
//     return `https//${url}.${domain}`
//   }
// }
//
const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')
//
// console.log(comUrl('google'))
// console.log(comUrl('netflix'))
//
// console.log(ruUrl('yandex'))
// console.log(ruUrl('vkontakte'))

// Sobes ex:

function logPerson (children = 0, wife = 0) {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}\n`)
  if (children && this.children) console.log(`Children: ${this.children}\n`)
  if (wife && this.wife) console.log(`Wife: ${this.wife.name}, ${this.wife.age}, ${this.wife.job}\n`)
}

const person1 = {name: 'Miha', age: 22, job: 'Frontend', children: 3, wife: {name: 'Angela', age: 21, job: 'Felcer'}}
const person2 = {name: 'Van', age: 25, job: 'SMM', children: 4, wife: {name: 'Anna', age: 24, job: 'Teacher'}}
const person3 = {name: 'Van', age: 25, job: 'SMM'}

// My Realisation
function fBind (person, logPerson) {
  logPerson.call(person)
}

// Video's Realisation
function fBind1(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

// Result
// fBind(person1, logPerson)
// fBind(person2, logPerson)
const children = true;
const wife = true;

fBind1(person1, logPerson)(children,wife)
console.log('\n')
fBind1(person2, logPerson)(children,wife)
console.log('\n')
fBind1(person3, logPerson)(children,wife)
console.log('\n')
fBind1(person1, logPerson)(children)
console.log('\n')
fBind1(person1, logPerson)(!children,wife)
console.dir(fBind1())
console.log('\n')
fBind1(person1, logPerson)()