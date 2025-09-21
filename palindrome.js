function isPalindromeRecursive(str) {
  // Clean the string: convert to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Base case: if the string has 0 or 1 character, it's a palindrome
  if (cleanedStr.length <= 1) {
    return true;
  }

  // Recursive step: check if the first and last characters are the same
  // and if the substring between them is also a palindrome
  if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
    return isPalindromeRecursive(cleanedStr.substring(1, cleanedStr.length - 1));
  } else {
    return false;
  }
}

// Example Usage (for verification)
console.log("Is 'madam' a palindrome?", isPalindromeRecursive('madam')); // true
console.log("Is 'A man, a plan, a canal: Panama' a palindrome?", isPalindromeRecursive('A man, a plan, a canal: Panama')); // true
console.log("Is 'hello' a palindrome?", isPalindromeRecursive('hello')); // false
console.log("Is 'racecar' a palindrome?", isPalindromeRecursive('racecar')); // true
console.log("Is 'No lemon, no melon' a palindrome?", isPalindromeRecursive('No lemon, no melon')); // true

module.exports = isPalindromeRecursive;

