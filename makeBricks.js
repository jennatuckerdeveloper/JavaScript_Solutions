const makeBricks = function (smalls, bigs, inches) {
    let bigs_usable = Math.floor(inches / 5);   
    let bigs_comparison = bigs - bigs_usable;   
    if (bigs_comparison >= 0) {                 
        let smalls_needed = inches - (bigs_usable * 5);
        return (smalls >= smalls_needed)
    } else if (bigs_comparison < 0) {           
        if (bigs > 0) {
            let covered = (bigs * 5);
            let smalls_needed = inches - covered;
            return (smalls >= smalls_needed)
        } else {                               
            return (smalls >= inches)
        }
    }
}

console.log("True tests: ");
console.log(makeBricks(3, 1, 8)); //true
console.log(makeBricks(3, 2, 10)); //true
console.log(makeBricks(4, 3, 13)); //true
console.log(makeBricks(0, 3, 15)); //true
console.log(makeBricks(7, 0, 7)); //true
console.log(makeBricks(5, 5, 14)); //true
console.log(makeBricks(5, 0, 5)); //true
console.log(makeBricks(0, 1, 5)); //true


console.log("False tests: ");
console.log(makeBricks(0, 0, 5)); //false
console.log(makeBricks(4, 2, 17)); //false
console.log(makeBricks(3, 1, 9)); //false
console.log(makeBricks(8, 0, 9)); //false
console.log(makeBricks(0, 5, 9)); //false