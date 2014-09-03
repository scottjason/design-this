function whosThere() {
  var name = "Scott";
  return function sayHello() {
    return "Hello " + name + ". Nice to meet you."
  };
}

var dingDong = whosThere();
// this stores the closure function itself
console.log(dingDong) // => [Function: sayHello]

dingDong(); // => 'Hello Scott. Nice to meet you.'
// while this returns the return value of the closure function
// it invokes the closure function

//------------------------------------------------------------------

// this example differs from above as the closure is not returned, it is called in the parent function (line 25)
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

//------------------------------------------------------------------

// closures can be used to maintain state and privacy
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
allUsers();