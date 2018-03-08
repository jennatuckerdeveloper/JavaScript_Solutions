/*
Given a string, return a new string made of every other char starting with the first,
so "Hello" yields "Hlo".

stringBits('Hello') → 'Hlo'
stringBits('Hi') → 'H'
stringBits('Heeololeo') → 'Hello'
*/

const stringBits = function (str) {
    let to_return = ''
    for (i in str) {
      if (i % 2 === 0) {
        to_return = to_return + str[i]
      }
    }
    return to_return
  }
  
  console.log(stringBits('Hello'))
  console.log(stringBits('Hi'))
  console.log(stringBits('Heeololeo'))