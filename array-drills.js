const Array = require('./index')

function main() {
  Array.SIZE_RATIO = 3

  let arr = new Array()

  arr.push(3)
  arr.push(5)
  arr.push(15)
  arr.push(19)
  
  arr.pop()



  console.log(arr.get(0))
  console.log(arr)
}

main()