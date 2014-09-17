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

then we instantiate a new object
```javascript
var user = new User("Scott");
user.name; 
```
returns "Scott"
Note that the keyword **new** creates a new instance of this class. Without this keyword, the keyword **this** for this object will reference the window.



**Classes using function as a constructor**


