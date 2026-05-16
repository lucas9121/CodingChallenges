// Theme: arrays + loops + conditionals


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