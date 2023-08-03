// this is your variables
let a = "Elzero Web School";

// 01 required
// Include This Method In Your Solution [slice, charAt]
//my soluation
console.log(a.charAt(2).toUpperCase() + a.slice(3, 7));

// 02 required
// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// 03 required
// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// 04 required
// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 7)}${a.substr(-6)}`); // Elzero School

// 05 required
// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, -1).toUpperCase() +
    a.charAt(1).toLocaleLowerCase()
); // eLZERO WEB SCHOOl
