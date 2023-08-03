// 01 assignment
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 01
// myFriends.splice(num);
// console.log(myFriends);

// Method 02
// remove_Gamal = myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 03
// console.log(
//   myFriends.slice(myFriends.indexOf("Ahmed"), myFriends.indexOf("Gamal"))
// );

// 02 assignment
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// friends.pop(friends.shift());
// console.log(friends); // ["Eman", "Osama"]

// 03 assignment
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
// 04 assignment
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// I resolved this assingment use 3 Methods ^_^
// Method 1
// console.log(words.pop()[0].substring(website.length).toUpperCase());

// Method 2
// console.log(words[website.length][0].slice(website.length).toUpperCase());

// Method 3
// console.log(
//   words[words.indexOf("Facebook") + words.indexOf("Facebook")][
//     words.indexOf(`${website}ogle`)
//   ]
//     .slice(words.indexOf("Facebook") + words.indexOf("Facebook"))
//     .toUpperCase()
// );

// 05 assignment

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
// I resolved this assingment use 5 Methods ^_^

// Method 1
// haystack[1] === "JS" ? console.log("found") : console.log("not found");

// Method 2
// haystack.includes("JS") === true
//   ? console.log("found")
//   : console.log("not found");

// Method 3
// // if (haystack.indexOf )
// console.log(
//   haystack.indexOf("JS") === needle.indexOf("JS") + haystack.indexOf("JS")
// );

// Method 4
// haystack.pop(haystack.shift());
// haystack.toString() === needle
//   ? console.log("found")
//   : console.log("not found");

// Method 5
// console.log(
//   haystack
//     .slice(haystack.indexOf("JS"), haystack.indexOf("Python"))
//     .toString() === needle
// );
// 06 assignment

// Method 01
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = []
//   .concat(arr1, arr2)
//   .sort()
//   .splice(arr2.length)
//   .join("")
//   .toLowerCase();
// console.log(allArrs); // fxy

// Method 02
// console.log(
//   allArrs
//     .concat(
//       arr2[arr1.indexOf("X")] +
//         arr1[arr1.indexOf("X")] +
//         arr2[arr1.indexOf("X") + arr1.indexOf("C")]
//     )
//     .toString()
//     .toLowerCase()
// );  // fxy
