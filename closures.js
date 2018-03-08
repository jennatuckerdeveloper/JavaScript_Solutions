const addTo = function (setNum) {
    let accumulator = setNum
    const adder = function (changingNum) {
        return accumulator += changingNum
    }
    return adder
}

const addThree = addTo(3)
const addFour = addTo(4)

console.log(addThree(1))
console.log(addThree(1))
console.log(addThree(1))
console.log(addFour(2))
console.log(addFour(2))

const count = (() => {
    let accumulator = 0
    return () => accumulator += 1
})()

console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())
