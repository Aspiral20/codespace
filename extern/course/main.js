Object.prototype.GET_DATA = document.getElementById('GET_DATA')
Object.prototype.SUBMIT = document.getElementById('SUBMIT')

Array.prototype.mulBy = function (n) {
  return this.map(i => i * n)
}
//array.mulBy(2)
Array.prototype.allEqual = function () {
  return this.every(item => item === this[0])
}

// array.arrayMethod(method)(params)
Array.prototype.arrayMethod = function (method) {
  const target = this

  switch (method) {
    case 'forI':
      for (let i = 0; i < this.length; i++) {
        console.log(this[i])
      }
      break
    case 'forOf':
      for (let item of this) {
        console.log(item)
      }
      break
    case 'forEach':
      this.forEach(item => {
        console.log(item)
      })
      break
    case 'map':
      return this.map(item => {
        return item
      })
    case 'filter':
      try {
        // ('filter')(item => item.age > 20)
        // (method)(callback)
        return function (callback) {
          try {
            return target.filter(callback)
          } catch (e) {
            if (!callback) {
              console.error('Can\'t read property \'undefined\'. function()(undefined)')
              console.log('Array:', target)
            } else {
              console.error(e)
            }
          }
        }
      } catch (e) {
        console.error(e)
      }
      break
    case 'reduce':
      // use: array.showConsoleArray('reduce')((total, people) => total + people.budget, 0)
      // (method)(callback)
      return function (callback, initial) {
        try {
          if (initial || typeof initial === "number") {
            return target.reduce(callback, initial)
          } else {
            throw new Error('\'Initial\' parameter undefined.')
          }
        } catch (e) {
          if (!callback) {
            console.error('Can\'t read property \'undefined\'. function()(undefined)')
            console.log('Array:', target)
          } else {
            console.error(e)
          }
        }
      }
    case 'find':
      return function (callback) {
        try {
          return target.find(callback)
        } catch (e) {
          if (!callback) {
            console.error('Can\'t read property \'undefined\'. function()(undefined)')
            console.log('Array:', target)
          } else {
            console.error(e)
          }
        }
      }
    case 'findIndex':
      return function (callback) {
        try {
          return target.findIndex(callback)
        } catch (e) {
          if (!callback) {
            console.error('Can\'t read property \'undefined\'. function()(undefined)')
            console.log('Array:', target)
          } else {
            console.error(e)
          }
        }
      }
    case 'sort':
      return function (typeField, field) {
        const validateSort = function (callback) {
          return target.map(callback).allEqual()
        }
        const validateCase = function () {
          switch (typeField) {
            case 'object':
              return validateSort(item => typeof item[field])
            case 'array':
              return validateSort(item => typeof item)
          }
        }

        const validateType = validateCase()

        try {
          if (validateType) {
            switch (typeField) {
              case 'object':
                if (typeof target[0][field] === 'number') {
                  // Get key: a.foo / a['foo']
                  return target.sort((a, b) => a[field] - b[field])
                }
                if (typeof target[0][field] === 'string') {
                  return target.sort((prev, curr) => {
                    const prevElement = prev.name.toUpperCase();
                    const currElement = curr.name.toUpperCase();
                    if (prevElement < currElement) {
                      return -1;
                    }
                    if (prevElement > currElement) {
                      return 1;
                    }
                    // previous === current
                    return 0;
                  })
                }
                break
              case 'array':
                if (typeof target[0] === 'number') {
                  return target.sort((prev, curr) => prev - curr)
                }
                if (typeof target[0] === 'string') {
                  return target.sort((prev, curr) => {
                    const prevEl = prev.toUpperCase()
                    const currEl = curr.toUpperCase()
                    if (prevEl < currEl) {
                      return -1;
                    }
                    if (prevEl > currEl) {
                      return 1;
                    }
                    // previous === current
                    return 0;
                  })
                }
                break
              default:
                throw new Error('Type of field required undefined')
            }
          } else {
            throw new Error('Element\'s type from this field are not Equal/Undefined')
          }
        } catch (e) {
          console.error(e)
        }
      }
    case 'every':
      return function (callback) {
        //array.arrayMethod('every')(item => item.budget < 11000) //true
        try {
          return target.every(callback)
        } catch (e) {
          console.error(e)
        }
      }
    case 'join':
      return function (callback, separator) {
        try {
          //people.showConsoleArray('join')(item => item.budget, ',')
          return target.map(callback).join(separator)
        } catch (e) {
          console.error(e)
        }
      }
    default:
      console.group('Array.prototype.function')
      console.error(`Invalid method: '${method}'`);
      console.info(`Usable methods: forI, forOf, forEach, map, filter, reduce, find, findIndex, sort`);
      console.info(`Return methods: map, filter, reduce, find, sort, every, join`);
      console.info(`Closure methods: filter, reduce, find, sort, every, join`);
      console.groupEnd()
  }
}