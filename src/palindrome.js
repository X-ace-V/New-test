function isPalindromeRecursive(str) {
  const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (sanitizedStr.length <= 1) {
    return true;
  }

  if (sanitizedStr[0] !== sanitizedStr[sanitizedStr.length - 1]) {
    return false;
  }

  return isPalindromeRecursive(sanitizedStr.substring(1, sanitizedStr.length - 1));
}

// Example usage (for verification, can be removed if a test file is created later)
/*
console.log(`'racecar' is palindrome: ${isPalindromeRecursive('racecar')}`); // true
console.log(`'hello' is palindrome: ${isPalindromeRecursive('hello')}`);     // false
console.log(`'A man, a plan, a canal: Panama' is palindrome: ${isPalindromeRecursive('A man, a plan, a canal: Panama')}`); // true
console.log(`'No lemon, no melon' is palindrome: ${isPalindromeRecursive('No lemon, no melon')}`); // true
console.log(`'' is palindrome: ${isPalindromeRecursive('')}`); // true
console.log(`'a' is palindrome: ${isPalindromeRecursive('a')}`); // true
*/

module.exports = isPalindromeRecursive;

