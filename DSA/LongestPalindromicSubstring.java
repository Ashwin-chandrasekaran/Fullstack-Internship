package DSA;
import java.util.*;

public class LongestPalindromicSubstring {

    public static String longestPalindromicSubstring(String str) {
        int[] longest = {0, 1};
        for (int i = 1; i < str.length(); i++) {
            int[] odd = checkforpalindrome(str, i - 1, i + 1);
            int[] even = checkforpalindrome(str, i - 1, i);
            int currentlongest[] = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
            longest = longest[1] - longest[0] > currentlongest[1] - currentlongest[0] ? longest : currentlongest;
        }
        return str.substring(longest[0], longest[1]);
    }

    public static int[] checkforpalindrome(String str, int leftidx, int rightidx) {
        while (leftidx >= 0 && rightidx < str.length()) {
            if (str.charAt(leftidx) != str.charAt(rightidx)) {
                break;
            }
            leftidx--;
            rightidx++;
        }
        return new int[]{leftidx + 1, rightidx};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        System.out.println(longestPalindromicSubstring(str));
    }
}


