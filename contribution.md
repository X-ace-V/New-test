# Contribution Guidelines

it is just a test

## Palindrome Checker in Java

```java
public class PalindromeChecker {
    /**
     * Checks if a given string is a palindrome, ignoring non-alphanumeric characters and case.
     *
     * @param str The string to check.
     * @return true if the string is a palindrome, false otherwise.
     */
    public static boolean isPalindrome(String str) {
        // Clean the string: remove non-alphanumeric characters and convert to lowercase
        String cleanedStr = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        
        int left = 0;
        int right = cleanedStr.length() - 1;
        
        // Use two pointers to compare characters from both ends
        while (left < right) {
            if (cleanedStr.charAt(left) != cleanedStr.charAt(right)) {
                return false; // Characters do not match, not a palindrome
            }
            left++;  // Move left pointer forward
            right--; // Move right pointer backward
        }
        return true; // All characters matched, it's a palindrome
    }

    public static void main(String[] args) {
        System.out.println("'madam' is palindrome: " + isPalindrome("madam"));
        System.out.println("'A man, a plan, a canal: Panama' is palindrome: " + isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println("'hello' is palindrome: " + isPalindrome("hello"));
    }
}
```

## Palindrome Checker in JavaScript

```javascript
/**
 * Checks if a given string is a palindrome, ignoring non-alphanumeric characters and case.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    // Clean the string: remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string and compare
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Example usage:
console.log("'madam' is palindrome:", isPalindrome("madam"));
console.log("'A man, a plan, a canal: Panama' is palindrome:", isPalindrome("A man, a plan, a canal: Panama"));
console.log("'hello' is palindrome:", isPalindrome("hello"));
```
