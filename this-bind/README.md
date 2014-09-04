<p align="center">
- sources -
<br>
Addy Osmani, Kyle Simpson, Rebecca Murphey, Srinivas Rao, 
Mozilla Docs, Blogs, Books and Wiki.
</p>
------------------------------------------------------------------------
**call-site**

The call-site is the location in where a function is called, which is different from a function is declared.

So, _what_ **this** actually references is determined by where a function is called and what **this** _is_ is a binding that occurs at run-time.

------------------------------------------------------------------------
**call-stack**

The stack of functions that have been invoked to arrive at the **current execution context**.

![alt text](https://raw.githubusercontent.com/scottjason/design-this/master/images/ecstack.jpg "From the Blog of David Shariff")
photo courtesy of: http://davidshariff.com/_

------------------------------------------------------------------------
**this** 
( strict mode, default binding, implicit binding, explicit binding, callbacks )

**this** is a runtime binding. It is not a binding defined at the time it was written.

In other words, **this** is completely contextual and based on the conditions of the functions invocation.

**this** is not a reference to the containing function. It is also not a reference to the functions lexical scope.

Again, **this** is a binding that is created when a function is invoked. What **this** references is determined by the **call-site** where the function is called.

------------------------------------------------------------------------

**How "this" will point can be found by inspecting the call-site and there are four rules that apply, and the rules have precedence:**

------------------------------------------------------------------------
**1. default binding**

The catch-all default where a function is invoked with no special attachements or references. **this** in this case becomes the glovbal scope. In other words, a standalone function invocation.

_( see examples for **strict mode*** and default binding )_
------------------------------------------------------------------------
**2. implicit binding**

When the function invocation has object context. When the function is called, it is preceded by a reference to an object. And this object contains a reference to the function. So when there is a context object for a function reference, it is then the object that is used for the **this** binding.

------------------------------------------------------------------------
**3. explicit binding**

Where as with implicit binding we had to mutate the object to include a reference on itself to the function, and use this property function reference to indirectly (implicitly) bind this to the object, with explicit binding we can force a function call to use a particular object for the this binding, without putting a property function reference on the object.

Just about every function in JavaScript has **call(..)** and **apply(..)** methods.

The first parameter each takes is the object to use for **this**, hence the **explicit**, because we are out-right defing - on invocation - to what **this** will be bound.
------------------------------------------------------------------------
**4. hard binding**

A pattern based on explicit binding where the reference to "this" is retained.
Useful for things like DOM manipulaton where **this** references the window.

------------------------------------------------------------------------
**call(..) and apply(..)**

apply() requires an array as the second parameter, but aside from that the two are the same. 

In regards to binding **this**, which is the first parameter each takes, the methods and results are the same.

**From the Mozilla Docs**

The apply() method calls a function with a given 'this' value and arguments provided as an array (or an array-like object).

_So the first agument reference what **this** will be and the second will be an array-like object. This is what specifies the arguments that on which the invoked function will behave._

**From the Mozilla Docs**

apply() is very similar to call(), except for the type of arguments it supports.  You can use an arguments array instead of a named set of parameters. With apply, you can use an array literal, for example, 
```javascript
fun.apply(this, ['eat', 'bananas'])
```
or an Array object, for example, 
```javascript
fun.apply(this, new Array('eat', 'bananas'))
```
------------------------------------------------------------------------







