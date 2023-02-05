// eventLoop

console.log('Start')  //call stack
console.log('Start 2')  //call stack

function timeout2sec() {
  console.log('Inside timeout, after 2 s')
}

window.setTimeout(() => { //registry timeout (Web Api)
  console.log('Inside timeout, after 5 s')
}, 5000)

window.setTimeout(timeout2sec, 2000) // Web Api

console.log('End')  //call stack

//