 // lets create an object, just like what database would store
 var users = [{
     id: 102,
     firstName: "scott",
     lastName: "jason",
     handle: "scott@jason.com"
 }, {
     id: 214,
     firstName: "austin",
     lastName: "bourdier",
     handle: "austin@bourdier.com"
 }];



// lets create a helper function that will properly display our users names in the browser
function capitalize( str ) {
   return str.replace(/^./, function ( match ) {
        return match.toUpperCase();
    });
}


