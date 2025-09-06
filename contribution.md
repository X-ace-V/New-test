# Contribution Guide

it is just a test

## Palindrome Code Examples

### Java Palindrome Checker

```java
// Java Palindrome Checker
public class PalindromeChecker {
    public static boolean isPalindrome(String str) {
        // Remove non-alphanumeric characters and convert to lowercase
        String cleanedStr = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        // Reverse the string and compare
        String reversedStr = new StringBuilder(cleanedStr).reverse().toString();
        return cleanedStr.equals(reversedStr);
    }

    public static void main(String[] args) {
        String test1 = "madam";
        String test2 = "A man, a plan, a canal: Panama";
        String test3 = "hello";

        System.out.println("'" + test1 + "' is palindrome: " + isPalindrome(test1));
        System.out.println("'" + test2 + "' is palindrome: " + isPalindrome(test2));
        System.out.println("'" + test3 + "' is palindrome: " + isPalindrome(test3));
    }
}
```

### PHP Palindrome Checker

```php
<?php
// PHP Palindrome Checker
function isPalindrome(string $str): bool {
    // Remove non-alphanumeric characters and convert to lowercase
    $cleanedStr = preg_replace("/[^a-zA-Z0-9]/", "", strtolower($str));
    // Compare the cleaned string with its reverse
    return $cleanedStr === strrev($cleanedStr);
}

// Test cases
echo "'" . "madam" . "' is palindrome: " . (isPalindrome("madam") ? "true" : "false") . "\n";
echo "'" . "A man, a plan, a canal: Panama" . "' is palindrome: " . (isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") . "\n";
echo "'" . "hello" . "' is palindrome: " . (isPalindrome("hello") ? "true" : "false") . "\n";
?>
```
