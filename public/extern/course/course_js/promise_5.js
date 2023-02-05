
class PromiseClass extends Promise {
  constructor(props) {
    super(props);

  }
  sleep(ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve(), ms)
    })
  }
}

console.log('Request data...')
//
// setTimeout(() => {
//   console.log('Preparing data...')
//
//
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//
//   setTimeout(()=> {
//     backendData.modified = true;
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData)
//   }, 2000) //2s
// })
//
// p.then(data => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       data.modified = true;
//       res(data)
//     }, 2000) //+2s
//   })
// }).then((data) => {
//   console.log('Data received', data)
//   data.fromPromise = true;
//   return data
// }).then(data => {
//   setTimeout(() => {
//     console.log('Modified data', data)
//   }, 2000)
// }).catch(err => console.log('Error ', err))
//   .finally(() => console.log('Finally'))
// Total = 4sec


const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}
// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(5000).then(() => console.log('After 5 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('All promises')
})

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('Race promises')
})