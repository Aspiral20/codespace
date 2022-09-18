// Wrapper
// position.x = 24
// position.y = 42
// position.z = 0

const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
  })
}

const position = withDefaultValue({x: 24, y: 42})
console.log(position)

// void 0 = undefined

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
    ownKeys: obj => Reflect.ownKeys(obj)
      .filter(p => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver)
      ? obj[prop]
      : void 0
  })
}
const data = withHiddenProps({
  name: 'Vlad',
  age: 25,
  _uid: '12312331'
})


// Optimization
const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {}
    args.forEach(item => index[item.id] = item)

    // return new target(...args)
    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return item => {
              index[item.id] = item
              arr[prop].call(arr, item)
            }
          case 'findById':
            return id => index[id]
          default:
            return arr[prop]
        }
      }
    })
  }
})

const userData = new IndexedArray([
  {id: 1, name: 'Vlad', job: 'Fullstack', age: 25 },
  {id: 2, name: 'Lena', job: 'Student', age: 22 },
  {id: 3, name: 'Victor', job: 'Backend', age: 23 },
  {id: 4, name: 'Vasile', job: 'Teacher', age: 24 },
])
// const index = {}  //bagam in stack array-ul de obiecte
// userData.forEach(i => (index[i.id] = i))