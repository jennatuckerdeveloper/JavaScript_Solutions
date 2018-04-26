/* 
https://github.com/wwcodeportland/study-nights/blob/master/algorithms/July-2017/license-plate/licensePlateStatement.txt

French car license plates look like CG-123-BJ.
They are of the form "ab-cde-fg", where ab and fg range from AA to ZZ, and cde ranges from 001 to 999.

The license plates are generated in alphabetical order:

AA-001-AA, AA-002-AA, AA-003-AA, ..., AA-999-AA,
AA-001-AB, AA-002-AB, AA-003-AB, ..., AA-999-AB,
...,
AA-001-ZZ, AA-002-ZZ, AA-003-ZZ, ..., AA-999-ZZ,
AB-001-AA, AB-002-AA, AB-003-AA, ..., AB-999-AA,
...,
ZY-001-ZZ, ZY-002-ZZ, ZY-003-ZZ, ..., ZY-999-ZZ,
ZZ-001-ZZ, ZZ-002-ZZ, ZZ-003-ZZ, ..., ZZ-999-ZZ.


Given the license plate of a car and the number of cars that were registered after that car, calculate the license plate of the last registered car.

Input
x : starting license plate 
n : number of subsequent registered cars
Output
y : license plate of the last car registered
Constraints
1 = n = 100 000 000

*/ 

const generateLicensePlateNumber = function (startingPlate, carsSince) {
    const charVal = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'    
    ]

    const findVehicleNumber = function (startPlate) {
        return parseInt(startPlate.substring(3,6)) 
        + (charVal.indexOf(startPlate.charAt(8)) * 999) + (
        charVal.indexOf(startPlate.charAt(7)) * 26 * 999) + (
        charVal.indexOf(startPlate.charAt(1)) * 26 * 26 * 999) + (
        charVal.indexOf(startPlate.charAt(0)) * 26 * 26 * 26 * 999) 
    } 
   
    const startVehicleNumber = findVehicleNumber(startingPlate)
    
    const currentVehicleNumber = startVehicleNumber + carsSince
    
    const createNewPlateNumber = function (vehicleNumber) {
        const mid3 = vehicleNumber % 999
        const carry1 = Math.floor(vehicleNumber / 999)
        const lastAlpha = charVal[carry1 % 26]
        const carry2 = Math.floor(carry1 / 26)
        const secondToLastAlpha = charVal[carry2 % 26]
        const carry3 = Math.floor(carry2 / 26)
        const secondAlpha = charVal[carry3 % 26]
        const carry4 = Math.floor(carry3 / 26)
        const firstAlpha = charVal[carry4 % 26]

        return `${firstAlpha}${secondAlpha}-${mid3}-${secondToLastAlpha}${lastAlpha}`
    }

    return createNewPlateNumber(currentVehicleNumber)
    
}

console.log(generateLicensePlateNumber('AA-001-AA', 100000))