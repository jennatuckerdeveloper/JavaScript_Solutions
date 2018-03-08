// take a sorted array and a value to find 
// find the midpoint of the array
// (Are there not methods that do this?)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7 => index 6
// copy the array 
// > LOOP 
// see if that's the number, if yes, return
// find the midpoint number - here 5 
// see if the midpoint number is higher than the number
// if yes, slice the array at the midpoint to the end 
// LOOP >
// add a case if it's not in the array

const binarySearch = function (originalArray, numToFind) {
    let arrayCopy = originalArray.slice()
    while (arrayCopy.length > 1) {
        let midIndex = Math.floor(arrayCopy.length / 2)
        if (arrayCopy[midIndex] === numToFind) {
            return arrayCopy[midIndex]
        } else if (numToFind > arrayCopy[midIndex]) {
            arrayCopy = arrayCopy.slice(midIndex)
        } else if (numToFind < arrayCopy[midIndex]) {
            arrayCopy = arrayCopy.slice(0, midIndex)
        } 
    }
    return "not in array"
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4))