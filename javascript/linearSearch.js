function LinearSearch(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] == ele) {
          return console.log(i);
      }
    }
    return console.log('Element not found')
  }
  
  var arr = [234, 43, 55, 63, 5, 6, 235, 547]
  
  LinearSearch(arr, 5)
  