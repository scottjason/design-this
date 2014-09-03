
// How "this" will point can be found by inspecting the call-site and there are 4 rules that apply.

//------------------------------------------------------------------

// RULE 1:  DEFAULT BINDING

function getName(){
  console.log(this.name); // => "Scott"
}

var name = "Scott"

getName();

// getName() is called with only reference to itself.
// this.name resolves to the global variable "name". So the default binding for "this" applied to the function call, points "this" at the global object.

//------------------------------------------------------------------

