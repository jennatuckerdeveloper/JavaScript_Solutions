/*
stringTimes

Given a string and a non-negative int n, return a larger string that is n copies of the original string.

stringTimes('Hi', 2) → 'HiHi'
stringTimes('Hi', 3) → 'HiHiHi'
stringTimes('Hi', 1) → 'Hi'

 */

const stringTimes = function (str, n) {
  let to_return = ''
  for (let i = 0; i < n; i++) {
    to_return = to_return + str
  }
  return to_return
}

console.log(stringTimes('Hi', 2))
console.log(stringTimes('Hi', 3))
console.log(stringTimes('Hi', 1))