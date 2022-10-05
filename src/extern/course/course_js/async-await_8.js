const delay = ms => {
  return new Promise(res => setTimeout(() => res(), ms))
}
// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//   console.log('Fetch to do started...')
//   delay(2000).then(() => {
//     // fetch(url).then(res => res.json())
//     return fetch(url)
//   }).then(res => res.json())
//     .then(data => {
//       console.log('Data: ', data)
//     })
//     .catch(e => console.error(e))
// }
//
// fetchTodos()

// async function fetchAsyncTodos() {
//   console.log('Fetch to do started...')
//   try {
//     await delay(2000)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log('Data: ', data)
//   } catch (e) {
//     console.error(e)
//   }
// }
// fetchAsyncTodos()

const jsonURL = 'https://jsonplaceholder.typicode.com/todos'

async function getDataAPI() {
  try {
    console.log('Starting...')
    await delay(2000)
    // Get data using fetch
    const data = await fetch(jsonURL)
    // Convert into json format
    const jsonData = await data.json()
    console.log('Data: ', jsonData)
  } catch (e) {
    console.log(e)
  }
}

getDataAPI()