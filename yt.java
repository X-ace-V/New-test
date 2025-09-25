public class yt {
    // This Java file contains a Swift script for creating a button.
    // The Swift code is embedded as a multi-line string literal within a Java program.
    public static void main(String[] args) {
        String swiftButtonScript = """
            import SwiftUI

            struct ContentView: View {
                var body: some View {
                    Button("Click Me") {
                        print("Button was tapped!")
                    }
                }
            }
        """;
        System.out.println("--- Embedded Swift Button Script ---");
        System.out.println(swiftButtonScript);
        System.out.println("------------------------------------");
    }
}

