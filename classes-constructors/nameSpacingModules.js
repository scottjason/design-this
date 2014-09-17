// Declaring the application namespace
var DesignThis = DesignThis || {};

// Declaring a module, so logic is separted into namespaces / modules.
DesignThis.UserModule = (function() {
  // the varial userName and function sendGreeting are private and only accessible inside this module.
  var sendGreeting = function( name, message ) {
        return "Welcome " + name + ", " + message;
    };

    return {
        // welcomeUser is a public function
        welcomeUser: function( name, message ) {
            return sendGreeting( name, message );
        }
    };
})();

DesignThis.UserModule.welcomeUser("Scott", "glad to have you aboard!");
// => 'Welcome Scott, glad to have you aboard!'