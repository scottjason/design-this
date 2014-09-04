// How "this" will point can be found by inspecting the call-site and there are 4 rules that apply.

//------------------------------------------------------------------

// RULE 1:  DEFAULT BINDING

function getName() {
  console.log(this.name); // => "Scott"
}

var name = "Scott"

getName();

// getName() is called with only reference to itself.
// this.name resolves to the global variable "name". So the default binding for "this" applied to the function call, points "this" at the global object.


// STRICT MODE

// Strict mode applies to entire scripts or to individual functions.
// Strict mode makes it impossible to accidentally create global variable
// Global objects are only eligible for default binding if the contents of getName() are not
// running in strict mode


function getName() {
  "use strict";
  console.log(this.name); // => Cannot read property 'name' of undefined
}

var name = "Scott"

getName();

//------------------------------------------------------------------

// RULE 2:  IMPLICIT BINDING

function getName() {
  console.log(this.name) // => 'Lee'
}

var nameMiddle = {
  name: "Lee",
  getName: getName
}

var nameLast = {
  name: "Jason",
  nameMiddle: nameMiddle
}

var nameFirst = {
  name: "Scott",
  nameLast: nameLast
}

nameFirst.nameLast.nameMiddle.getName()

/* the call-site uses the nameMiddle to reference the function, so at run time, it's this last object that contains the function reference.

So the call-site has a context object, and this is an example of implicit binding. */

//------------------------------------------------------------------

// binding with callbacks

function whereAmI() {
  console.log( this.homes.myHome ) // <= call-site // it returns => "San Francisco"
}

function findHome( callback ){
    callback();
}

var homes = {
  myHome: "San Francisco",
  notMyHome: "Alabama",
  whereAmI: whereAmI
}

findHome( homes.whereAmI )

// here we are passing a callback function with an object context. The object points to the whereAmI function

//------------------------------------------------------------------

// RULE 3:  EXPLICIT BINDING

function iDemandThis(){
    return this.timeForBed // => 'Go to bed!'
}

var myRules = {
    timeForBed: "Go to bed!",
    timeToGetUp: "Wake Up!"
};

iDemandThis.call( myRules );

// so here we did not need a function reference in the object, we used the call method and passed in the object create force what "this" points to. This is explicit binding.

var x = 10;
var o = { x: 15 };

function f()
{
    alert(this.x);
}

f();
f.call(o);

//------------------------------------------------------------------

// call(..) and apply(..) => EXPLICIT BINDING


var name = "Scott";
var users = { name: "Jason" };

function fetchUser()
{
    console.log( this.name ) // => returns Scott and then Jason
}

fetchUser();
fetchUser.call( users );

// the first time on line 12 "this" is in reference to the global var
// the second call on line 13 "this" references the object we've explicity passed in.

//------------------------------------------------------------------

// RULE 4 HARD BINDING

// a pattern based on explicit binding where the reference to "this" is retained.
// especially useful with DOM manipulation where the window becomes the reference to this

function resultInSpiteOfWindow() {
  console.log( this.num ); // <= call-site
}
var numsObject = { num: 10 };

var fetchNumber = function() { resultInSpiteOfWindow.call( numsObject ); };

fetchNumber(); // => 10
setTimeout( fetchNumber, 100 ); // => 10 !!!
fetchNumber.call( window ) // 10 !!!!!!!

// we can also use the built in JS 'bind' method like this:
function resultInSpiteOfWindow(myArg) {
  console.log( this.num, myArg );
  return this.num + myArg;
}
var numsObject = { num: 10 };

var fetchNumber = resultInSpiteOfWindow.bind( numsObject );
var iStoredtheAboveFunction = fetchNumber( 3 ); // => 10 3


