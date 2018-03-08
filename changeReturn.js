// change return as if you had any number of any type of coins 

let changeReturn = function (coins, changeNeeded) {
  coins.forEach(function (coin, index) { coins[index] = Math.floor(changeNeeded / coin); changeNeeded -= coins[index] * coin })
  return coins
}

console.log(changeReturn([25, 10, 5, 1], 99))
console.log(changeReturn([25, 10, 5, 1], 13))
console.log(changeReturn([25, 10, 5, 1], 21))
console.log(changeReturn([25, 10, 5, 1], 26))
console.log(changeReturn([25, 10, 5, 1], 79))
console.log(changeReturn([25, 10, 5, 1], 91))

let changeReturnOne = function (coins, change) {
  return coins.map(function (x, i) { let num = Math.floor(change / x); change -= (x * num); return num })
}

console.log(changeReturnOne([25, 10, 5, 1], 99))
console.log(changeReturnOne([25, 10, 5, 1], 13))
console.log(changeReturnOne([25, 10, 5, 1], 21))
console.log(changeReturnOne([25, 10, 5, 1], 26))
console.log(changeReturnOne([25, 10, 5, 1], 79))
console.log(changeReturnOne([25, 10, 5, 1], 91))
