// If chalange
let a = 10;
// asked your  convert this condation to ternary operator
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log(" > 40");
} else {
  console.log("unknown");
}
// my solution
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log(">40")
  : console.log("unknown");

// chalange  Condition Met
// your available variable
let st = "Elzero Web School";
// // 02 requaird
// console.log(st.match(/w/i).toString());
if (st.match(/w/i).toString() === "W") {
  console.log("Good");
} else {
  console.log("false");
}

// // 03 requaird

if (st !== "String") {
  console.log("Good");
}

// 04 requaird
if ((st.innerHtml = "number" === "number")) {
  console.log("Good");
}

// 05 requaird
if (st.split(" ", 1).toString().repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

// 06 requaird
if (st.length * 2 + "" === "34") {
  console.log("good");
} else console.log("no");
