# Contribution Guide

This is just a test and nothing else.

## Palindrome Checker (C++)

```cpp
#include <iostream>
#include <string>
#include <algorithm>

bool isPalindrome(const std::string& str) {
    std::string reversed_str = str;
    std::reverse(reversed_str.begin(), reversed_str.end());
    return str == reversed_str;
}

int main() {
    std::string test_str1 = "madam";
    std::string test_str2 = "hello";

    if (isPalindrome(test_str1)) {
        std::cout << "'" << test_str1 << "' is a palindrome." << std::endl;
    } else {
        std::cout << "'" << test_str1 << "' is not a palindrome." << std::endl;
    }

    if (isPalindrome(test_str2)) {
        std::cout << "'" << test_str2 << "' is a palindrome." << std::endl;
    } else {
        std::cout << "'" << test_str2 << "' is not a palindrome." << std::endl;
    }

    return 0;
}
```
