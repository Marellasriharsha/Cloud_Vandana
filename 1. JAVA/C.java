import java.util.Scanner;

public class PangramChecker {
    public static boolean isPangram(String input) {
        // Create an array to mark the presence of each letter from 'a' to 'z'
        boolean[] lettersPresent = new boolean[26];

        // Convert the input to lowercase for case-insensitivity
        input = input.toLowerCase();

        // Iterate through the characters in the input
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            // Check if the character is between 'a' and 'z'
            if (c >= 'a' && c <= 'z') {
                // Mark the presence of the letter
                lettersPresent[c - 'a'] = true;
            }
        }

        // Check if all letters from 'a' to 'z' are present
        for (int i = 0; i < 26; i++) {
            if (!lettersPresent[i]) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        boolean result = isPangram(input);
        if (result) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
