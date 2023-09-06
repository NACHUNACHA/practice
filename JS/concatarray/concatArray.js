const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
    if (array1 != undefined && array2 != undefined) {
      return array1.concat(array2)
    } else if (array1 == undefined && array2 != undefined) {
        return array2
    } else if (array1 != undefined && array2 == undefined){
        return array1
    }

}
module.exports = concatArray

console.log(concatArray([5, 10, 15], [2, 4, 6, 7]))
console.log(concatArray([ ], ['item1', 'item2', 'item3']))
console.log(concatArray([10, 6, 5], []))
console.log(concatArray([], []))
console.log(concatArray(undefined, [2, 4, 6, 7])) 
console.log(concatArray([2, 4, 6, 7], null))
console.log(concatArray(undefined, undefined))
console.log(concatArray(null, undefined) )
console.log(concatArray(undefined, null) )
console.log(concatArray(null, null) )
