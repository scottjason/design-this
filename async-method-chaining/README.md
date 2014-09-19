<p align="center">
- sources -
<br>
Addy Osmani, Kyle Simpson, Rebecca Murphey, Srinivas Rao, JavaScriptIsSexy,
Mozilla Docs
</p>

------------------------------------------------------------------------

**Chaining methods**, also known as the **cascading technique**, refer to repeatedly calling one method after another on an object, in one continuous line of code. If you looked under the hood of jQuery or Socket.io, this is what you'd see.

It's also become increasingly common to see this pattern in vanilla JS.

Aside from minification and simplicity, one key factor of this pattern is that it removes the need to unecessarily create temporary variables in order to save each step of a process.

Additionally, not unlike jQuery, following this pattern results in readable, expressive code.