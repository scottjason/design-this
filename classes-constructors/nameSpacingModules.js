// Declaring the application namespace
var DesignThis = DesignThis || {};

// Declaring a module, so logic is separted into namespaces / modules.
// Below is an example of the namespacing and the module pattern
DesignThis.UserModule = (function() {
  // the varial userName and function sendGreeting are private and only accessible inside this module.
  var sendGreeting = function( name, message ) {
        return "Welcome " + name + ", " + message;
    };

    var sendGoodbye = function( name, message ) {
        return "Sorry to see you go, " + name + "." + " " + message;
    }

    return {
        // welcomeUser is a public function
        welcomeUser: function( name, message ) {
            return sendGreeting( name, message );
        },
        goodbyeUser: function( name, message ) {
            return sendGoodbye( name, message );
        }
    };
})();

DesignThis.UserModule.welcomeUser("Scott", "glad to have you aboard!");
// => 'Welcome Scott, glad to have you aboard!'

DesignThis.UserModule.goodbyeUser('Scott', 'Please let us know if there is anything we can do to improve you experience.');
//=> 'Sorry to see you go, Scott. Please let us know if there is anything we can do to improve you experience.'