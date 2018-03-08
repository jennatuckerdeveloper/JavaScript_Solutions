/*
abbreviate("elephant-rides are really fun!")

Output:

"e6t-r3s are r4y fun!"
*/

const abbreviate = function (str) {
  const noPunc = str.replace(/[!?.]/g, '')
  const separateWords = noPunc.split(/[\s-]/)
  return separateWords.map(word => word.length > 3 ? word[0] + (word.length - 2).toString() + word[word.length - 1] : word)
}


const wordAbbreviator = function (word) {
  return word.length > 3 ? word[0] + (word.length - 2).toString() + word[word.length - 1] : word
}


const hyphenatedWordAbbreviator = function (hypWord) {
  const words = hypWord.split('-')
  const abbreviatedWords = words.map(word => wordAbbreviator(word))
  return abbreviatedWords.join('-')
}

const puncWordAbbreviator = function (word) {
  return word.length > 4 ? word[0] + (word.length - 3).toString() + word.slice(word.length - 2, word.length - 1) : word
}

const phraseAbbreviator = function (str) {
  const words = str.split(' ')
  return words.map(word => {
    if (word.includes('-')) {
      return hyphenatedWordAbbreviator(word)
    } else if (word.includes('!') || word.includes('!') || word.includes('?')) {
      return puncWordAbbreviator(word)
    } else { return wordAbbreviator(word) }
  }).join(' ')
}

console.log(phraseAbbreviator('elephant-rides are really fun!'))
