# Contribution Guide

This is just a test.

## Palindrome Checker (Java)

```java
public class PalindromeChecker {
    public static boolean isPalindrome(String str) {
        // Remove non-alphanumeric characters and convert to lowercase
        String cleanedStr = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        
        int left = 0;
        int right = cleanedStr.length() - 1;
        
        while (left < right) {
            if (cleanedStr.charAt(left) != cleanedStr.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("Is 'madam' a palindrome? " + isPalindrome("madam")); // true
        System.out.println("Is 'A man, a plan, a canal: Panama' a palindrome? " + isPalindrome("A man, a plan, a canal: Panama")); // true
        System.out.println("Is 'hello' a palindrome? " + isPalindrome("hello")); // false
    }
}
```

## Palindrome Checker (C++)

```cpp
#include <iostream>
#include <string>
#include <algorithm> // For std::reverse
#include <cctype>    // For std::isalnum, std::tolower

// Function to check if a string is a palindrome
bool isPalindrome(const std::string& str) {
    std::string cleanedStr;
    for (char c : str) {
        if (std::isalnum(c)) {
            cleanedStr += std::tolower(c);
        }
    }

    std::string reversedStr = cleanedStr;
    std::reverse(reversedStr.begin(), reversedStr.end());

    return cleanedStr == reversedStr;
}

int main() {
    std::cout << "Is 'madam' a palindrome? " << (isPalindrome("madam") ? "true" : "false") << std::endl;
    std::cout << "Is 'A man, a plan, a canal: Panama' a palindrome? " << (isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << std::endl;
    std::cout << "Is 'hello' a palindrome? " << (isPalindrome("hello") ? "true" : "false") << std::endl;
    return 0;
}
```
