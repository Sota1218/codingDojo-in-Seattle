for(var i=0; i<5;i++){   
   console.log(i);
}
//0,1,2,3,4
 for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}
//1,2,3,4,5
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
//3,4,5,6,7
function y(num1, num2){   
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
///5,8
function y(num1, num2){
   console.log(num1);   
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))
//2,5,3,8
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);
//15,10,10

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);
//15,10,20