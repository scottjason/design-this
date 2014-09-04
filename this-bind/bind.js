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
// Global objects are only eligible for default binding if the contents of getName() are not // running in strict mode


function getName() {
  "use strict";
  console.log(this.name); // => Cannot read property 'name' of undefined
}

var name = "Scott"

getName();

//------------------------------------------------------------------

// RULE 2:  IMPLICIT BINDING

function getName() {
  console.log(this.name) // => 'James'
}

var nameMiddle = {
  name: "James",
  getName: getName
}

var nameLast = {
  name: "Austin",
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
  console.log( this.homes.myHome ) // <= call-site "San Francisco"
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

// RULE 2:  EXPLICIT BINDING

Unlike