
                       // Assuming a global variable mistypedVariable exists
//mistypedVaraible = 17

// var o = { p: 1, p: 2, p:3 };
// // console.log(o.p);
// function sum(a, b, c){ // !!! syntax error
//   // "use strict";
//   return a + b + c; // wrong if this code ran
// }
// console.log(sum(1,2,3));
var firstName="sanjota",lastName= "Hugar";
var myObject = {
     firstName:"John",
     lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
    console.log(this.firstName + " " + this.lastName);
console.log(myObject.fullName());
// var firstName = "Peter",
// lastName = "Ally";
// 	function showFullName () {
// 	// "this" inside this function will have the value of the window object​
// 	// because the showFullName () function is defined in the global scope, just like the firstName and lastName​
// 	console.log (this.firstName + " " + this.lastName);
// }
// var person = {
//     //firstName   :"Penelope",
//     //lastName    :"Barrymore",
//     // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,â€‹
//     // "this" will have the value of the person object because the person object will invoke showFullName ()â€‹
//     showFullName:function () {
//     console.log (this.firstName + " " + this.lastName);
//    // console.log(person.firstName + " " + person.lastName);
//     }
// }
// showFullName();
// //person.showFullName();
// // window is the object that all global variables and functions are defined on, hence:​
// window.showFullName();
// // "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:​

// person.showFullName();
// var x;

// function a() {
//       y=10;
//     console.log(y);
// }
// // a();
// //console.log(y);


// /////////////////////
// var o = {
//   prop: 37,
//   f: function() {
//     return this.prop;
//   }
// };

// console.log(o.f()); // logs 37
// ///////////////////////////

// ////////////////////////
// var o = {prop: 37};

// function independent() {
//   return this.prop;
// }

// o.f = independent;

// console.log(o.f());
// /////////////////////////////

// o.b = {g: independent, prop: 42};
// console.log(o.b.g()); // logs 42

// //////////////////////

// function sum(){
//   return this.a + this.b + this.c;
// }

// var o = {
//   a: 1,
//   b: 2,
//   c: 3,
//   get average(){
//     return (this.a + this.b + this.c) / 3;
//   }
//   // get sum(){
//   // 	return this.a + this.b + this.c;
//   // }
// };
//  Object.defineProperty(o, 'sum', {
//      get: sum, enumerable:true, configurable:true});

// console.log(o.average, o.sum);

// ///////////////////////////////////

// var name = "kittens";
// if (name == "puppies") {
//   name += "!";
//   console.log('name');
// } else if (name == "kittens") {
//   name += "!!";
//    console.log('name');
// } else {
//   name = "!" + name;
//    console.log('name');
// }
// name == "kittens!!"
//  console.log('name');
//  /////////////////

//  var a = ["dog", "cat", "hen"];
// a[100] = "fox";
// console.log(a.length);
// console.log(a[90]);
// a.push('item');
// console.log(a[3]);
// console.log(a.length);
// ///////////////
// ["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
// 	console.log(a[101]);
// });
// ////////////

// var sumAll =function(){
// 	var i, sum=0;
// 	for(i=0; i< arguments.length; i++){
// 		sum+=arguments[i];
// 	}
// 	console.log(sum);
// }

// sumAll(1,4,4,9,7,898);
// ///////////////

// function add(x, y) {
//   var total = x + y;
//   return total;
// }
// add(2,4);

/////////////
// function avg() {
//   var sum = 0;
//   for (var i = 0, j = arguments.length; i < j; i++) {
//     sum += arguments[i];
//   }
//   return sum / arguments.length;
//  }


// console.log(avg(2, 3, 4, 5));
// var myvar = "my value";
// (function() {
//   console.log(this.myvar); // undefined
//   var myvar = "local value";
// })();
$(document).ready(function(){
// $( "a" ).click(function( event ) {
//             //alert( "The link will no longer take you to jquery.com" );
//            event.preventDefault();
//             $( this ).attr( "href", "allMyHrefsAreTheSameNow.html" );
//             var href = $('a').attr('href');
//                 alert(href);
//         });
// var href = $('a').attr('href');
//                 alert(href);
});
