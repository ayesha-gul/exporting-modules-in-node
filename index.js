let {Add, sub , multi , div, name}= require('./oper');

console.log(' the oper.js module is exporting in the form of obj ');

console.log('adding values', Add(2,7));

console.log('subtracting values', sub(10,5));

console.log('Multiplying values', multi(10,5));

console.log('Dividing values', div(20,10));

console.log(name);

