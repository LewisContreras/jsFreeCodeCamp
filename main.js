let hello = "   Hello, World!  ";
let wsRegex = /^\s*.\s*$/; // Cambia esta línea
let result = hello.replace(wsRegex, "$1"); 
console.log(result);