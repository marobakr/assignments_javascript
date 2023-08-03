// // 01 assingment
// let numOne = 9;
// // Condition Output => "009"
// if (numOne < 10) {
//   console.log(`${"00" + numOne}`);
// } else false;
// // Conditional (ternary) operator
// console.log(numOne < 10 ? `${"00" + numOne}` : false);

// let numTwo = 20;
// // // Condition Output => "020"
// if (numTwo > 10 && numOne < 100) {
//   console.log(`${"0" + numTwo}`);
// } else false;
// // Conditional (ternary) operator
// console.log(numTwo > 10 && numOne < 100 ? `${"0" + numTwo}` : false);

// let numThree = 110;
// // // Condition Output
// console.log(numThree >= numThree - ++numOne ? "" + numThree : false);
// // Conditional (ternary) operator
// if (numThree > +numThree - ++numOne) {
//   console.log("" + numThree);
// } else false;

// // 02 assingment
// let num1 = 9;
// let str = "9";
// let num2 = "20";

// // 01 Output
// // frist way
// // Conditional (ternary) operator
// num1 == str ? console.log("{num1}Is The Same Value As {str}  ") : false; //("{num1} Is The Same Value As {str}");
// // second way
// if (num1 == str) {
//   console.log("{num1}Is The Same Value As {str}");
// } else {
//   console.log("{num1}Is not Value As {str}");
// }

// // 02 Output
// // Conditional (ternary) operator
// // frist way
// num1 === str
//   ? console.log("{num1} Is The Same Value As {str} and The Same Type")
//   : console.log("{num1} Is The Same Value As {str} But Not The Same Type");

// // second way
// if (num1 !== str) {
//   console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// } else {
//   console.log("{num1} Is The Same Value As {str} and The Same Type");
// }
// // 03 Output
// // frist way
// num1 !== num2
//   ? console.log("{num1} Is Not The Same Value Or The Same Type As {num2}")
//   : console.log("{num1} Is  The Same Value Or The Same Type As {num2}");
// if (num1 === num2) {
//   console.log("{num1} Is  The Same Value Or The Same Type As {num2}");
// } else {
//   console.log("{num1} Is Not The Same Value Or The Same Type As {num2}");
// }

// 03 assingment  //--------------- i was not resolve this assingment -------------//
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";
// if (num3 > num1 && num3 !== num2) {
//   console.log("{num3} Is Larger Than {num1} And Not The Same Type As {num2}");
// } else if (num3 > num1 && num3 == num2) {
//   console.log(
//     "{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}"
//   );
// }
// 04 assingment
// Edit What You Want Here

var num1 = 20;
var num2 = 1;
var num3 = 20;
var num4 = 60;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
