console.log("This lecture is for type conversion and coertion");

// Type Conversion
//             ***** Number to String*****
let vari1=100;
vari1=String(120)
console.log(vari1,(typeof vari1));

//  small trick is adding quotion
let vari2="100";
console.log(vari2,(typeof vari2));
//            ***** True as boolean to string*****
let vari3;
vari3 = String(true)
console.log(vari3,(typeof vari3));

//           ***** Date to srting****
let vari4;
vari4=String(new Date());
console.log(vari4,(typeof vari4));

//           ***** Array (object) to String *****
let vari5=String([1,2,3,4,5]);
console.log(vari5,(typeof vari5));


let vari6=prompt("enter number");
vari6=String(vari6)
console.log(vari6,(typeof vari6))

//       *****String to Number *****
let x=parseInt("83.5676");
let y=parseFloat("83.5677");
console.log(x,y.toFixed(2),(typeof x),(typeof y));

//    Type Coercion

let a="hello ";
let b="welcome";
console.log(a+b);

let a1="hello "
let b1=10;
console.log(a1+b1);

let a2=10;
let b2=10;
console.log(a2+b2);