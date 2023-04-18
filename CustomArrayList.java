package DSA;
//custom generic ArrayList

import java.util.Arrays;

public class CustomArrayList<T> {
    public static Object data[];
    private static int inititial_size=10;
    private int size=0;

    public CustomArrayList() {
        this.data = new Object[inititial_size];
    }
    public void add(T num){
        if(ismax()){
            changeSize();
        }
        data[size]=num;
        size++;
    }

    private void changeSize() {
        Object temp[]= new Object[(data.length/2) + data.length];
        for(int i=0;i<data.length;i++){
            temp[i]=data[i];
        }
        data=temp;
    }

    private boolean ismax() {
        return size==data.length;
    }
    public T remove(){
        T removed=(T) this.data[--size];
        return removed;
    }
    public T getElement(int index){
        return (T)this.data[index];
    }
    public void setElement(int index,T num){
        this.data[index]=num;
    }

    @Override
    public String toString() {
        return Arrays.toString(data) + " " + size + " " + data.length;
    }

    public static void main(String[] args){
        CustomArrayList<Integer> arrayList1=new CustomArrayList();
        CustomArrayList<String> arrayList2=new CustomArrayList();
        for(int i=0;i<11;i++){
            arrayList1.add(i+1);
        }
        arrayList1.setElement(5,100);
        System.out.println(arrayList1);
        for(int i=0;i<11;i++){
            arrayList2.add("ashwin");
        }
        arrayList2.setElement(5,"jon jones");
        System.out.println(arrayList2);

    }
}
