 // lets create an object, just like a what database would store
 var users = [{
     id: 102,
     firstName: "scott",
     lastName: "jason",
     email: "scott@jason.com"
 },
     id: 322,
     firstName: "austin",
     lastName: "bourdier",
     email: "austin@bourdier.com"
 }];


 // lets create a helper function that will properly display our users name in the browser
 function capitalize( str ) {
     return str.replace(/^./, function( match ) {
         return match.toUpperCase();
     });
 }

 // lets create our object with chainable methods
 var userModule = {
    var targetUser; // hoisting the targetUser

      filterUser: function( email ) {
        for( var i = 0; i < users.length; i++ ){
          if( users[i] == users.email ) {
            this.targetUser = users[i];
            break;
          }
        }
      },
     formatUser: function( name ) {


     },
     greetUser: function() {

     }
 }