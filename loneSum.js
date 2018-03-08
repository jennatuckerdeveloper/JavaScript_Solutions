// console.log(lone_sum(1,2,3)) -> 6
// console.log(lone_sum(3, 2, 3)) -> 2
// console.log(lone_sum(3, 3, 3)) -> 0


let lone_sum = function (...nums) {
    let new_array = nums.filter(function (num, index, array) {
      let one = array.slice(0, index)
      let two = array.slice(index + 1)
      let three = one.concat(two)
      return !three.includes(num)
    })
    return new_array.reduce(function (sum, value) { return sum + value }, 0)
  }
  
  let lone_sum1 = function (...nums) {
    let new_array = nums.filter(function (num, index, array) { return !array.slice(0, index).concat(array.slice(index + 1)).includes(num) })
    return new_array.reduce(function (sum, value) { return sum + value }, 0)
  }
  
  let lone_sum2 = function (...nums) {
    return nums.filter(function (num, index, array) { return !array.slice(0, index).concat(array.slice(index + 1)).includes(num) }).reduce(function (sum, value) { return sum + value }, 0)
  }

console.log(lone_sum(1,2,3))
console.log(lone_sum(3, 2, 3))
console.log(lone_sum(3, 3, 3))
console.log(lone_sum1(1,2,3))
console.log(lone_sum1(3, 2, 3))
console.log(lone_sum1(3, 3, 3))
console.log(lone_sum2(1,2,3))
console.log(lone_sum2(3, 2, 3))
console.log(lone_sum2(3, 3, 3))