it is just a test

```java
class PalindromeChecker {
    public static boolean isPalindrome(String str) {
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
