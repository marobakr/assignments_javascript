//notes >>> when you make reverse to array and then make remove be use [pop() or shift()] it remove from  the master array
// reverse to aplay after the another method be aplay ...say shift()/ pop()
// are this avalible variable
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// //  01 request
// // Method 1
console.log(my.slice(zero, my.indexOf("Gamal")).reverse());

// // Method 2
// my.reverse();
// my.shift();
// my.shift();
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// // Method 3
// my.reverse(my.pop(my.pop()));
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// Method 4
console.log(my.slice(my.indexOf("Ahmed"), my.indexOf("Gamal")).reverse());

// //  02 request
// // Method 1
// my = my.slice(zero, counter);
// my.shift();
// console.log(my.reverse()); // ["Elham", "Mazero"]

// // Method 2
console.log(my.slice(my.indexOf("Mazero"), counter).reverse());

// // Method 3
console.log(my.slice(my.indexOf("Mazero"), my.indexOf("Osama")).reverse());
// //  03 request
console.log(
  my[my.indexOf("Elham")].slice(zero, my.indexOf("Elham")) +
    my[my.indexOf("Mazero")].slice(my.indexOf("Elham"))
);
// //  04 request

console.log(
  my[my.indexOf("Ameer")].slice(my.indexOf("Gamal")) +
    my[my.indexOf("Mazero")].slice(my.indexOf("Ameer")).toUpperCase()
);
