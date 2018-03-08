const countDuplicates = function (str) {
    let newString = str.toLowerCase()
    let dict = {}
    let toReturn = 0
    for (let letter of newString) {
      if (letter in dict) {
        dict[letter] = (dict[letter] + 1)
      } else {
        dict[letter] = 1
      }
    } for (let key in dict) {
      if (dict[key] > 1) {
        toReturn += 1
      }
    } return toReturn
  }
  
  console.log(countDuplicates('abcde'))
  console.log(countDuplicates('aabbcde'))
  console.log(countDuplicates('aabBcde'))
  console.log(countDuplicates('abcdeABCDE'))