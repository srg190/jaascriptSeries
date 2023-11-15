// function x() {
//   var a = 7;
//   function y() {
//     debugger;
//     console.log(a);
//   }
//   y();
// }
// x();
// function along with lexical scope forms a closure that is closure
// and it has access to parent lexical scope
// a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function x() {
  var a = 7;
  function y() {
    debugger;
    console.log(a);
  }
  a = 100;
  return y;
}
let z = x();
// according to EC x() must be vanished because it returned the val
// but but ...
debugger;
z(); // stil output 7

// Uses of Closures:
// - Module Design Pattern
// - Currying
// - Functions like once (only one time called)
// - memoize
// - maintainig state in async world
// - setTimeouts
// - Iterators
// - and many more...

// like in class in java, c++ etc now in Js too :
// we can create and access private variable method etc;
// but in js how we can make this possible withouit class like things
// so that clsure comes in picture

// class Test{
//     privat:
//     int count = 0;
//     public:
//     Test(n){
//         this.count = n;
//     }
//     int increase(){
//         this.count++;
//     }
// }
// Test test(10);
// test.increase();

// in above count is private we can not access

// similar to closure

function Test(n) {
  let count = n;

  function increase() {
    count++;
  }

  function getCount() {
    return count;
  }

  // Return an object with the functions as properties
  return {
    increase: increase,
    getCount: getCount,
  };
}

let test = Test(10);
test.increase();
console.log(test.getCount());
