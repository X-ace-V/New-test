#!/usr/bin/env python3

def is_palindrome_recursive(s):
    """
    Checks if a string is a palindrome using recursion.
    Ignores non-alphanumeric characters and case.
    """
    processed_s = ''.join(filter(str.isalnum, s)).lower()
    
    if len(processed_s) <= 1:
        return True
    else:
        return processed_s[0] == processed_s[-1] and is_palindrome_recursive(processed_s[1:-1])

if __name__ == '__main__':
    test_strings = [
        "madam",
        "A man, a plan, a canal: Panama",
        "racecar",
        "hello",
        "",
        "a",
        "No lemon, no melon"
    ]

    print("\n--- Palindrome Check Results ---")
    for s in test_strings:
        result = is_palindrome_recursive(s)
        print(f'"{s}" is a palindrome: {result}')
    print("--------------------------------")

