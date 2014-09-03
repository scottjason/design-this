/*
CALL STACK & CALL-SITE:

The location in code where a function is called; not where it's declared.

To find what "this" references, we inspect the call-stack. And the call-site that's relavent in find what "this" references is the in the invocation before the currently executing function.
*/

function getStarted() {
  // because our call stack IS getStarted(), our call-site is in the global scope
  console.log("OK, I started.");
}
getStarted(); // => this is the call-site for getStarted,

//------------------------------------------------------------------

function getStarted() {
  console.log("OK, I started.");
  getGoing() // => this is the call-site for getGoing
}
function getGoing(){
  console.log("And now I'm going.")
// call-stack is getStarted => getGoing
// call-site is getStarted
}
getStarted();


//------------------------------------------------------------------

function getStarted() {
  console.log("OK, I started.");
  getGoing() // => this is the call-site for getGoing
}
function getGoing(){
  console.log("And now I'm going.")
// call-stack is getStarted => getGoing
// call-site is getStarted
  areWeThereYet();
}
function areWeThereYet(){
  console.log("No, you're here.")
  // call-stack is getStarted => getGoing => areWeThereYet
  // call-site is getGoing
}
getStarted();