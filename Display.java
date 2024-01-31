package myPackage;

import myPackage.Operands;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Display {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Press 1 to start calculator\n");
        int a = scanner.nextInt();
        System.out.println("------CALCULATOR--------");
        boolean g=true;
        while(g==true) {
            double b = 0;
            double c = 0;
            double d = 0;
            System.out.println("enter the number of operands that you want to perform operation");
            int num=scanner.nextInt();
            //CalculatorThree calc = null;
            Operands calc1 = null;
            boolean check=true;
            if(num==2) {
                System.out.println("enter the operands that you want to perform action with");
                    try {
                        b = scanner.nextInt();
                        c = scanner.nextInt();
                    } catch (InputMismatchException e) {
                        System.out.println("enter a valid number");
                    }
                
                calc1 = new Operands(b, c);
                System.out.println("enter the operator you want to perform\n1.Addition(+)\n2.Subtraction(-)\n3.Multiplication(*)\n4.Division(/)\n5.Modulo(%)\n6.exponent(^)");
            }else{
                System.out.println("enter the operands that you want to perform action with");
                try {
                    b = scanner.nextDouble();
                    c = scanner.nextDouble();
                    d = scanner.nextDouble();
                }catch(InputMismatchException e){
                    System.out.println("enter a valid number");
                }
                calc1 = new Operands(b, c, d);
                System.out.println("enter the operator you want to perform\n1.Addition(+)\n2.Subtraction(-)\n3.Multiplication(*)");

            }
            boolean m=true;
            String operator = null;
            operator = scanner.next();
//            while(m) {
//                operator = scanner.next();
//                if (operator.equals("+") && operator.equals("-") && operator.equals("*") && operator.equals("/") && operator.equals("%") && operator.equals("^")) {
//                    System.out.println("Invalid operator, enter the correct operator");
//                }
//                else{
//                    m=false;
//                }
//            }
            if(num==3){
                ResultforThree.performThree(operator,calc1);
            }else {
                switch (operator) {
                    case "+":
                        System.out.println("The sum of the numbers are " + calc1.addNumbers(b, c));
                        break;
                    case "-":
                        System.out.println("The difference of the numbers are " + calc1.subtractNumbers(b, c));
                        break;
                    case "*":
                        System.out.println("The product of the numbers are " + calc1.multiplyNumbers(b, c));
                        break;
                    case "/":
                        System.out.println("The quotient of the numbers are " + calc1.divideNumbers(b, c));
                        break;
                    case "%":
                        System.out.println("The modulus of the numbers are " + calc1.moduloNumbers(b, c));
                        break;
                    case "^":
                        System.out.println("operand1 to the power operand2 is " + calc1.powerNumbers(b, c));
                        break;
                    default:
                        System.out.println("invalid input");
                }
            }
            System.out.println("enter y to continue and n to exit");
            String string= scanner.next();
            if(string.equals("n")){
                break;
            }
        }
    }
}
