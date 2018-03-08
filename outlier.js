/*
Find the Parity Outlier

An array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Given this array (which will have a length of at least 3, but could be very large) write a method that takes the array as an argument and returns N.

For example:

> outlier([2, 4, 0, 100, 4, 11, 2602, 36])
> 11

> outlier([160, 3, 1719, 19, 11, 13, -21])
> 160
*/


const outlier = function (numList) {
  const odds = numList.filter(num => num % 2 === 0)
  const evens = numList.length - odds
  const toFind = odds > evens ? 0 : 1
  const outlier = numList.find(num => num % 2 === toFind)
  return outlier
}

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))
