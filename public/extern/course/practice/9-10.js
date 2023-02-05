const newPerson = [
  {id: 10, name: 'Valera', job: 'welder', age: 23},
  {id: 11, name: 'Ghenadie', job: 'plumber', age: 24},
  {id: 12, name: 'Ana', job: 'engineer', age: 26},
  {id: 13, name: 'Valeria', job: 'artist', age: 25},
  {id: 14, name: 'Anton', job: 'programmer', age: 22}
]

const ProxyArray = new Proxy(newPerson, {
  get(target, index, receiver) {
    return target[index]
  }
})
// Class indexedProxy
const IndexedProxy = new Proxy(Array, {
  construct(target, [content]) {
    // Indexed data by id
    const indexStore = {}
    content.forEach(item => indexStore[item.id] = item)

    return new Proxy(new target(...content), {
      get(target, prop, receiver) {
        switch (prop) {
          case 'push':
            return newItem => {
              indexStore[newItem.id] = newItem
              target[prop].call(target, newItem)
            }
          case 'id':
            return index => indexStore[index]
          default:
            return target[prop]
        }
      }
    })
  }
})

const newPerson1 = new IndexedProxy([
  {id: 10, name: 'Valera', job: 'welder', age: 23},
  {id: 11, name: 'Ghenadie', job: 'plumber', age: 24},
  {id: 12, name: 'Ana', job: 'engineer', age: 26},
  {id: 13, name: 'Valeria', job: 'artist', age: 25},
  {id: 14, name: 'Anton', job: 'programmer', age: 22}
])