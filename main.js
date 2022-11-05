function twoSmallest(array){
  let smallArr = []
  let smallest = Math.min()
  let secondSmallest = Math.min()
  if(array.length < 2){
    return undefined
  }
  for (let num = 0; num < array.length; num++) {
    if (smallest > array[num]) {
        smallest = array[num]
    }
    }
    for (let num = 0; num < array.length; num++) {
   if (secondSmallest > array[num] && smallest < array[num]) {
    secondSmallest = array[num]
  }
}
smallArr = [smallest , secondSmallest]
  return smallArr
  }
   
    


if (typeof twoSmallest === 'undefined') {
  twoSmallest = undefined
}


module.exports = {
  twoSmallest,
}
