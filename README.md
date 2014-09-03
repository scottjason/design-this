sources: books, blogs and wikis.

**FIRST-CLASS FUNCTIONS**

- can be stored in variables and data structures
- can be passed as a parameter to a subroutine
- can be returned as the result of a subroutine
- can be constructed at runtime
- has intrinsic identity (independent of any given name)

------------------------------------------------------------------------

**FREE VARIABLES**

Variables have scope. And this references where variables can be seen from. 
A variable is **free** in any particular scope if it is defined within an enclosing scope.

------------------------------------------------------------------------

**LEXICAL SCOPE**

The word “lexical” means **“relating to text”**.

Functions in JavaScript are lexically rather than dynamically scoped. This means that they run in the scope in which they are defined, not the scope from which they are executed.

Rule of lexical scoping: afunction is executed in the scope in which it was defined. That scope includes the state of local variables and arguments. Even though local variables and function arguments are transient, their state is frozen and becomes part of the lexical scope of any functions defined while they are in effect. In order to make lexical scoping work with nested functions, a JavaScript implementation must use a closure, which can be thought of as a combination of a function definition and the scope chain that was in effect when the function was defined.

**Lexical scope is the key to making closures work.**

------------------------------------------------------------------------

**CLOSURES**

First class function with free variables that are bound in the lexical environment. Such a function is said to be "closed over" its free variables. A closure is defined within the scope of its free variables, and the extent of those variables is at least as long as the lifetime of the closure itself.

Closures are functions that retain a reference to their free variables.

A closure is a functions or a reference to a function together with a referencing environment. And it stores a reference to each of its non-local, 
**free**  variables.

A closure allows a function to access those **free** variables even when invoked outside its immediate lexical scope.

A closure's behavior is such that an inner function refers to local variables of the outer function.

In other words, the function defined in the closure 'remembers' the environment in which it was created. 