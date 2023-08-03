// 01 challenge
let noraml_function = function (...user_Name) {
  return [`String [${user_Name.join("],[")}]=> Done!`].toString();
};
console.log(noraml_function("Osama", "Mohamed", "Ali", "Ibrahim"));

// convert normal fi=unction to arrow function
let arrow_function = (...user_Name) =>
  [`String [${user_Name.join("],[")}]=> Done!`].toString();
console.log(arrow_function("Osama", "Mohamed", "Ali", "Ibrahim"));

// 02 challenge
let noraml_function = [20, 50, 10, 60];
let calc = function (one, two, ...nums) {
  return one + two + +nums;
};
console.log(calc(10, noraml_function[1], noraml_function[0]));

let arrow_function = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + +nums;
console.log(calc(10, arrow_function[1], arrow_function[0]));
