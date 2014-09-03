// -----------------------------------
// CLOSURES
// -----------------------------------

 // closure is a special kind of object that combines two things: a function, and the
 // environment in which that function was created.

function whosThere() {
  var name = "Scott";
  return function sayHello() {
    return "Hello " + name + ". Nice to meet you."
  };
}

var dingDong = whosThere();
// this becomes the closure sayHello();
console.log(dingDong) // => [Function: sayHello]

dingDong(); // => 'Hello Scott. Nice to meet you.'
// while this returns the return value of the closure function
// it invokes the closure function


//------------------------------------------------------------------

function fetchAllUsers() {
  var users = [{
    firstName: "Scott",
    lastName: "Jason",
    email: "scott@scott.com",
    hair: "blone",
    hasTwoFirstNames: true
  }, {
    firstName: "Austin",
    lastName: "Bourdier",
    email: "austin@austin.com",
    hair: "brown",
    hasTwoFirstNames: false
  }, {
    firstName: "Jessica",
    lastName: "Raynes",
    email: "jessica@jessica.com",
    hair: "blonde",
    hasTwoFirstNames: false
  }];
  return function renderUsers() {
    for (var i = 0; i < users.length; i++)
      console.log(users[i]);
  };
}

allUsers = fetchAllUsers();
// allUsers becomes the closure function renderUsers();
allUsers();

//------------------------------------------------------------------

// -----------------------------------
// LEXICAL SCOPING
// -----------------------------------

// this example differs from the above examples, getData() is called, which calls a nested function, doubleData()
// nested functions have access to the variables defined in the parent functions.
function getData() {
  var data = ["2", "4", "6", "8", "10"]; // the local variable data declared in getData();
  function doubleData() { // doubleData(); is the closure, the inner function that can access data
    for (var i = 0; i < data.length; i++) {
      console.log(Math.floor(data[i] * 2));
    }
  }
  doubleData();
}
getData();

// doubleData(); is defined in getData(); only accessible within the body of this parent function

//------------------------------------------------------------------

// Private methods are used for restricting access to code, managing your global namespace, keeping non-essential
// methods from cluttering up the public interface to your code.

// -----------------------------------
// PRIVATE METHODS WITH CLOSURES
// -----------------------------------
