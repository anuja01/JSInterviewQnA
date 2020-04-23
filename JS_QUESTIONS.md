# Random Javascript questions

1. What is the difference between ```let``` and ```var``` ?   
   <b>scope</b>  
   ```let``` is block scoped - scoped to the immediate enclosing block denoted by { }    
   ```var``` is function scoped - scoped to the immediate function body   
   <b>Hoisting</b>   
   ```let``` doesn't hoist to the top, unlike ```var```   
   MORE: https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

2. What does ```new``` keyword do in Javascript?   
   creates a constructor function, and make ```this``` points to the object created.   
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

3. What are <b>Object Prototypes</b> ?
   Object prototypes are a mechanisam JS use to inherit properties from one another (Everyting in JS is a object)   
   <b>Prototype</b> contains the properties and methods inherited from the parent.   
   When you declare an array, all the properties and methods are from prototype inherited from <b>Array</b> class. (sort(), reverse(), split())