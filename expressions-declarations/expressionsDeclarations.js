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
// returns 10, which is the last returned value of the parent function ( which is what was called )
