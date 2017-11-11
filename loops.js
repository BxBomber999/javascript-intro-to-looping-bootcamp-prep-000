function forLoop(arr){
  for(i=0;i<25;i++){
    arr.push(`I am ${i} strange for loop.`)
  }
  return arr
}

function whileLoop(n){
  while(n>0){
    console.log(n);
    n--
  }
  return "done"
}
