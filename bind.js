const myObject = {};
myObject.x = 12;
myObject.y = 13;
myObject.z = function() {return this.x + this.y};
const myfunc = myObject.z;
console.log(myfunc());
const myboundfunc = myfunc.bind(myObject);
console.log(myboundfunc());

// Weirdly, arrow functions don't work well as methods in objects 
// or classes, even though they have recently been added to React
// class components' methods.  