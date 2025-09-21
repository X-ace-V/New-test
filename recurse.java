public class recurse {

    /**
     * Checks if a string is a palindrome recursively.
     * Ignores non-alphanumeric characters and is case-insensitive.
     *
     * @param str The string to check.
     * @return true if the string is a palindrome, false otherwise.
     */
    public boolean isPalindrome(String str) {
        if (str == null) {
            return false;
        }
        String cleanedStr = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return checkRecursive(cleanedStr, 0, cleanedStr.length() - 1);
    }

    private boolean checkRecursive(String str, int left, int right) {
        // Base case: if left pointer crosses or meets the right pointer, it's a palindrome
        if (left >= right) {
            return true;
        }
        // If characters at left and right pointers don't match, it's not a palindrome
        if (str.charAt(left) != str.charAt(right)) {
            return false;
        }
        // Recursive step: check the substring by moving pointers inwards
        return checkRecursive(str, left + 1, right - 1);
    }

    // Optional: A main method for testing
    public static void main(String[] args) {
        recurse checker = new recurse();

        String[] testStrings = {
            "madam",
            "A man, a plan, a canal: Panama",
            "No lemon, no melon",
            "hello",
            "racecar",
            "" // Empty string
        };

        for (String s : testStrings) {
            System.out.println("\"" + s + "\" is palindrome: " + checker.isPalindrome(s));
        }
    }
}

