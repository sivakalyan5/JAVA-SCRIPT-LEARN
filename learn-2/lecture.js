console.log("Hello Welcome")
// var const let

var name="Siva kalyan";
console.log("name"); //outpur: name 
console.log(name); //output:Siva kalyan

// var can re-declared variable
var _coursse="MERN";  //using(_),start variable
var rating= 55;
console.log(name,_coursse,rating);  //Siva kalyan MERN 55
var id;
console.log(id); //undefined
console.log(name,id,_coursse,rating);  //Siva kalyan undefined MERN 55

coursse="FULL STACK";
console.log(name,coursse,rating);  //Siva kalyan FULL STACK 55


//  Rules to write variables names
/*
    1. You cannot start your variable name with number.
    2. You can start your varible name with underscore (_),letters, $
    3. Variable names are case  sensitive Car,car are different variable
*/




// Most widely used programming variable case types

/*
    1. camelCase
    2. kabab-case
    3. snake_case
    4. PascalCase
*/

//                    *****CONST*****         //

const marks = 97;
console.log(marks); //output: 97
//marks = 100;
//console.log(marks); //output: Uncaught TypeError: Assignment to constant variable.
//You cannot redeclare const variable
const list = [10,20,30,40];
console.log(list);
/*  output:-
    (4) [10, 20, 30, 40]
    0: 10
    1: 20
    2: 30
    3: 40
    length: 4
    [[Prototype]]: Array(0)
*/
list.push(50);
console.log(list);
/*  output:-
    (5) [10, 20, 30, 40, 50]
    0: 10
    1: 20
    2: 30
    3: 40
    4: 50
    length: 5
    [[Prototype]]: Array(0)
*/
// list=[10,20,30,40,50,60];
// console.log(list);
//output: Uncaught TypeError: Assignment to constant variable.
//You cannot redeclare const variable




//                  *****LET*****             //

var car="TATA MOTOR";
console.log(car); // output: TATA MOTOR

{
    let car="LAND_ROVER";
    console.log(car); // output: LAND_ROVER
}

console.log(car); //output: TATA MOTOR