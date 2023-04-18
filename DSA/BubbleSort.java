package DSA;
import java.util.*;
//time complexity- o(n^2)-worst case      space complexity- o(1).

public class BubbleSort {
        public static int[] bubbleSort(int[] array) {
            for(int i=0;i<array.length-1;i++){
                int flag=0;
                for(int j=0;j<array.length-1-i;j++){
                    if(array[j]>array[j+1]){
                        int temp=array[j];
                        array[j]=array[j+1];
                        array[j+1]=temp;
                        flag=1;
                    }
                }
                if(flag==0){
                    break;
                }

            }
            // Write your code here.
            return array;
        }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int size=sc.nextInt();
        int[] arr=new int[size];
        for(int i=0;i<size;i++){
            arr[i]=sc.nextInt();
        }
        System.out.println(Arrays.toString(bubbleSort(arr)));
    }
    }
