import java.util.HashMap;
import java.util.Scanner;

public class RomanToInteger {
    public int romanToInt(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }

        // Create a HashMap to store the values of Roman numerals
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = romanValues.get(s.charAt(s.length() - 1)); // Initialize result with the value of the rightmost numeral

        for (int i = s.length() - 2; i >= 0; i--) {
            // If the current numeral is less than the next numeral, subtract its value
            if (romanValues.get(s.charAt(i)) < romanValues.get(s.charAt(i + 1))) {
                result -= romanValues.get(s.charAt(i));
            } else {
                result += romanValues.get(s.charAt(i));
            }
        }

        return result;
    }

    public static void main(String[] args) {
        RomanToInteger converter = new RomanToInteger();
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().trim();
        int result = converter.romanToInt(romanNumeral);

        System.out.println("The integer equivalent of " + romanNumeral + " is " + result);

        scanner.close();
    }
}
