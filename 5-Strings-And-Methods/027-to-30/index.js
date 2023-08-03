// 01 assignment
let userName = "Elzero";
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.split("", 1).toString().toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).repeat(3).toLowerCase()); // eee
// 02 assignment
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

// console.log(word.includes(letterZ)); // True
console.log(letterE.toLowerCase(word).startsWith(letterE)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(letterO.toUpperCase(word).endsWith(letterO)); // True
console.log(word.endsWith(letterO.toLowerCase()));
// console.log(letterE.toLowerCase());
