//----------- ASYNC METHOD CHAINING ----------------

// first let's create an object, much like one from a database or api call
var users = [{
    id: 102,
    firstName: "scott",
    lastName: "jason",
    email: "scott@jason.com"
  },
  {
    id: 342,
    firstName: "austin",
    lastName: "bourdier",
    email: "austin@bourdier.com"
  },
  {
    id: 338,
    firstName: "james",
    lastName: "loyd",
    email: "james@loyd.com"
  },
  {
    id: 354,
    firstName: "jessica",
    lastName: "rabbitt",
    email: "jessica@rabbitt.com"
  },
  {
    id: 362,
    firstName: "mongo",
    lastName: "deebee",
    email: "mongo@deebee.com"
}];

// lets create a helper function that will properly display our users name in the browser
function capitalize( str ) {
    return str.replace(/^./, function( match ) {
        return match.toUpperCase();
    });
}

// lets create our object with three chainable methods
var userModule = {
    targetUser: "", // hoisting the targetUser

    filterUser: function( targetEmail ) {
        for ( var i = 0; i < users.length; i++ ) {
            if ( users[i].email == targetEmail ) {
                this.targetUser = users[i];
                break;
            }
        }
        return this;
    },
    formatUser: function() {
        if ( this.targetUser ) {
            this.targetUser.fullName = ( capitalize( this.targetUser.firstName ) + ' ' + capitalize( this.targetUser.lastName ) );
        }
        return this;
    },
    renderUser: function() {
        if( this.targetUser ){
             console.log( this.targetUser.fullName, this.targetUser.email, this.targetUser.id );
        }
    }
};


userModule.filterUser('scott@jason.com').formatUser().renderUser();
//=> Scott Jason scott@jason.com 102

userModule.filterUser('jessica@rabbitt.com').formatUser().renderUser();
//Jessica Rabbitt jessica@rabbitt.com 322
