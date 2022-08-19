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
