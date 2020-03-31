// Regular function
function foo(){
    console.log('I')
    console.log('cannot')
    console.log('pause')
}
console.log('--- all statements are executed in regular function')
foo()
// all statements in above regular function will be executed

// Generator functon
// A generator can pause midway and then continues from where it paused.
function* generate() {
    console.log('invoked 1st time');
    // the yield statement returns a value and pauses the execution of the function.
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}

var gen = generate()
// above function call will not execute inner statements, 
// it returns a value (Generator object) and it's iterable
console.log(gen)

console.log(gen.next()) // invoke generator until first yield
console.log(' --  called up to first yield and paused')
console.log(gen.next()) // invoke generator until next yield from where it finished before
console.log(' --  called upto second yield from where it stopped in first yield')
console.log(gen.next())
console.log(' -- end of execution')

// can use generators to implement iterators