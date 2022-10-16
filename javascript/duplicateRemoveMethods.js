// Let suppose we have an Array arrVal
let arrVal = [2, 5, 3, 9, 3, 4, 0];

// Old Method (<=ES5)
function removeDuplicate(myArr){
     while(hasDuplicate(myArr)){// while loop here is used to check whether the loop has any duplicate or not
         for(let i=0 ; i < myArr.length ; i++){
             // i is index by loop and myArr.lastIndexof(myArr[i]) will give index from reverse side of element that is already present at myArr[i]
             if(i!==myArr.lastIndexOf(myArr[i])){
                 myArr.splice(myArr.lastIndexOf(myArr[i]),1) //splice is used to delete or remove specific value upto specific value 
                 }
             }
     }
 } 

function hasDuplicate(myArr){// hasDuplicate check whether the array has any duplicate or not
     for(let i=0 ; i < myArr.length ; i++){
        if(i!==myArr.lastIndexOf(myArr[i]))
        return  true;
     }
     return false;
}

// Clean array
console.log(removeDuplicate(arrVal))

// ES6+ methods
// Method 1
// Set is a Data Structure which by default remove duplicates and 
// its much more faster than old Method
const filteredArray = Array.from(new Set(arrVal))

console.log(filteredArray)

// Method 2
// Its same as above the only difference is we use a shorthand notation 
// that 3 dots split the sets element and in the end we end up an array with no duplicates 
const filteredArray2 = [...new Set(arrVal)]

console.log(filteredArray2)