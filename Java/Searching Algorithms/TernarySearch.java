public class TernarySearch {

    public static int search(int[] arr, int key) {

        int left = 0;
        int right = arr.length - 1;

        while (right - left >= 0) {
            int partition = (right - left) / 3;
            int mid1 = left + partition;
            int mid2 = right - partition;

            if (key == arr[mid1]) {
                return mid1;
            } else if (key == arr[mid2]) {
                return mid2;
            } else if (key < arr[mid1]) {
                right = mid1 - 1;
            } else if (key > arr[mid2]) {
                left = mid2 + 1;
            } else {
                left = mid1 + 1;
                right = mid2 - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println("Index of Key is " + search(arr,3));
    }
}