<p align="center">
- sources -
<br>
Addy Osmani, Kyle Simpson, Rebecca Murphey, Srinivas Rao, FrontEnd Journal,
Mozilla Docs
</p>

**Unlike Java and Ruby, classes in Javascript are really just functions that are simulating class behavior**

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

**Class Literal Notation and Singleton Objects**
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

-----------------------------------------------------------------------------

**Namespaces allow us to group code and help us to avoid name-collisions**

Namespacing does not exist in Javascript and so must be created. To avoid numerous globally defined functions and properties, we can create a single global object and make all functions and variables properties of this global object.

```javascript
var DesignThis = {};
```
The above is no good since this will overwrite another object that has the same name.

So we can check first by doing this which safley creates our namespace:
```javascript
var DesignThis = DesignThis || {};
```

