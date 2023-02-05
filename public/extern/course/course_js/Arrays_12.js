const people = [
  {name: 'Van', age: 23, budget: 4000},
  {name: 'Anat', age: 25, budget: 3000},
  {name: 'Recan', age: 20, budget: 4500},
  {name: 'Nudin', age: 41, budget: 10000},
  {name: 'Vanic', age: 21, budget: 2000},
  {name: 'Anatol', age: 20, budget: 3200},
  {name: 'In', age: 23, budget: 8000}
]

const numbers = [
  123,
  43,
  54,
  53,
  545,
  52,
  99,
]

const numbers1 = [
  'dasd',
  'sad',
  'agggd',
  'hht',
  'vfv',
]

// const name = 'Anatol'
// const anat = people.arrayMethod('findIndex')(item => item.name === name)
// anat === -1 ? console.log(`Not found '${name}'`) : console.log(`${name}'s index: ` + anat)

// const newArr = people.arrayMethod('sort')(['age'], 'object').arrayMethod('join')(item => `Name: ${item.name}, Age: ${item.age}`, '\n')
// console.log(newArr)

// const newNumArr = numbers1.arrayMethod('sort')('array')
// console.log(newNumArr)

const isCheapest = people.arrayMethod('every')(item => item.budget < 11000)
console.log(isCheapest)

// Example: const newArr = people.arrayMethod('sort')('age').arrayMethod('join')(item => `Name: ${item.name}, Age: ${item.age}`, '\n')
// Out
// Name: Recan, Age: 20
// Name: Anatol, Age: 20
// Name: Vanic, Age: 21
// Name: Van, Age: 23
// Name: In, Age: 23
// Name: Anat, Age: 25
// Name: Nudin, Age: 41

let getInputValue;
Object.prototype.SUBMIT.addEventListener('click', () => {
  getInputValue = Object.prototype.GET_DATA.value
  
  const newPeople = people
    .filter(person => person.budget > parseInt(getInputValue))
    .map(person => {
      return {
        info: `${person.name} (${person.age})`,
        budget: person.budget
      }
    })
  const amount = newPeople.reduce((total,person) => total + person.budget, 0)

  console.log(newPeople)
  console.log(amount)
})

//Destructuring
