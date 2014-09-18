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
