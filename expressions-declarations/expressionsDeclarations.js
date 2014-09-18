// nested function
function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
}

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