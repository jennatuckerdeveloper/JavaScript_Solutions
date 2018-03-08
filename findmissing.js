const myOriginalList = [1, 2, 3, 4, 5]
const myMessyList = [2, 5, 4, 3]

const findMissingElement = function (originalList, messyList) {
  for (let x of originalList) {
    if (messyList.indexOf(x) !== -1) {
      continue
    } else {
      return x
    }
  }
}

// console.log(findMissingElement(myOriginalList, myMessyList))

const findMissingElement2 = function (originalList, messyList) {
  return originalList.filter(num => messyList.indexOf(num) === -1)
}

console.log(findMissingElement2(myOriginalList, myMessyList))

// crazy concise array shuffle method found online

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

const fullFindMissingElement = function (originalList) {
  const messyList = shuffleArray(originalList).slice(1)
  //   console.log(messyList)
  return originalList.filter(num => messyList.indexOf(num) === -1)
}

console.log(fullFindMissingElement(myOriginalList))
