//16
var myNumber=42;
var myName=Sota;
myNumber=myName;
myName=42;

for(var i=-52;i<=1066;i++){
	console.log(i);
}

function beCheerful(){
	for(var i=1;i<=98;i++){
	  console.log('good morning!');
	}
}
for(var i=-300;i<=0;i-=3){
	console.log(i);
}
var i=2000;
while(i<=5280){
	console.log(i);
	i+=1
}
var i =1218;
if (i==1218){
	console.log('How did you know?')
}
else{
	console.log('Just another day....')
}
var num=100
function leapYear(){
	if (num%4==0&&num%100!=0){
		return true;
	}
	else if(num%400==0){
		return true;
	}
	else{
		return false;
	}
}
var number=0;
for(var i=515;i<=4095;i+=5){
    console.log(i);
    number+=1;
}
console.log(number);
var i=6
while(i<=60000){
	console.log(i);
	i+=6;
}
for(var i=1;i<=100;i++){
	if(i%5==0){
		console.log('Coding');
		if(i%10==0){
			('Dojo')
		}
	}
	else{
		console.log(i);
	}
}
console.log('getElementById');
var a=0
for(var i=-300000;i<=300000;i++){
	if (i%2!=0){
         a=a+i;
	}
}
console.log(a);
var i = 2016;
while(i>0){
	i-=4
}
var a=[lowNum,highNum,mult]
for(var i=a[1];i>=a[0];i=i-a[2]){
	console.log(i)
}
var i=param2
var a=[param1,param2,param3,param4]
while(param2<=i<=param3){
	if (i%param1==0&&i!=param4){
		console.log(i);
	}
}
//20
function downNumber(arr){
	for (var i=arr.length-1;i>=0;i--){
        return arr=arr.push(arr[i]);
	}
}
function a(arr){
	console.log(arr[0]);
	return arr[1];
}
function b(arr){
	return arr[0].length && arr.length;
}
var num=[1,3,5,7,9,13];
var count=0;
for (var i=0;i<num.length;i++){
	if (i>num[1]){
		count+=1;
	}
}
return count;

var count=0
function d(arr){
    for (var i=0;i<arr.length;i++){
	    if (i>num[1]){
		    count+=1;
	}
	console.log(count);
}
function e(num1,num2){
    if(num1==num2){
    	console.log('Jinx!');
    }
    else{
    	return num1.length&&num2.length;
}
function f(arr){
	if(arr[0]<arr.length){
		console.log('Too small!')
	}
	else if(arr[0]>arr.length){
		console.log('Too big!')
	}
	else{
		console.log('Just right')
	}
}
function fahrenheitToCelsius(Fahrenheit){
	return (Fahrenheit-32)*5/9;
}
function celsiusToFahrenheit(Celsius){
	return (9/5*Celsius)+32;
}

function makeItBig(arr) {
    for(var i=0;i<arr.length;i++)
    	if(i>0){
    		arr[i]='big';
    	}
}
var s=arr[0];
var t=arr[0];
function a(arr){
	for (var i=0;arr.length;i++){
        if(i<s){
        	s=arr[i];
        }
        else if(i>t){
        	t=arr[i];
        }
	}
	console.log(s);
	return t;
}
function b(arr){
	for(var i=0;i<arr.length;i++){
		if(i>0){
			console.log(arr[i])
		}
		else if(i%2!=0){
			return arr[i];
		}
	}
}
function double(arr){
	var double=[]
	for(var i=0;i<arr.length;i++){
		double.push(arr[i]*arr[i]);
	}
	return double;
}
function countPositives(arr){
	var count=0
	for (var i=0;i<arr.length;i++){
		if (arr[i]>0){
			count+=1;
		}
	}
	arr[arr.length-1]=count;
	return arr;
}

function a(arr){
	counte=0;
	counto=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2==0){
			counte+=1;
		}
		else{
			counto+=1;
		}

	}
	if (counte>=3){
		console.log("That's odd!");
	}
	else if(counto>=3){
		console,log("Even more so!");
	}
}
function a(arr){
	for (var i=0;i<arr.length;i++){
		if (arr[i]%2!=0){
			arr[i]+=1;
		}
	}
	console.log(arr);
	return arr;
}


























