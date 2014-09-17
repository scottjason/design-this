<p align="center">
- sources -
<br>
Addy Osmani, Kyle Simpson, Rebecca Murphey, Srinivas Rao, FrontEnd Journal,
Mozilla Docs
</p>

##Unlike Java and Ruby, classes in Javascript are really just functions that are simulating class behavior.  

**Classes using function as a constructor**

first we declare the class
```javascript
function User(name) {  
    this.name = name;
}
```
then we instantiate a new object
```javascript
var user = new User("Scott");
user.name; // "Scott"
```


Note that the keyword **new** creates a new instance of this class. Without this keyword, the keyword **this** for this object will reference the window.

-----------------------------------------------------------------------------

**Class Literal Notation**
```javascript
var user = {  
    location: "",
    setLocation: function(location) {
        this.location = location;
    }
}

user.setLocation("San Francisco");  
user.location; // "San Francisco"  
```
So here there is no function used define the class. We create a singleton object ( user ) that can be used straightaway without the use of **new**.

Useful when  you don't need to create instances of the class or if it's only needed once in the application.


