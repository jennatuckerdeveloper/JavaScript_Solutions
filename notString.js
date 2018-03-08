/*

1. not-string

Given a string, return a new string where "not " has been added to the front. 
However, if the string already begins with "not", return the string unchanged.

notString('candy') → 'not candy'
notString('x') → 'not x'
notString('not bad') → 'not bad'

*/

let notString = function (str) {
    if (str.startsWith('not')) {
        return str
    } else {
        return `not ${str}`
    }
}

console.log(notString('candy'))
console.log(notString('x'))
console.log(notString('not bad'))