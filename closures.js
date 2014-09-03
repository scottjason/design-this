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