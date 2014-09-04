// The difference bewtween call and apply is in the second parameter,
// where apply() requires an array as the second parameter.

// Here's a super "explicit" example. Note that call can take a
// string as the second parameter.

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
var reality = { status: "even cooler" } // not used
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

//------------------------------------------------------------------


// we can use this array to filter what we want, and pass through to another function like this:

var userLocation = { currentGeo: "San Francisco" };

function readyToGetLocation( message1, message2 )
{
    console.log( message1 + ( this.currentGeo ) + message2 );
}

function filterForPassThrough( object, callback )
{
 // note: arguments is a keyword in JS representing the elements of an array
 // arguments[0] == the object && arguments[1] == the callback
    var filteredArr = [];
    for(var i = 2; i < arguments.length; i++)
    {
        filteredArr.push(arguments[i]);
    }

    callback.apply( object, filteredArr ); // passing in the same object (same "this")
}

filterForPassThrough(userLocation, readyToGetLocation, "Scott's current location is ", " and right now he's on the computer.");
// four arguments being passed in

//------------------------------------------------------------------

function getaDogABone(arguments) {
  return this.name + " loves his " + arguments + "!";
}

var doggy = { name: "William" };

var doggyWantsABone = function(obj, arguments) {
  return getaDogABone.apply( obj, arguments );

};

doggyWantsABone(doggy, ["super healthy vegan hipster dog bone"] );



