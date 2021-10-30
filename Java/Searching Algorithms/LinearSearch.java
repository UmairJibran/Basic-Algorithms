public class LinearSearch {

    public static int search(int[] arr, int key) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            if (arr[i] == key)
                return i;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 10, 40};
        int searchKey = 10;

        int result = search(arr, searchKey);
        System.out.print(result == -1 ? "Element is not present in array" : "Element is present at index " + result);
    }
}
