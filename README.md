# JavaScript Solutions 
# Solutions to coding challenges written in JavaScript

### Author 

Jenna Tucker @ jenna.m.tucker@gmail.com || 857-366-0630


# Table of contents 

## Code Challenge Descriptions:  
1. abbreviate
2. bind
3. classes
4. notString
5. missingChar
6. makeBricks 
7. bistromathics 
8. front3
9. stringTimes
10. stringBits
11. stringSplosion 
12. changeReturn 
13. countDuplicates
14. findMissing 
15. loneSum
16. luckySum
17. outlier 
18. promises
19. queenKing
20. sumDigPow
21. closures
22. recursion
23. binarySearch 
24. sever report CLI (folder includes script, input file, and readme)

### 1 abbreviate 

The word i18n is a common abbreviation of internationalization the developer community use instead of typing 
the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater 
into an abbreviation following the same rules.

Notes:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") 
will split up a series of letters into two words (eg. "elephant" and "ride").

The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter 
(eg. "elephant ride" => "e6t r2e").
Example:

abbreviate("elephant-rides are really fun!")

Output:

"e6t-r3s are r4y fun!"

### 2 bind

Bind a method to a JS object.  

### 3 classes 

Create a class and a class that inherits from a parent class.  

### 4 notString

Given a string, return a new string where "not " has been added to the front. 
However, if the string already begins with "not", return the string unchanged.

notString('candy') → 'not candy'
notString('x') → 'not x'
notString('not bad') → 'not bad'

### 5 missingChar

Given a non-empty string and an int n, 
return a new string where the char at index n has been removed.
The value of n will be a valid index of a char in the original string 
(i.e. n will be in the range 0..len(str)-1 inclusive).

missingChar('kitten', 1) → 'ktten'
missingChar('kitten', 0) → 'itten'
missingChar('kitten', 4) → 'kittn'

### 6 makeBricks

We want to make a row of bricks that is goal inches long.
We have a number of small bricks (1 inch each) and big bricks (5 inches each).
Return True if it is possible to make the goal by choosing from the given bricks.
This is a little harder than it looks and can be done without any loops.

console.assert(makeBricks(3, 1, 8) === true)
console.assert(makeBricks(3, 1, 9) === false)
console.assert(makeBricks(3, 2, 10) === true)

### 7 bistromathics 

The Bistromathic Drive is a wonderful new method of crossing vast interstellar
distances without all the dangerous mucking about with Improbability Factors.
Bistromathics itself is simply a revolutionary new way of understanding the
behaviour of numbers. Just as Einstein observed that time was not an absolute
but depended on the observer's movement in space, and that space was not an
absolute, but depended on the observer's movement in time, it is now realised
that numbers are not absolute, but depended on the observer's movement in
restaurants.  -Hitchhiker’s Guide to the Galaxy

In order to fully understand the nature of Bistromathics and come closer to implementing 
it for our stardrives,you have been tasked with the following:

Write a function called receipt that:

Takes 1 argument, the subtotal (total cost of the meal, without tax or tip)
Returns the total cost, based on a 9% tax and a 15% tip.
For example:
> receipt(20)
> '$24.80'

Complete these if you have extra time and want to take on a challenge!

Modify your receipt function in the following ways:

Take an additional argument, tip, to specify the percentage of tip to leave. For example, receipt(20, 10) should return 23.8.
Replace the subtotal argument with an array called costsPerItem, which is an array containing the prices for each item ordered in the meal.
Compute the subtotal from the costsPerItem array and calculate the total cost with tax and tip.
Round to the nearest cent.
For example:

> receipt([10, 9, 25], 20)
> '$56.76'

Write a function called splitTheBill that:

Takes 2 arguments, the total cost (i.e. with tax and tip included), and an array of string names (e.g. ["Victoria", "Jessie", "Joseph"])
For each person, returns an item in an array for the amount that they owe in the form of "[name] owes $[money]"
Splits the amount owed per person as evenly as possible among the number of people.
Note that money cannot exceed 2 decimal places (e.g. you cannot have $12.255) and the sum of each part should still add exactly up to the total cost.
For example:

> splitTheBill(122.27, ["Victoria", "Joseph", "Jessie"])

> "Victoria owes $40.76"
. "Joseph owes $40.76"
. "Jessie owes $40.75"

### 8 front3

Given a string, we'll say that the front is the first 3 chars of the string.
If the string length is less than 3, the front is whatever is there.
Return a new string which is 3 copies of the front.

front3('Java') → 'JavJavJav'
front3('Chocolate') → 'ChoChoCho'
front3('abc') → 'abcabcabc'
front3('ab) -> 'ababab

### 9 stringTimes

Given a string and a non-negative int n, return a larger string that is n copies of the original string.

stringTimes('Hi', 2) → 'HiHi'
stringTimes('Hi', 3) → 'HiHiHi'
stringTimes('Hi', 1) → 'Hi'

### 10 stringBits

Given a string, return a new string made of every other char starting with the first,
so "Hello" yields "Hlo".

stringBits('Hello') → 'Hlo'
stringBits('Hi') → 'H'
stringBits('Heeololeo') → 'Hello'

### 11 stringSplosion

Given a non-empty string like "Code" return a string like "CCoCodCode".

stringSplosion('Code') → 'CCoCodCode'
stringSplosion('abc') → 'aababc'
stringSplosion('ab') → 'aab'

### 12 changeReturn 

Create a change return with any number of coins using as few lines as possible.

### 13 countDuplicates

Write a function that returns the number of duplicate characters in a string.

### 14 findMissing 

Given two lists where the second list has all the same elements as the first save one
in no particular order, return the element that's missing from the second list.

### 15 loneSum

Find the sum of all the numbers that appear only once in an array.  

### 16 luckySum

Given 3 int values, a b c, return their sum. 
However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. 
So for example, if b is 13, then both b and c do not count.

lucky_sum(1, 2, 3) → 6
lucky_sum(1, 2, 13) → 3
lucky_sum(1, 13, 3) → 1

### 17 outlier 

Find the Parity Outlier

An array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Given this array (which will have a length of at least 3, but could be very large) write a method that takes the array as an argument and returns N.

For example:

> outlier([2, 4, 0, 100, 4, 11, 2602, 36])
> 11

> outlier([160, 3, 1719, 19, 11, 13, -21])
> 160

### 18 promises

Create a new promise that may succeed or fail.  
Call the promise with .then and .catch.  

### 19 queenKing

Given an imaginary chess board of size m x n including only the Queen and the King write a function 
that takes the positions (coordinates) of both the Queen and the King as parameters and returns a boolean 
telling whether or not the King is threatened by the Queen:

function threatens(qX, qY, kX, kY) {
  // ...
}

### 20 sumDigPow

Take a Number And Sum Its Digits Raised To The Consecutive Powers And ...Eureka!!

The number 89 is the first integer with more than one digit that fulfills 
the property partially introduced in the title of this kata. 

What's the use of saying "Eureka"? Because this sum gives the same number.

In effect:

89 = 8^1 + 9^2
The next number in having this property is 135.

See this property again:

135 = 1^1 + 3^2 + 5^3
We need a function to collect these numbers, 
that may receive two integers a, b that defines the range [a, b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) ==> []

### 21 closures 

Write a simple closure. Then write a closure using an arrow function and an IIFE.  

### 22 recursion

Write simple recursive functions.  

## 23 binary search

Write a binary search algorithm.  

### 24 sever report CLI 

The input is a JSON object where keys are node names and values are the results from each
node. A result is a JSON object with arbitrary keys and string values.

The output should be a JSON object where top level keys are the keys present in the results,
the value of each should be an object mapping the different values present to the results to an
array of nodes with those values.

You can write the script in any language you choose but it should be runnable as
cat input.json | script-name
or (using Python as an example) a similar Windows command like
type input.json | python script-name

Example input/output

Input:
{
    "node1": {
        "application": "forge",
        "version": "10.0",
        "role": "app-server"
    },
    "node2": {
        "application": "forge",
        "version": "10.0",
        "role": "util",
        "location": "slice"
    },
    "node3": {
        "application": "forge",
        "version": "9.5",
        "role": "db"
    },
    "node4": {
        "application": "anubis",
        "location": "slice",
        "role": "worker"
    }
}

Output:
{
    "application": {
        "forge": [
            "node1",
            "node2",
            "node3"
        ],
        "anubis": [
            "node4"
        ]
    },
    "version": {
        "10.0": [
            "node1",
            "node2"
        ],
        "9.5": [
            "node3"
        ]
    },
    "role": {
        "app-server": [
            "node1"
        ],
        "util": [
            "node2"
        ],
        "db": [
            "node3"
        ],
        "worker": [
            "node4"
        ]
    },
    "location": {
        "slice": [
            "node2",
            "node4"
        ]
    }
}

