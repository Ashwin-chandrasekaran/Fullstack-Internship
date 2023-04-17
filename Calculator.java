package myPackage;

public abstract class Calculator {
    private double number1;
    private double number2;
    private double number3;



    public Calculator(double number1, double number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    public Calculator(double number1, double number2, double number3) {
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
    }
    public abstract double addNumbers(double b, double c, double d);
    public abstract double subtractNumbers(double b, double c, double d);
    public abstract double multiplyNumbers(double b, double c, double d);

    public abstract double addNumbers(double b, double c);
    public abstract double subtractNumbers(double b, double c);
    public abstract double multiplyNumbers(double b, double c);
    public abstract double divideNumbers(double b, double c);

    public abstract double moduloNumbers(double a,double b);
    public abstract double powerNumbers(double b,double c);
    public double getNumber1(){
        return number1;
    }
    public double getNumber2(){
        return number2;
    }
    public double getNumber3(){
        return number3;
    }
}
