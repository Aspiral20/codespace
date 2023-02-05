// Afisaza continutul din variabila generator
function showValueGenerator(variable) {
  while (true) {
    let generate = variable.next()

    if (generate.done) {
      break;
    }
    console.log(generate.value)
  }
}

function * strGenerator() {
  yield 'H'
  yield 'e'
  yield 'l'
  yield 'l'
  yield 'o'
}
const str = strGenerator()
showValueGenerator(str)


function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}
const num = numberGen(17)
showValueGenerator(num)


// Crearea generatorului propriu
const iterator = {
  gen(n = 10) {
    let i = 0
    return {
      next() {
        if (i < n) {
          return {
            value: ++i,
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}
const newConst = iterator.gen(10)
showValueGenerator(newConst)

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

// Ciclul for - of lucreaza cu string-urile, massivurile
for (let k of iter(6)) {
  console.log(k)
}