// nested function
function parent( messageOne, messageTwo ) {
   function nested( message ) {
      return message.split('').join(' ');
   }
   return ( nested(messageOne) + ' ' + nested(messageTwo) ).toUpperCase();
}

parent('scott', 'jason');
// => 'S C O T T J A S O N'


function init(){
    function run() {
        return 5;
    }
    return run();
    function run() {
        return 10;
    }
}
console.log( init() );
// returns 10