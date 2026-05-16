/////////////////// THEME: Arrays + Loops + Conditionals ///////////////////


// 1. Beginner — Count Positives
// Write a function countPositives(nums) that returns how many numbers in an array are greater than 0
function countPositives(arr){
    let count = 0;
    for(let num of arr){
        if(num > 0) count++
    }
    return count;
}

countPositives([-2, 0, 3, 5, -1])


// 2. Beginner — Find First Even
// Write a function findFirstEven(nums) that returns the first even number in the array.
// If there is no even number, return null.
function findFirstEven(nums){
    for(let num of nums){
        if(num % 2 === 0) return num
    }
    return null
}

findFirstEven([1, 7, 9, 12, 15]) 


// 3. Intermediate — Filter Greater Than Target
// Write a function greaterThan(nums, target) that returns a new array containing only numbers greater than target.
function greaterThan(arr, target){
    const answerArr = [];
    for(let num of arr){
        if(num > target) answerArr.push(num)
    }
    console.log(answerArr)
    return answerArr
};

greaterThan([3, 8, 1, 10, 5], 5)