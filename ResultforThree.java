package myPackage;

import myPackage.Display;
import myPackage.Operands;

public class ResultforThree extends Display {
//

//    public myPackage.ResultforThree(int number1, int number2) {
//        super();
//    }
//
//    public myPackage.ResultforThree(int number1, int number2, int number3) {
//        super();
//    }

    public static void performThree(String operator, Operands calc) {
        switch (operator) {
            case "+":
                System.out.println("The sum of the numbers are " + calc.addNumbers(calc.getNumber1(), calc.getNumber2(), calc.getNumber3()));
                break;
            case "-":
                System.out.println("The difference of the numbers are " + calc.subtractNumbers(calc.getNumber1(), calc.getNumber2(), calc.getNumber3()));
                break;
            case "*":
                System.out.println("The product of the numbers are " + calc.multiplyNumbers(calc.getNumber1(), calc.getNumber2(), calc.getNumber3()));
                break;
            default:
                System.out.println("invalid input");
        }
    }
}
