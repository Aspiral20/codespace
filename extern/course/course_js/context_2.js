function hello() {
  console.log('Hello\n', this)
}

const personNo1 = {
  name: 'Vladilen',
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info`)
    console.log(`Name is ${this.name}`)
    console.log(`Have ${this.age} age`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}

const lenaNo1 = {
  name: 'Elena',
  age: 23
}

// personNo1.logInfo - apelam functia din personNo1. (this -> 'personNo1')
// .bind(lenaNo1) - facem pe lenaNo1 sa fie parintele lui 'this' (this -> lenaNo1)
personNo1.logInfo.bind(lenaNo1)()

// Apelam functia fnLenaInfoLog() cu parametri. De fapt fnLenaInfoLog este functia din personNo1.logInfo cu (this -> lenaNo1)
const fnLenaInfoLog = personNo1.logInfo.bind(lenaNo1)
fnLenaInfoLog('Frontend', '+353-65-665-636')

fnLenaInfoLog()  // = personNo1.logInfo.bind(lenaNo1)()

// Utilizam prototipe sa arhivam global datele introduse in input.
// Object.prototype.SUBMIT.onclick = () => {
//   personNo1.logInfo.bind(lenaNo1, 'Frontend', Object.prototype.GET_DATA.value)()
// }

// personNo1.logInfo.bind(lenaNo1, 'Frontend', '+353-65-665-636')
// personNo1.logInfo.call(lenaNo1, 'Frontend', '+353-65-665-636')
personNo1.logInfo.apply(lenaNo1, ['Frontend', '+353-65-665-636'])


//=========================== PROTOTYPE + CONTEXT ============================

// Ex.1
const array = [1, 2, 3, 4, 5]

// Default mulBy
// function mulBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n
//   })
// }
// console.log(mulBy(array,5))

// This - partea stanga de dupa " . "
Array.prototype.mulBy = function (n) {
  return this.map(i => i * n)
}

console.log(array.mulBy(5))
