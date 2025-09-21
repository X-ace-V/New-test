const isPalindromeRecursive = require('./palindrome');

console.log("Testing isPalindromeRecursive:");
console.log(`"madam" is palindrome: ${isPalindromeRecursive("madam")}`); // true
console.log(`"Madam" is palindrome (case-insensitive): ${isPalindromeRecursive("Madam")}`); // true
console.log(`"racecar" is palindrome: ${isPalindromeRecursive("racecar")}`); // true
console.log(`"hello" is palindrome: ${isPalindromeRecursive("hello")}`); // false
console.log(`"A" is palindrome: ${isPalindromeRecursive("A")}`); // true
console.log(`"" is palindrome: ${isPalindromeRecursive("")}`); // true
console.log(`"Noon" is palindrome (case-insensitive): ${isPalindromeRecursive("Noon")}`); // true

