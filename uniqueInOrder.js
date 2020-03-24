var uniqueInOrder = function(iterable){
    var uniqueList = [];
    if(iterable.length === 0){
      return uniqueList;
    }
    if(iterable.length === 1){
        uniqueList.push(iterable[0]);
        return uniqueList;
    }
    for(var i=0; i<iterable.length; i++){
      
      if(iterable[i] !== iterable[i+1]){
        uniqueList.push(iterable[i]);
      }
    }
    return uniqueList; 
  }
  
  // Test case
  
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// ['A','B','C','D','A','B']