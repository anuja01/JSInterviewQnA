# Random Javascript questions

### 1. What is the difference between ```let``` and ```var``` ?   
   <b>scope</b>  
   ```let``` is block scoped - scoped to the immediate enclosing block denoted by { }    
   ```var``` is function scoped - scoped to the immediate function body   
   <b>Hoisting</b>   
   ```let``` doesn't hoist to the top, unlike ```var```   
   MORE: https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

### 2. What does ```new``` keyword do in Javascript?   
   creates a constructor function(function treated like a constructor), and make ```this``` points to the object created.   
   eg: ```this.name``` inside the constructor function will refer name within the object, not ```window.name```

   ```
   function Car(make, model, year) {
      this.make = make; // these will set to global scope otherwise
      this.model = model;
      this.year = year;
   }

   const car1 = new Car('Eagle', 'Talon TSi', 1993);

   console.log(car1.make);
   // expected output: "Eagle"
   ```
   MORE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new   
   The new operator also makes anything we put on `Car.prototype` available on the `car1` object.   
   This is how people emulated classes before JavaScript added them directly.



### 3. What are <b>Object Prototypes</b> ?
   Object prototypes are a mechanisam JS use to inherit properties from one another (Everyting in JS is a object)   
   <b>Prototype</b> contains the properties and methods inherited from the parent.   
   When you declare an array, all the properties and methods are from prototype inherited from <b>Array</b> class. (sort(), reverse(), split())

### 4. What is <b>Scope</b> in Javascript?
   Scope determines the accessibility (visibility) of variables.   
   In JavaScript there are two types of scope
   - Local scope   
      Variables declared within a JavaScript function, become LOCAL to the function.   
      Local variables have Function scope: They can only be accessed from within the function.
   - Global scope   
      A variable declared outside a function, becomes GLOBAL.   
      A global variable has global scope: All scripts and functions on a web page can access it. 

   More: https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript

### 5. What do you mean by <b>Closure</b> in Javascript?   
   A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.  
   **Kyle Sympson definition**   
   Closure is when a function 'remembers' its lexical scope even when the function is executed outside that lexical scope.   
   ```javascript
   // outer function
   function outer() {
      var b = 10;
      // inner function
      // outer function scope is the immideate lexical scope for inner function
      function inner() {
         
            var a = 20; 
            console.log(a+b);
      }
      //returns inner function
      return inner;
   }
   let x = outer() // x will be the inner function now
   // calling x() will trigger inner function
   x() // output = 30;
   // even inner function is executed outside of it's lexical scope, it'll have a reference to the value b, and this is closure
   
   ```
   Note: https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4.  
   Without closures you can't pass around functions in javascript :) 
   
### 6. explain `Object.assign()`   
It copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

### 7. What are the differences between Arrow functions and normal functions   
   1. Arrow functions don't have their own `this`
   2. Arrow functions don't have an argument binding
      ```javascript
      function s () {
         console.log(arguments)
      }
      s(1,2,3,4) // will output passed arguments
      // 'arguments' is not available with arrow functions
      ```
### 8. What is the differences between `null` and `undefined`
`null` is an initialized and assigned value to a variable which means empty. type of `null` is `object`.  
`undefined` means varibale is declared but it's value is not initialized. Type of `undefined` is `undefined`.  

### 9. Explain `call`, `apply`, `bind` in javascript.   
All are used to explicitly bind the execution scope/context.   
`call` invokes the function and allows you to pass in arguments one by one.   
`apply` invokes the function and allows you to pass in arguments as an array.   
`bind` returns a new function, allowing you to pass in a this array and any number of arguments.    
Good read: https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind#:~:text=Use%20.,for%20calling%20the%20original%20function.   

