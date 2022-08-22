// Examples

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
    return n * (n+1) /2
}
console.log(addUp(678))

// WHICH ONE IS BETTER?

// to test performance why not use timers?
let t1 = performance.now()
let t2 = performance.now()
console.log(`Time elapsed: ${(t2 -t1) / 1000} seconds`)

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