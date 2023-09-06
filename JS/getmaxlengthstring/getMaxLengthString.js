const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  let findMax = [] // กำหนดให้ fingMax เป็น Empty Array เพื่อหาค่าจำนวนตัวอักษรของ String ใน Array ที่เยอะที่สุด

  if (arrayOfString === null || arrayOfString === undefined) { // ถ้า parameter ==null or undefined return undefined 
    return undefined
  }
  for (const check of arrayOfString) { // เช็คว่าให้ return จำนวน String ที่มีค่ามากที่สุด กำหนดให้ check มีค่าเป็น arrayOfString
    if (findMax.length === 0) { // ถ้าใน Array ของ findMax ยังเป็นค่าเปล่า ให้เอา Array ของ check เข้าไปแทนใน Array findMax
      findMax = [check]
    }
    else if (check.length == findMax[0].length) { // เช็คว่า จำนวนตัวอักษรของ check == จำนวนตัวอักษรของ findMax ให้ check ใส่เข้าไปใน findMax 
      findMax.push(check)
    } 
    else if (check.length > findMax[0].length) { // เช็คว่า จำนวนตัวอักษรของ check > จำนวนตัวอักษรของ findMax ให้ findMax เป็นค่าใหม่โดยเอา Array ของ check มาแทนแทน
      findMax = [check]
    } 
  }
    return findMax
}
module.exports = getMaxLengthString

// console.log(getMaxLengthString(['hello', 'hi', 'hey'])) 
// console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']) )
// console.log(getMaxLengthString(['hi']) )
// console.log(getMaxLengthString(null) )
// console.log(getMaxLengthString(undefined))