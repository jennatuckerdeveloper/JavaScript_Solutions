/*

Given an imaginary chess board of size m x n including only the Queen and the King write a function 
that takes the positions (coordinates) of both the Queen and the King as parameters and returns a boolean 
telling whether or not the King is threatened by the Queen:

function threatens(qX, qY, kX, kY) {
  // ...
}

*/

function threatens (qX, qY, kX, kY) {
  return qX === kX || qY === kY || Math.abs(qX - kX) === Math.abs(qY - kY)
}

console.log(threatens(1, 1, 2, 2))
console.log(threatens(1, 1, 8, 8))
console.log(threatens(5, 1, 5, 8))
console.log(threatens(3, 6, 5, 6))
console.log(threatens(8, 8, 1, 1))
console.log(threatens(2, 2, 1, 1))

console.log(threatens(3, 7, 5, 3))
console.log(threatens(4, 5, 1, 3))
