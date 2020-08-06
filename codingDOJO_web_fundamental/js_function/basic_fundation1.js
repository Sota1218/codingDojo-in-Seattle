function get1to255{
	for(var i=1;i<=255;i++){
		console.log(i);
	}
}
function geteven1000{
	for(var i=1;i<=1000;i++){
		if (i%2=0) {
			console.log(i);
		}
	}
}
function sumOdd5000{
	var sum=0
	for (var i = 1; i <=5000; i++) {
		if (i%2!=0) {
			sum+=i
		}
	}
	return sum;
}
function IterateAnArray(arr){
	var sum=0
	for (var i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum;
}
function FindMax(arr){
	var max=arr[0];
	for(var i=0;i<arr.length;i++){
		if(arr[i]>max){
			max=arr[i];
		}
	}
	return max;
}
function FindAverage(arr){
	var sum=0
	for(var i =0;i<arr.length;i++){
		sum=arr[i];
	}
	return sum/arr.length;
}
function ArrayOdd{
	var arr=[];
	for(var i =1;i<=50;i++){
		if (i%2!=2){
			arr.push(i);
		}
	}
	return arr;
}
function GreaterThanY(arr,Y){
	var count=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]>Y){
			count+=1
		}
	}
	return count;
}
function Squares(arr){
	for(var i=0;i<arr.length;i++){
		arr[i]=(arr[i])**2;
	}
	return arr;
}
function Negatives{
	for(var i=0;i<arr.length;i++){
		if(arr[i]<0){
			arr[i]=0;
		}
	}
	return arr;
}
function MaxMinAvg(arr){
	var sum=0;
	var max=arr[0];
	var min=arr[0];
	var newarr=[max,min,sum/arr.length];
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i];
		}
		else if(min>arr[i]){
			min=arr[i];
		}
		sum+=i;
	}
	return newarr;
}
//console.log(MaxMinAvg([1,2,3,4,5,6,7,8,9,10]));
//run->[1,1,0]  Why?????????
function SwapValues(arr){
	var a=arr[0];
	arr[0]=arr[arr.length-1];
	arr[arr.length-1]=a;
}
function NumberToString(arr){
  for(var i =0;i<arr.length;i++){
	if(arr[i]<0){
		arr[i]='Dojo';
	}
	
  }  
  return arr;
}













