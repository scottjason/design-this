// The difference bewtween call and apply is in the second parameter, where  apply() requires an // array as the second parameter.

// Here's a super "explicit" example, note that call can take a string as the second param

var status = "way cool";
var reality = { status: "even cooler" }

function getCoolness( message ){
  console.log( message )
  console.log( this.status ); // => call-stite
}

getCoolness("getting status via referencing global scope, wtihout call()")
getCoolness.call(reality, "now getting status from the object we've explicitly passed in")

// the above logs =>
// getting status from the global scope wtihout call
// way cool
// now getting status from the object we've passed in
// even cooler

// So we can pass arguments to the target function via call():

//------------------------------------------------------------------

// And via apply() with an array.

var status = "way cool";
var reality = { status: "even cooler" }
function getCoolness( message ){
  console.log( message )
  console.log( this.status ); // => call-stite
}

getCoolness("getting status via referencing global scope, wtihout call()")
getCoolness.call(reality, ["my status was just created via the apply(..) method.I am the apply"])

// the above logs =>
// getting status via referencing global scope, wtihout call()
// way cool
// [ 'my status was just created via the apply(..) method.I am the apply' ]
// even cooler