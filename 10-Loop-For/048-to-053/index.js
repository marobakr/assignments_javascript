// /01 assingment
// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// for (i = start; i <= end; i += start) {
//   if (i === exclude) {
//     continue;
//   }
//   console.log(i);
// }
// 02 assingment

let start = 10;
let end = 0;
let stop = 3;

// // Output
for (i = start; i >= stop; i--) {
  if (i < start) {
    console.log(`${end}${i}`);
  } else console.log(`${i}`);
}

// 03 assingment
// let start = 1;
// let end = 6;
// let breaker = 2;

// // Output
// for (i = start; i <= end; i++) {
//   console.log(i);
//   for (j = breaker; j < end; j += breaker) {
//     console.log(`--${j}`);
//   }
// }

// 04 assingment
// let index = 10;
// let jump = 2;
// let end = 0;

// // Output
// i = index;
// for (;;) {
//   console.log(i);
//   i -= jump;
//   if (i === jump) break;
// }

// 05 assingment
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// Output
// letter = letter.toUpperCase();
// for (i = friends.indexOf("Ahmed"); i < friends.length; i++) {
//   if (friends[i][friends.indexOf("Ahmed")] === letter) {
//     continue;
//   } else {
//     console.log(`"${i}=>${friends[i]}"`);
//   }
// }

// 06 assingment
// str = "";
// let start = 0;
// let swappedName = "elZerO";
// // Output
// for (i = start; i < swappedName.length; i++) {
//   swappedName[i] === swappedName[i].toUpperCase()
//     ? (str += swappedName[i].toLowerCase())
//     : (str += swappedName[i].toUpperCase());
// }
// console.log(str);

// 07 assingment

// let start = 0;
let mix = [1, 2, 3, 'A', 'B', 'C', 4];

// 01 Method
// // Output
// for (i = start; i < mix.length; i++) {
//   if (mix[i] > mix[start]) console.log(mix[i]);
// }

// 02 Method

// for (i = start; i < mix.length; i++) {
//   if (mix[i] > mix[start] && typeof mix[i] === "number") {
//     console.log(mix[i]);
//   }
// }
