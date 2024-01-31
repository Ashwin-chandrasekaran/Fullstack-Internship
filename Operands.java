package myPackage;

import myPackage.Calculator;

public class Operands extends Calculator {

    public Operands(double number1, double number2) {
        super(number1, number2);
    }

    public Operands(double number1, double number2, double number3) {
        super(number1, number2, number3);
    }

    @Override
    public double addNumbers(double b, double c, double d) {
        return b+c+d;
    }

    @Override
    public double subtractNumbers(double b, double c, double d) {
        return b-c-d;
    }

    @Override
    public double multiplyNumbers(double b, double c, double d) {
        return b*c*d;
    }

    @Override
    public double addNumbers(double b, double c) {
        return b+c;
    }

    @Override
    public double subtractNumbers(double b, double c) {
        return b-c;
    }

    @Override
    public double multiplyNumbers(double b, double c) {
        return b*c;
    }

    @Override
    public double divideNumbers(double b, double c) {
        try {
            return b / c;
        }catch(ArithmeticException e){
            System.out.println("cannot divide by zero");
        }
        return c;
    }

    @Override
    public double moduloNumbers(double a, double b) {
        return a%b;
    }

    @Override
    public double powerNumbers(double b, double c) {
        return  Math.pow(b,c);
    }
}