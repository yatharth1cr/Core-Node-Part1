// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// create a fixed length buffer of 12.
// write code to convert buffer back to string.
let buff1 = Buffer.alloc(12);
buff1.write("welcome to Node.js");
console.log(buff1.toString());
console.log(buff1);
