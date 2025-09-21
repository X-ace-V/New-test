#include <iostream>

void windowFunction() {
    std::cout << "Window function called!" << std::endl;
}

int main() {
    windowFunction(); // Call the new window function

    for (int i = 1; i <= 5; ++i) std::cout << i << ' ';
    std::cout << '\n';
    for (int i = 5; i >= 1; --i) std::cout << i << ' ';
    return 0;
}


