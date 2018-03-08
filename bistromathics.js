
/* 
receipt([10, 9, 25], 20) =>'$56.76'

splitTheBill(122.27, ["Victoria", "Joseph", "Jessie"])

> "Victoria owes $40.76"
. "Joseph owes $40.76"
. "Jessie owes $40.75"
*/

const receipt = function (costOfItems, tip) {
    const subtotal = costOfItems.reduce(function(prev, cur) {
        return prev + cur;
    });

    const total = subtotal * (1 + .09 + (tip/100));
    return total.toFixed(2)
};

// console.log(receipt([10, 9, 25], 20))

const splitTheBill = function(total, peopleArray) {
    let pennies = {
        33: 1,
        66: 2,
        99: 3, 
        25: 1,
        5: 2,
        75: 3,
    }
    let mathSplit = total / peopleArray.length
    console.log(mathSplit)
    let pennyFraction = mathSplit.toString().slice(5,7)
    console.log(pennyFraction)
    let extraPennies = pennies[pennyFraction]
    console.log(extraPennies)
    let base = parseFloat(mathSplit.toString().slice(0, 5))
    for (let person of peopleArray) {
        if (extraPennies) {
            console.log(`${person} owes ${base + .01}`)
            extraPennies -= 1
        } else {
            console.log(`${person} owes ${base}`)
        }
    }
}

console.log(splitTheBill(122.27, ["Victoria", "Joseph", "Jessie"]))
/*
> "Victoria owes $40.76"
. "Joseph owes $40.76"
. "Jessie owes $40.75"
*/
console.log(splitTheBill(56.76, ["Victoria", "Joseph", "Jessie"]))
/*
Victoria owes 18.92
Joseph owes 18.92
Jessie owes 18.92
*/
console.log(splitTheBill(80.80, ["Victoria", "Joseph", "Jessie"]))
/*
Victoria owes 26.94
Joseph owes 26.93
Jessie owes 26.93
*/

console.log(splitTheBill(69.17, ["Victoria", "Joseph", "Jessie", "Joe"]))
/*
Victoria owes 17.3
Joseph owes 17.29
Jessie owes 17.29
Joe owes 17.29
*/
console.log(splitTheBill(80.00, ["Victoria", "Joseph", "Jessie"]))
/*
Victoria owes 26.67
Joseph owes 26.67
Jessie owes 26.66
*/