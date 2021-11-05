public class JumpSearch {

    public static int search(int[] arr, int key) {
        int blockSize = (int) Math.sqrt(arr.length);
        int start = 0;
        int next = blockSize;

        while (start < arr.length && key > arr[next - 1]) {
            start = next;
            next = next + blockSize;

            if (next >= arr.length)
                next = arr.length;
        }

        for (int i = start; i < next; i++) {
            if (key == arr[i])
                return i;
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println("Index of Key is " + search(arr,3));
    }
}
