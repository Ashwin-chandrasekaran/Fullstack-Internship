package DSA;
import java.util.*;
//I have used memoization process make recursion work effectively for higher values of input.

public class Fibonacci {
    public static int getNthFib(int n) {
        int[] fibonacciCache = new int[n + 1];

        if (n == 2) {
            return 1;
        }
        if (n == 1) {
            return 0;
        }
        if (fibonacciCache[n] != 0) {
            return fibonacciCache[n];
        }
        int fibonacciNumber = getNthFib(n - 1) + getNthFib(n - 2);
        fibonacciCache[n] = fibonacciNumber;
        return fibonacciNumber;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println(getNthFib(num));
    }
}

