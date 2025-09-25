import java.awt.Button;
import java.awt.Frame;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class yt {
    public static void main(String[] args) {
        // Create a Frame (window)
        Frame frame = new Frame("My Button App");
        frame.setSize(300, 200);
        frame.setLayout(new FlowLayout());

        // Create a Button
        Button button = new Button("Click Me");

        // Add an ActionListener to the button
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                System.out.println("Button clicked!");
                // You could add more complex logic here
            }
        });

        // Add the button to the frame
        frame.add(button);

        // Add a WindowListener to handle closing the frame
        frame.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });

        // Make the frame visible
        frame.setVisible(true);
    }
}

