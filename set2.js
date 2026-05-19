/////////////////// THEME: Arrays + Loops + Conditionals ///////////////////


// 1. Beginner — Count Matches
// Write a function countMatches(arr, target) that returns how many times target appears in the array.
const countMatches = (arr, target) => {
    return arr.filter((num) => num === target).length;
}

console.log("count matches: ",countMatches([1, 2, 2, 3, 2], 2))

// 2. Beginner — Has Value
// Write a function hasValue(arr, target) that returns true if target exists in the array, otherwise false.
const hasValue = (arr, target) => {
    return arr.includes(target)
}

console.log("Has value: ",hasValue([4, 8, 15, 16], 15))

// 3. Intermediate —  Build Frequency Object
// Write a function buildFrequency(arr) that returns an object showing how many times each value appears.
const buildFrequency = (arr) => {
    const freqObj = {}
    for (let val of arr){
        freqObj[val] = (freqObj[val] || 0) + 1
    }
    return freqObj
}

console.log("Build frequency: ",buildFrequency(["a", "b", "a", "c", "b", "a"]))

// 4. Intermediate — First Duplicate
// Write a function firstDuplicate(arr) that returns the first value that appears more than once.
const firstDuplicate = (arr) => {
    const dupObj = {}
    for(let val of arr){
        dupObj[val] = (dupObj[val] || 0) + 1
    };
    console.log(dupObj)
    for(let key in dupObj){
        if(dupObj[key] > 1) return key
    }

}

// Better Version. Seen Value
// const firstDuplicate = (arr) => {
// const seen = {};

// for (let val of arr) {
//     if (seen[val]) return val;

//     seen[val] = true;
// }

//     return null;
// };

console.log("First duplicate: ",firstDuplicate([5, 1, 3, 2, 1, 3]))

// 5. Advance — Two Sum Optimized
// Write a function twoSumOptimized(nums, target) that returns the indexes of two numbers that add up to target. No nested loop.
const twoSumOptimized = (nums, target) => {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (seen[needed] !== undefined) {
            return [seen[needed], i];
        }

        seen[nums[i]] = i;
    }

    return null;
};


console.log("Two sum optimized: ", twoSumOptimized([11, 7, 2, 15], 9));