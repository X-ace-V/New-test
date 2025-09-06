# Contributions

It is just a test.

## Palindrome Code Examples

### Java

```java
public class Palindrome {
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
        System.out.println("madam is palindrome: " + isPalindrome("madam"));
        System.out.println("A man, a plan, a canal: Panama is palindrome: " + isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println("hello is palindrome: " + isPalindrome("hello"));
    }
}
```

### Ruby

```ruby
def palindrome?(str)
  cleaned_str = str.gsub(/[^a-zA-Z0-9]/, '').downcase
  cleaned_str == cleaned_str.reverse
end

puts "madam is palindrome: #{palindrome?('madam')}"
puts "A man, a plan, a canal: Panama is palindrome: #{palindrome?('A man, a plan, a canal: Panama')}"
puts "hello is palindrome: #{palindrome?('hello')}"
```
