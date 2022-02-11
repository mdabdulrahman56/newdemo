// function swap(a,b) {
//    console.log("before swap a,b",a,b);
//    var temp =a;
//    a=b;
//    b=temp;
// console.log("after swap a,b",a,b);   
// };

// var x =10;
// var y =20;
// // pass by value
// swap(x,y);
// console.log("after swap function x,y");
// assognment
// function calls
// equality check
function fn(o) {
    o.width=1020;
}
var obj={
    width:1
}
//pass by reference
fn(obj);
console.log(obj);