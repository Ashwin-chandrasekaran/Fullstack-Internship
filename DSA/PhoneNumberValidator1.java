package DSA;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class PhoneNumberValidator1 {
    public static void validate() {       //+91-8248858013
        Scanner scanner = new Scanner(System.in);
        String number = scanner.nextLine();
        String value = number.replaceAll("[^0-9]", "");
        HashMap<String, String> map = new HashMap<>();
        map.put("91", "India");
        map.put("23", "Srilanka");
        map.put("99", "Nepal");
        map.put("04", "Bhutan");
        map.put("87", "Pak");
//        System.out.println(map);
        if(map.containsKey(value.substring(0,2))){
            if(map.get(value.substring(0,2)).equals("India")){
                System.out.println(value);
                System.out.println(checkForCountry(value,12));
            }else if(map.get(value.substring(0,2)).equals("Srilanka")){
                System.out.println(checkForCountry(value,11));
            }else if(map.get(value.substring(0,2)).equals("Nepal")){
                System.out.println(checkForCountry(value,10));
            }else if(map.get(value.substring(0,2)).equals("Bhutan")){
                System.out.println(checkForCountry(value,8));
            }else if(map.get(value.substring(0,2)).equals("Pak")){
                System.out.println(checkForCountry(value,12));
            }
        }else{
            System.out.println("false");
        }
    }
    private static boolean checkForCountry(String value,int max){
        if(value.length() == max){
            return true;
        }
        return false;
    }



}
//India - +91 10 digits
//        Srilanka - +23 9 digits
//        Nepal - +99 8 digits
//        Bhutan - +04 6 digits
//        Pak - + 87 10 digits


