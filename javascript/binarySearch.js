function BinarySearch(arr, ele) {
     let lo = 0, hi = arr.length - 1;
     while(lo <= hi) {
         let mid = lo + (hi - lo) / 2;
         if(arr[mid] == ele) {
             return console.log(mid);
         }
         else if(arr[mid] > ele) {
            hi = mid - 1;
         }
         else lo = mid + 1;
     }
     return console.log('Element not found');
  }
  
  var arr = [234, 43, 55, 63, 5, 6, 235, 547]
  
  BinarySearch(arr, 5)
  