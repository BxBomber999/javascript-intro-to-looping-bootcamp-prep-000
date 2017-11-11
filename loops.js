function forLoop(arr){
  for (let i = 0; i < 25; i++) {
     arr.push(`I am ${i} strange for loops.`)
  }
  return arr
}

function whileLoop(n){
  while(n>=0){
    console.log(n)
    n--
  }
}

function doWhileLoop(array){
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
}
