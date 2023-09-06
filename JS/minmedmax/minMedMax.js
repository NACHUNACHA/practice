const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  let temp
  if (n1 > n2){ // เช็คค่ามาก ถ้า n1 มากกว่า n2 ให้เอา ค่าใน n1 ใส่ไปในตัวแปร n2
     temp = n1
     n1 = n2 
     n2 = temp // now n2 > n1
  } if (n1 > n3){ // เช็คค่ามาก ถ้า n1(ที่มีค่าเป็นค่าของ n2) แล้วมากกว่า n3 ให้เอา ค่าใน n1 ใส่ไปในตัวแปร n3
      temp = n1
      n1 = n3
      n3 = temp // now n3 > n1 & n1 มีค่าน้อยที่สุด ณ ตอนนี้
  } if (n2 > n3){ // เช็คค่า n2 และ n3 ว่าตัวไหนมากกว่า ถ้า n2 มากกว่า n3 ให้เอาค่าใน n2 ไปใส่ใน n3
      temp = n2
      n2 = n3
      n3 = temp // n3 มากที่สุด
  } return { "min": n1, "mid": n2, "max": n3}
}
module.exports = minMedMax