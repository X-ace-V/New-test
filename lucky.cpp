#include <iostream>

// Function to check if a number is lucky
// This implementation is based on the recursive definition often found for lucky numbers.
// The `counter` tracks the current deletion step (e.g., 2nd, 3rd, 4th, ... number).
// `n` is effectively re-calculated to reflect its new "position" after deletions.
bool isLuckyRecursive(int n, int counter) {
    // If the counter exceeds n, it means n has survived all previous deletions
    // and is therefore lucky.
    if (counter > n) {
        return true;
    }

    // If n is a multiple of the current deletion step (counter),
    // it means n would be deleted at this step, so it's not lucky.
    if (n % counter == 0) {
        return false;
    }

    // Calculate the new value of n for the next iteration.
    // This simulates its new position in the sequence after removing elements.
    // E.g., if we remove every `counter`-th element, then `n`'s position effectively shifts by `n / counter` elements.
    int next_n = n - (n / counter);

    // Increment the counter for the next deletion step.
    int next_counter = counter + 1;

    // Recursively check with the updated n and counter.
    return isLuckyRecursive(next_n, next_counter);
}

// Wrapper function for convenience, starting the process with counter = 2
bool isLucky(int n) {
    if (n < 1) return false; // Lucky numbers are positive integers
    return isLuckyRecursive(n, 2);
}

int main() {
    int num;
    std::cout << "Enter a positive integer to check if it's a lucky number: ";
    std::cin >> num;

    if (num <= 0) {
        std::cout << "Please enter a positive integer." << std::endl;
    } else {
        if (isLucky(num)) {
            std::cout << num << " is a lucky number." << std::endl;
        } else {
            std::cout << num << " is NOT a lucky number." << std::endl;
        }
    }

    return 0;
}

