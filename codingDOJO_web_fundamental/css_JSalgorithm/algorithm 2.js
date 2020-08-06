//print 1 to x
function printUpTo(x){
  // your code here
  if(x<=0){
    console.log("negative number");
  	return false;
  }
  else{
  	
    for(var i=1;i<=x;i++){
      console.log(i);
    }
  }
}
printUpTo(1000); // should print all the integers from 1 to 1000
var y = printUpTo(-10); // should return false
console.log(y); // should print false
//PrintSum
function printSum(x){
  var sum = 0;
  //your code here
  for(var i=0;i<=x;i++){
  	console.log(i);
  	sum+=i;
  }
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640
//PrintSumArray
function printSumArray(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    //your code here
    sum+=x[i];
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6
//Bonus:LargestElement
function LargestElement(arr){
    var large=arr[0];
	for(var i=0;i<arr.length;i++){
		if(large<arr[i]){
			large=arr[i];
		}
	}		
	return large;
}
console.log(LargestElement([1,30,5,7]));