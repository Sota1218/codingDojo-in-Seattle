//part 1

function sigma(num){
	var sum=0;
	for (var i=1;i<=num;i++){
		sum+=i;
	}
	return sum;
}
function factorial(num){
	var sum=1;
	for (var i=1;i<=num;i++){
		sum*=i;
	}
	return sum;
}
function fibonacci(num){
	var ans=[0,1];
	for(var i=0;i<num-1;i++){
		ans.push(ans[i]+ans[i+1]);
	}
	return ans[num];
}
function SecondToLast(arr){
	if(arr.length<=1){
		return null;
	}
	return arr[arr.length-2];
}
function nthToLast(arr,N){
	if(arr.length<N){
		return null;
	}
	return arr[arr.length-N];
}
function secondLargest(arr){
	if(arr.length<=1){
		return null;
	}
  function compareFunc(a, b) {
    return a - b;
}
	arr.sort(compareFunc);
	return arr[arr.length-2];
}
function doubleTrouble(arr){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		newarr.push(arr[i]);
		newarr.push(arr[i]);
	}
	return newarr;
}

//part 2
function fib(n){
	if(n==0||n==1){
		return n;
	}
	return fib(n-2)+fib(n-1);
}





