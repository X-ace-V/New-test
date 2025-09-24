#include <vector>

// Program 1: Brute force (Iterative)
long long fibonacci_iterative(int n) {
    if (n < 0) return -1; // Handle negative input
    if (n <= 1) return n;
    long long a = 0, b = 1, next;
    for (int i = 2; i <= n; ++i) {
        next = a + b;
        a = b;
        b = next;
    }
    return b;
}

// Program 2: Recursion
long long fibonacci_recursive(int n) {
    if (n < 0) return -1; // Handle negative input
    if (n <= 1) return n;
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}

// Program 3: Memoization (Dynamic Programming)
// Helper function for memoized Fibonacci
long long fibonacci_memoized_helper(int n, std::vector<long long>& memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    memo[n] = fibonacci_memoized_helper(n - 1, memo) + fibonacci_memoized_helper(n - 2, memo);
    return memo[n];
}

// Wrapper for memoized Fibonacci, initializes memoization table
long long fibonacci_dp(int n) {
    if (n < 0) return -1; // Handle negative input
    if (n <= 1) return n;
    std::vector<long long> memo(n + 1, -1); // Initialize with -1 to indicate uncomputed
    return fibonacci_memoized_helper(n, memo);
}

