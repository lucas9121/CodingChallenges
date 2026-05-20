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

// 3. Intermediate — Character Frequency
// Write a function charFrequency(str) that returns an object containing the frequency of each character.

const charFrequency = (str) => {
    const freqObj = {}
    for(let char of str){
        freqObj[char] = (freqObj[char] || 0) + 1
    }

    return freqObj
}

console.log("Character frequency: ", charFrequency("banana"))


// 4. Intermediate — First Non-Repeating Character
// Write a function firstNonRepeating(str) that returns the first character that appears only once.

const firstNonRepeating = (str) => {
    const charObj = {}
    for (let char of str){
        charObj[char] = (charObj[char] || 0) + 1
    }

    for(let key in charObj){
        if(charObj[key] === 1) return key
    }
    return null
}

console.log("First non-repeating: ", firstNonRepeating("abbacdde"))