console.log("All about Strings in JavaScript");
//               *****String*****
let vari1="hello";
let vari2="welcome";
//   1 way
console.log(vari1+" "+vari2);
//    2-way
let vari3=vari1.concat(" ",vari2);
console.log(vari3);
//  3-way
vari1=vari1.concat(" this "+vari2);
console.log(vari1)

let html=`<h1> Hello </h1> <p> Welcome <p>`;
console.log(html);
console.log(html.length);

console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[2]+" "+html[5,9]);//********
console.log(html.indexOf('>'))
console.log(html.charAt(6))
console.log(html.endsWith('>'));
console.log(html.includes('>'));
console.log(html.substring(1,6));
console.log(html.slice(0,10));
console.log(html.split('>'));
console.log(html.replace('Hello','world'))




let i1='android';
let i2='ios';
let html2= `hi ${i1} hello ${i2}`;
console.log(html2);
document.body.innerHTML=html2;