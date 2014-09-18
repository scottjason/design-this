<p align="center">
- sources -
<br>
Addy Osmani, Kyle Simpson, Rebecca Murphey, Srinivas Rao, 
Mozilla Docs, Blogs, Books and Wiki.
</p>
------------------------------------------------------------------------

**function declarations** must begin with “function”.
```javascript
function declareNum(){
    return 5;
}
```
------------------------------------------------------------------------

**function expressions** define a function as a part of a larger expression syntax, usually beginning with the keyword **var**. They can be named or anonymous but must not start with “function”.
```javascript
var anonFunc = function() {
    return "I am an anonymous functional expression."
};
```
```javascript
var namedFunc = function someName() {
    return "I am a named functional expression."
};
```

```javascript
(function iife() {
    return 'I am an immediately invoked functional expression.';
})();
```

------------------------------------------------------------------------

**key differences, closures and nested functions**

Function declarations are parsed at pre-execution stage, when the browser 
prepares to execute the code. So a function declared this way can be called both after and before the definition.

Both of the below will work:

```javascript
before();
function before(){
    return 10;
}
```

```javascript
function after(){
    return 10;
}
after();
```

Function expressions, on the other hand, mean that the function comes as part of a statement. They're are created when the execution flow reaches them. So unlike declarations, they can be used only after they've been executed.

The below will **not** work:

```javascript
namedFunc();

var namedFunc = function someName() {
    return "I am a named functional expression."
};
```

**closures and nested functions**

Expressions and declarations make more sense in context. They are part of how we create private interfaces with closures.




