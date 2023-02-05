const person = {
  name: 'Vlad',
  age: 25,
  job: 'Fullstack'
}

const op = new Proxy(person, {
  get(target, prop) {
    // Daca nu exista prop-ul dat in target
    if (!(prop in target)) {
      return prop
        .split('_')   //face un array din string-ul dat si citeste fiecare element cu utilizarea delimitatorului '_': ex: op.name_age_job => ['Vlad', 25, 'Fullstack']
        .map(p => target[p]) //trece prin array-ul obtinut si afiseaza valorile obiectului: ex: ['name', 'age', 'job'] => ['Vlad',25,'Fullstack'] (le afisaza)
        .join(' ')   // concateneaza datele din array intr-un string iar fiecare element este despartit de delimitatorul dintre paranteze: ex1: .join('') => "Vlad25Fullstack", ex2: .join(' ') => "Vlad 25 Fullstack"
    }
    return target[prop]
    // target[prop]  -  op.age -> 25
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No found ${prop} into object`)
    }
  },
  has(target, prop) {
    return Object.keys(target).includes(prop)
  },
  deleteProperty(target, prop) {
    console.log('Deleting...', prop)
    delete target[prop]
    return true
  }
})
