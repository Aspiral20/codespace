const date = new Date;
const year = date.getFullYear()

const person = Object.create(
  {
    calculateAge() {
      console.log(`Age: ${year - this.birthYear}`)
    }
  },
  {
    name: {
      value: 'Vladilen',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1993,
      enumerable: false,
      writable: true,
    },
    age: {
      get() {
        return year - this.birthYear
      },
      set(val) {
        console.log('Person age ' + val)
      },
    }
  }
)


//Enumerable example: (for in merge si prin prototype-ul obiectului dat)
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('Key', key, person[key])
  }
}

// Writable example:
person.name = 'Maxim'

// Configurable example:
// delete person.name;