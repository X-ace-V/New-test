function isPalindromeRecursive(str) {
  const normalizedStr = str.toLowerCase();
  if (normalizedStr.length <= 1) {
    return true;
  }
  if (normalizedStr[0] !== normalizedStr[normalizedStr.length - 1]) {
    return false;
  }
  return isPalindromeRecursive(normalizedStr.substring(1, normalizedStr.length - 1));
}

module.exports = isPalindromeRecursive;





