/*
Given 3 int values, a b c, return their sum. 
However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. 
So for example, if b is 13, then both b and c do not count.

lucky_sum(1, 2, 3) → 6
lucky_sum(1, 2, 13) → 3
lucky_sum(1, 13, 3) → 1
*/

let lucky_sum = function (...vals) {
    let stop = vals.includes(13) ? vals.indexOf(13) : vals.length
    return vals.slice(0, stop).reduce(function (total, sum) { return total + sum })
  }

console.log(lucky_sum(1, 2, 3))
console.log(lucky_sum(1, 2, 13))
console.log(lucky_sum(1, 13, 3))