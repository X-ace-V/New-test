public class recurse {

    /**
     * Recursively checks if a substring is a palindrome.
     * Ignores case and non-alphanumeric characters for comparison.
     * @param s The cleaned string to check (alphanumeric, lowercase).
     * @param start The starting index of the substring.
     * @param end The ending index of the substring.
     * @return true if the substring is a palindrome, false otherwise.
     */
    private static boolean isPalindromeRecursive(String s, int start, int end) {
        // Base case 1: If the start index crosses or meets the end index, it's a palindrome.
        if (start >= end) {
            return true;
        }
        // Base case 2: If characters at start and end don't match, it's not a palindrome.
        if (s.charAt(start) != s.charAt(end)) {
            return false;
        }
        // Recursive step: check the inner substring by moving indices inwards.
        return isPalindromeRecursive(s, start + 1, end - 1);
    }

    /**
     * Checks if a given string is a palindrome using recursion.
     * Preprocesses the string to ignore case and non-alphanumeric characters.
     * @param s The input string to check.
     * @return true if the string is a palindrome, false otherwise.
     */
    public static boolean isPalindrome(String s) {
        if (s == null || s.isEmpty()) {
            return true; // An empty or null string can be considered a palindrome.
        }
        // Preprocess the string: remove non-alphanumeric characters and convert to lowercase.
        String cleanedString = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return isPalindromeRecursive(cleanedString, 0, cleanedString.length() - 1);
    }

    public static void main(String[] args) {
        String test1 = "madam";
        String test2 = "A man, a plan, a canal: Panama";
        String test3 = "hello";
        String test4 = "racecar";
        String test5 = "";
        String test6 = null;

        System.out.println("\"" + test1 + "\" is palindrome: " + isPalindrome(test1)); // Expected: true
        System.out.println("\"" + test2 + "\" is palindrome: " + isPalindrome(test2)); // Expected: true
        System.out.println("\"" + test3 + "\" is palindrome: " + isPalindrome(test3)); // Expected: false
        System.out.println("\"" + test4 + "\" is palindrome: " + isPalindrome(test4)); // Expected: true
        System.out.println("\"" + test5 + "\" is palindrome: " + isPalindrome(test5)); // Expected: true
        System.out.println("\"" + test6 + "\" is palindrome: " + isPalindrome(test6)); // Expected: true
    }
}

