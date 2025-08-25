import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.*;

public class Dashboard extends JFrame {
    private JTable taskTable;
    private DefaultTableModel tableModel;

    public Dashboard() {
        setTitle("User Dashboard");
        setSize(800, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        // Sidebar
        JPanel sidebar = new JPanel();
        sidebar.setPreferredSize(new Dimension(200, 0));
        sidebar.setBackground(new Color(60, 63, 65));
        sidebar.setLayout(new GridLayout(0, 1, 0, 10));

        String[] menuItems = {"Overview", "Tasks", "Settings"};
        for (String item : menuItems) {
            JButton btn = new JButton(item);
            btn.setForeground(Color.WHITE);
            btn.setBackground(new Color(75, 110, 175));
            btn.setFocusPainted(false);
            sidebar.add(btn);
        }

        // Header
        JPanel header = new JPanel(new BorderLayout());
        header.setBackground(new Color(40, 44, 52));
        JLabel welcome = new JLabel("Welcome to Your Dashboard");
        welcome.setForeground(Color.WHITE);
        welcome.setFont(new Font("Arial", Font.BOLD, 16));
        header.add(welcome, BorderLayout.CENTER);

        // Main content - Task table
        tableModel = new DefaultTableModel(new String[]{"ID", "Title", "Due Date"}, 0);
        taskTable = new JTable(tableModel);
        loadSampleTasks();

        JScrollPane tableScroll = new JScrollPane(taskTable);

        // Layout
        getContentPane().setLayout(new BorderLayout());
        getContentPane().add(sidebar, BorderLayout.WEST);
        getContentPane().add(header, BorderLayout.NORTH);
        getContentPane().add(tableScroll, BorderLayout.CENTER);
    }

    private void loadSampleTasks() {
        tableModel.addRow(new Object[]{1, "Finish Report", "2025-08-01"});
        tableModel.addRow(new Object[]{2, "Team Meeting", "2025-08-01"});
        tableModel.addRow(new Object[]{3, "Code Review", "2025-08-02"});
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            new Dashboard().setVisible(true);
        });
    }
}
