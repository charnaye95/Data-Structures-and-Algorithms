// Examples

//BIG O NOTATION

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

const addUpTo = (n) => {
    let total = 0
    for (let i = 0; i <= n; i++) {
        total += i
    }
    return total
}
// console.log(addUpTo(678))

const addUp = (n) => {
    return n * (n + 1) / 2
}
console.log(addUp(678))

// WHICH ONE IS BETTER?

// to test performance why not use timers?
let t1 = performance.now()
let t2 = performance.now()
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)

// When comparing the two, function addUp is more efficient because it runs/performs faster

// there's a problem with using timers though, refer to notes

//Counting Operations

// there's three operations in the function addUp. 1 multiplication, 1 addition, and 1 division. so 3 simple operations, regardless of the size of n

//in the function addUpTo, theres a for loop. and so the amount of operations depends on n in this case. its doing n assignments, n comparisons, and n additions all over the place.

// for the function addUp, it has a big O of 1, O(1) meaning as n grows, it doesn't really reflect in the runtime. it always has 3 operations.

// for the function addUpTo, it has a big O of n, O(n) meaning as n (input) grows the runtime grows. the number of operations is (eventually) bounded by a multiple of n

function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}
// this function includes a nested loop, where one for loop is inside of the other. the big O notation here is: O of n squared, O(n²)

// SPACE COMPLEXITY
const sum = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
// space is what we are concerned about here. no matter what the array length is we an assigned variable in total and in i. and we're having numbers within the array added up together, but despite what numbers are in the array, it doesn't have an impact on space that's taken up because we only have these two variables and they exist no matter what. here for this function, we have constant space, it is O(1) space. its always the same no matter the input.

const double = (arr) => {
    let newAr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}
// whats important to note here in this function is that a new array is being created and that takes up space from the assignment of newArr. but where we are pushing numbers into the new array by the end of the function, that is where based on the length of our arr to start, that changes how much pushing we are doing into our newArr. so the space that's taken up is directly proportionate to n (length) of arr. here for this function, we have O(n) space.

//BIG O OF OBJECTS
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}
// Inserting, removing,and accessing a key or value in an object (like this one) all have a constant time complexity, a big O of 1 - O(1)

let names = ["Sam", "Charneyce", "Frank"]
// accessing an element in an array (like this one) has a constant time complexity, a big O of 1 - O(1)

// PROBLEM-SOLVING APPROACH

//Step 1: Understand the Problem

// Example: Write a function which takes two numbers and returns their sum.
// Now working through this prompt, think about the questions we should ask ourselves:
// 1. Can I restate the problem in my own words? 
// add two numbers together in a function
// 2. What are the inputs that go into the problem? 
// we need two numbers
// 3. What are the outputs that should come from the solution to the problem? 
// we want one output or sum
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
// Yes
// 5. How should I label the important pieces of data that are a part of the problem?
// I would need a label for function name, and variables for numbers if I choose to


const addTogether = (a, b) => {
    a = 27
    b = 13
    console.log(a + b)
}
addTogether()

// Step 2: Explore Concrete Examples

// Example: Write a function which takes in a string and returns count of each character in the string.
// Start with Simple Examples
// charCount("aaaa") => {a:4}
// charCount("hello") => {h:1, e:1, l:2, o:1}
// Progress to More Complex Examples
// "my phone number is 182763" => thinking about, what about spaces should those be counted, and what about numbers in the string
// "Hello hi" => thinking about, what about uppercase letters should those be counted differently or as just a lowercase h
// Explore Examples with Empty Inputs
// what if someone input charCount() or an empty string like this charCount(""), what would we want that to return or be printed to our console?
// Explore Examples with Invalid Inputs
// what if someone input something that's not a string, like an array, object, number, etc.

// Step 3: Break it Down

// Example: Write a function which takes in a string and returns count of each character in the string.
// function charCount(str) {
// do something
// return an object with keys that are lowercase alphanumeric character in the string; values should be the counts for those characters
// }
// function charCount(str) {
// make object to return at end
// loop over string, for each character...
// if the character is number/letter AND a key in object, add one to count
// if the character is number/letter AND not in object, add it to object and set value to 1
// if character is something else (space, period, etc.) don't do anything
// return object at end
// }

// Step 4: Solve or Simplify
// Example: Write a function which takes in a string and returns count of each character in the string.

function charCount(str) {
    str = "My last four digits of my number is 0005"
    // make object to return at end
    let obj = {}
    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        // if the character is number/letter AND a key in object, add one to count
        if (obj[char] > 0) {
            obj[char]++
            // if the character is number/letter AND not in object, add it to object and set value to 1
        }
        else {
            obj[char] = 1
        }
    }
    // return object at end
    console.log(obj)
}
charCount()

// PROBLEM SOLVING PATTERNS

// Frequency Counter Pattern

// Example: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

//Instead of a nested loop solution where it has a O(n²), we can loop over each array one time individually. Two separate loops is vastly better than two nested loops

const same = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false
        console.log(false)
    }
    let frequencyCounter1 = {} // these objects count the frequency of individual values in the array
    let frequencyCounter2 = {} // these objects count the frequency of individual values in the array
    for (let value of array1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for (let value of array2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
            console.log(false)
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
            console.log(false)
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    console.log(true)
    return true
}

same([2,5,7], [49,4,25])

// this function runs at linear time complexity, O(n)
// So the idea behind the frequency counter is to use an object and then use that object to construct a profile. A way of breaking down the contents of an array or string. And then you're able to quickly compare that breakdown to how another object looks, that was constructed from a string or an array

// Frequency Counter Pattern: Anagram Challenge

// Example: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman.

const validAnagram = (string1, string2) => {
if (string1.length !== string2.length) {
    return false
}
freqCount1 = {}
freqCount2 = {}
for(let letter in string1) {
    string1[letter]
}
for(let letter in string2) {
    string2[letter]
}
}

