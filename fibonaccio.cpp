#include <iostream>
#include <vector>

// Brute Force (Iterative)
long long fibonacci_iterative(int n) {
    if (n < 0) return -1; // Handle negative input
    if (n <= 1) return n;
    long long a = 0, b = 1;
    for (int i = 2; i <= n; ++i) {
        long long next = a + b;
        a = b;
        b = next;
    }
    return b;
}

// Recursive
// Note: This approach has exponential time complexity and is inefficient for large n.
long long fibonacci_recursive(int n) {
    if (n < 0) return -1; // Handle negative input
    if (n <= 1) return n;
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}

// Dynamic Programming (Memoization) helper function
long long fibonacci_memoized_helper(int n, std::vector<long long>& memo) {
    if (n < 0) return -1; // Should be handled by the public interface
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    memo[n] = fibonacci_memoized_helper(n - 1, memo) + fibonacci_memoized_helper(n - 2, memo);
    return memo[n];
}

// Dynamic Programming (Memoization) public interface
long long fibonacci_dp(int n) {
    if (n < 0) return -1; // Handle negative input for public call
    std::vector<long long> memo(n + 1, -1);
    return fibonacci_memoized_helper(n, memo);
}

int main() {
    int test_values[] = {5, 10, 20, 40}; // Test with various values

    std::cout << "--- Fibonacci Implementations ---" << std::endl;

    for (int n : test_values) {
        std::cout << "\nCalculating Fibonacci(" << n << "):" << std::endl;
        std::cout << "  Iterative: " << fibonacci_iterative(n) << std::endl;
        // Recursive is very slow for n=40, so let's only run it for smaller values
        if (n <= 20) {
            std::cout << "  Recursive: " << fibonacci_recursive(n) << std::endl;
        } else {
            std::cout << "  Recursive: (Skipped for large n due to performance)" << std::endl;
        }
        std::cout << "  Dynamic Programming (Memoized): " << fibonacci_dp(n) << std::endl;
    }

    return 0;
}

