/////////////////// THEME: Arrays + Loops + Conditionals ///////////////////


// 1. Beginner — Count Positives
// Write a function countPositives(nums) that returns how many numbers in an array are greater than 0
function countPositives(arr){
    let count = 0;
    for(num of arr){
        if(num > 0) count++
    }
    console.log(count)
    return count;
}

countPositives([-2, 0, 3, 5, -1])


// 2. Beginner — Find First Even
// Write a function findFirstEven(nums) that returns the first even number in the array.
// If there is no even number, return null.
function findFirstEven(arr){
    for(num of arr){
        if(num % 2 === 0){
            console.log(num)
            return num
        }
    }
    console.log(null)
    return null
}

findFirstEven([1, 7, 9, 12, 15]) 