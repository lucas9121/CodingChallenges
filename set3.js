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

console.log("Count vowels: ", countVowels("javascript"))

// 2. Beginner — Reverse String
// Write a function reverseString(str) that returns the string reversed.
function reverseString(str){
    return str.split('').reverse().join('')
}

console.log("Reverse string: ", reverseString("hello"))