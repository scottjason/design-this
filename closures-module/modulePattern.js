
// THE MODULE PATTERN

// THE MODULE PATTERN USES CLOSURES TO PROVIDE PUBLIC FUNCTIONS
// ACCESS TO PRIVATE FUNCTIONS AND /VARIABLES.

// this creates a single environment shared by four functions

var wordBuilder = (function() {
  var aPrivateWord = "SC";

  function addChar( character ) {
    aPrivateWord = aPrivateWord.concat( character );
  }
  return {
    addFirst: function() {
      addChar( "O" );
    },
    addSecond: function() {
      addChar( "T" );
    },
    addThird: function() {
      addChar( "T" );
    },
    result: function() {
      return aPrivateWord;
    }
  };
})();

wordBuilder.addFirst();
wordBuilder.addSecond();
wordBuilder.addThird();
wordBuilder.result(); // => 'SCOTT'

//------------------------------------------------------------------

// here's another, slightly more realistic use of the module pattern

var UserData = (function(){
var users = {}
function addParam( paramOne, paramTwo ){
    users[paramOne] = paramTwo
}
return {
    addFirst: function( param ){
        addParam( "firstName", param )
    },
    addMiddle: function( param ){
        addParam( "middleName", param )
    },
    addLast: function( param ){
        addParam( "lastName", param )
    },
    addEmail: function( param ){
        addParam( "email", param )
    },
    addCity: function( param ){
        addParam( "city", param )
    },
    addState: function( param ){
        addParam( "state", param )
    },
    addZip: function( param ){
        addParam( "zipCode", Math.floor( param ) )
    },
    fetchUsers: function(){
        return users;
    }
  }
})();

UserData.addFirst("Scott");
UserData.addMiddle("Lee");
UserData.addLast("Jason");
UserData.addEmail("scott@scott.com");
UserData.addCity("San Francisco");
UserData.addState("CA");
UserData.addZip("94115");
JSON.parse(UserData.fetchUsers())