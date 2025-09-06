# Contribution Guide

It is just a test.

## Palindrome Code Examples

### Java

```java
class Palindrome {
    public static boolean isPalindrome(String str) {
        String cleanStr = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int left = 0;
        int right = cleanStr.length() - 1;
        while (left < right) {
            if (cleanStr.charAt(left) != cleanStr.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        String test1 = "madam";
        String test2 = "A man, a plan, a canal: Panama";
        String test3 = "hello";
        System.out.println("''" + test1 + "'' is palindrome: " + isPalindrome(test1));
        System.out.println("''" + test2 + "'' is palindrome: " + isPalindrome(test2));
        System.out.println("''" + test3 + "'' is palindrome: " + isPalindrome(test3));
    }
}
```

### Python

```python
def is_palindrome(text):
    clean_text = "".join(filter(str.isalnum, text)).lower()
    return clean_text == clean_text[::-1]

if __name__ == "__main__":
    print(f"'madam' is palindrome: {is_palindrome('madam')}")
    print(f"'A man, a plan, a canal: Panama' is palindrome: {is_palindrome('A man, a plan, a canal: Panama')}")
    print(f"'hello' is palindrome: {is_palindrome('hello')}")
```
