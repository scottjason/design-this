**sources**: Addy Osmani, Kyle Simpson, Rebecca Murphey, Mozilla Docs, Blogs, Books & Wiki.

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
------------------------------------------------------------------------

**2. implicit binding**



------------------------------------------------------------------------
**3. explicit binding**

Where as with implicit binding we had to mutate the object to include a reference on itself to the function, and use this property function reference to indirectly (implicitly) bind this to the object, with explicit binding we can force a function call to use a particular object for the this binding, without putting a property function reference on the object.

