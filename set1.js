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

console.log("count positives: ", countPositives([-2, 0, 3, 5, -1]))


// 2. Beginner — Find First Even
// Write a function findFirstEven(nums) that returns the first even number in the array.
// If there is no even number, return null.
function findFirstEven(nums){
    for(let num of nums){
        if(num % 2 === 0) return num
    }
    return null
}

console.log("find first even: ", findFirstEven([1, 7, 9, 12, 15]) )


// 3. Intermediate — Filter Greater Than Target
// Write a function greaterThan(nums, target) that returns a new array containing only numbers greater than target.
function greaterThan(nums, target){
    const answerArr = [];
    return nums.filter((num) => num > target);
};

console.log("greater than: ", greaterThan([3, 8, 1, 10, 5], 5));


// 4. Intermediate — Find All Indexes
// Write a function findIndexes(nums, target) that returns an array of all indexes where target appears.
function findIndexes(nums, target){
    const idxArr = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target) idxArr.push(i)
    };
    return idxArr
};

console.log("find indexes: ", findIndexes([4, 2, 7, 2, 9, 2], 2))


//5. Advanced — Two Sum
// Write a function twoSum(nums, target) that returns the indexes of two numbers that add up to target. Assume there is exactly one valid answer.
function twoSum(nums, target){
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j]
        }
    }
};

console.log("two sum: ", twoSum([2, 7, 11, 15], 9))