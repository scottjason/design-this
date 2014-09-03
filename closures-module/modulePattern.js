
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