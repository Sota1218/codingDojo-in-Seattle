function a(){
    return 35;
}
console.log(a())
//predict 35
//run 35
function a(){
    return 4;
}
console.log(a()+a());
//predict 8
//run 8
function a(b){
    return b;
}
console.log(a(2)+a(4));
//predict 6
//run 6
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//predict 3,9
//run 3,9
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
//predict 40
//run 40
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//predict 15,4
//run 4 Why????????
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//predict 10,3,30
// run 10,3,30
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//predict 3,4
//run 3,4
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// predict 2,3,4,5,6,7,8,9,10,11
// run 2,5,8,11
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//predict 0,1,2,3,4,5,6,7,8,9 0,1,2,3,4,5,6,7,8,9,0
//run 0,1,2,3,4,5,6,7,8,9 0,1,2,3,4,5,6,7,8,9,0
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//predict Nothing
//run Nothing
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//predict 10
//run 10
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//predict 15,10
//run 15,10
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//predict 15,15
//run 15,15