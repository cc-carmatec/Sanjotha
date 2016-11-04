
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
var sexy, JavaScript;
function sexy() {
	return this.sexy ? ("ugly. Rails is HOT.","sexy!") : "no Python.";
}
JavaScript = { 
    sexy:sexy, 
    is:function (sexAppeal) {
    sexAppeal = true;
    if (!arguments[0]) {
        console.log("JavaScript is " + this.sexy());
    }
} };
JavaScript.is();

var imgSizer = {
     Config : {
          imgCache : []
          ,spacer : "/path/to/your/spacer.gif"
     }
     ,collate : function(aScope) {
          var isOldIE = (document.all && !window.opera && !window.XDomainRequest) ? 1 : 0;
          if (isOldIE && document.getElementsByTagName) {
               var c = imgSizer;
               var imgCache = c.Config.imgCache;
               var images = (aScope && aScope.length) ? aScope : document.getElementsByTagName("img");
               for (var i = 0; i < images.length; i++) {
                    images.origWidth = images.offsetWidth;
                    images.origHeight = images.offsetHeight;
                    imgCache.push(images);
                    c.ieAlpha(images);
                    images.style.width = "100%";
               }
               if (imgCache.length) {
                    c.resize(function() {
                         for (var i = 0; i < imgCache.length; i++) {
                              var ratio = (imgCache.offsetWidth / imgCache.origWidth);
                              imgCache.style.height = (imgCache.origHeight * ratio) + "px";
                         }
                    });
               }
          }
     }
     ,ieAlpha : function(img) {
          var c = imgSizer;
          if (img.oldSrc) {
               img.src = img.oldSrc;
          }
          var src = img.src;
          img.style.width = img.offsetWidth + "px";
          img.style.height = img.offsetHeight + "px";
          img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')"
          img.oldSrc = src;
          img.src = c.Config.spacer;
     }
     // Ghettomodified version of Simon Willison's addLoadEvent() -- http://simonwillison.net/2004/May/26/addLoadEvent/
     ,resize : function(func) {
          var oldonresize = window.onresize;
          if (typeof window.onresize != 'function') {
               window.onresize = func;
          } else {
               window.onresize = function() {
                    if (oldonresize) {
                         oldonresize();
                    }
                    func();
               }
          }
     }
};

function onDocumentReady(){
     if (document.getElementById && document.getElementsByTagName) {
          var aImgs = getElementsByTagName("img");
          imgSizer.collate(aImgs);
     }
 }