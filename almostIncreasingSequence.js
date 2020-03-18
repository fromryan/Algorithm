function almostIncreasingSequence(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] > arr[i+1]){
            count += 1;
        }
        if(count > 1){
            return false;
        }
    }
    return true;
}


// test case
// console.log(almostIncreasingSequence([1,2,8,7,6,9])) --> false
// console.log(almostIncreasingSequence([1,2,4,7,6,9])) --> true
