/////////////////// THEME: Strings + Character Frequency + Pattern Matching ///////////////////


// 1. Beginner — Count Vowels
// Write a function countVowels(str) that returns the number of vowels in a string.
const countVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0
    for(let char of str){
        if(vowels.includes(char)) count++
    }
    return count
}

console.log("Count vowles: ", countVowels("javascript"))