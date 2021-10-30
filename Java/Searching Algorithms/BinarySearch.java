public class BinarySearch {

    public static int search(int[] arr, int key) {
        int l = 0, r = arr.length - 1;
        while (l <= r) {
            int m = l + (r - l) / 2;

            if (arr[m] == key)
                return m;

            if (arr[m] < key)
                l = m + 1;
            else
                r = m - 1;
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
