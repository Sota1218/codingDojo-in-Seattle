function BiggieSize(arr){
	for(var i =0;i<arr.length;i++){
		if(arr[i]>0){
			arr[i]='big';
		}
	}
	return arr;
}
function PrintLowReturnHigh(arr){
	for(var i =1;i<arr.length;i++){
		console.log(arr[i]);
	}	
	for(var i =0;i<arr.length;i++){
		if (arr[i]%2!==0){
			return arr[i];
		}
	}
}
function DoubleVision(arr){
	for(var i=0;i<arr.length;i++){
		arr[i]=arr[i]*2;
	}
	return arr;
}
function CountPositives(arr){
	count=0;
	for(var i =0;i<arr.length;i++){
		if(arr[i]>0){
			count+=1
		}
		
	}
	arr[arr.length-1]=count;
	return arr;
}
function evensAndOdds(arr){
	var e=0;
	var o=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2==0){
			e+=1;
		}
		else{
			o+=1;
		}
	}
	if(e==3&&o==3){
		console.log("That's odd!"+"Even more so!");
	}
	else if(e==3){
		console.log("Even more so!");
	}
	else if(o==3){
		console.log("That's odd!");
    }  

}
function incrementTheSeconds(arr){
	for(var i==0;i<arr.length;i++){
		if(i%2==0){
			arr[i]+=1;
		}
		console.log(arr[i]);
	}
	return arr;
}
function previousLengths(arr){
	for(var i=arr.length-1;i>0;i--){
		arr[i]=arr[i-1].length;
	}
	return arr;
}
function addSeven(arr){
	var newarr=[];
	for(var i =0;i<arr.length;i++){
		newarr.push(arr[i]+7);
	}
	return newarr;
}
function reverseArray(arr){
	arr.reverse();
	return arr;
}
function outlookNegative(arr){
	for(var i =0;i<arr.length;i++){
		if (arr[i]>0){
			arr[i]=arr[i]-arr[i]*2;
		}
	}
	return arr;
}
function alwaysHungry(arr){
	for (var i =0 ;i<arr.length;i++){
		if(arr[i]=="food"){
			console.log("yummy");
		}
		else{
			console.log("I'm hungry");
		}
	}
}
function swapTowardTheCenter(arr){
	var revarr=arr.reverse();
	for (var i =0;i<arr.length;i++){
		if(i%2==0){
			arr[i]=revarr[i];
		}
	}
}
function scaleTheArray(arr,num){
	for(var i=0;i<arr.length;i++){
		arr[i]*=num;
	}
	return arr;
}
























