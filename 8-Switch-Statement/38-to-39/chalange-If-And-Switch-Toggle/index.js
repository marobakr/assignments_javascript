// 01 request
//  introdaction about chalange..be consvert switch to if condation
// confert to switch
let job = "Manager";

let salary = 0;
// my solution
switch (job) {
  case "Manager":
    salary = 0;
    console.log(`your mony is ${salary}`);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(`your mony is ${salary}`);
    break;
  case "Developer":
  case "Desingner":
    salary = "7000";
    console.log(`your mony is ${salary}`);
    break;
  default:
    salary = 4000;
    console.log(`your mony is ${salary}`);
}
// confert to if condation

// 02 request
let holidays = 0;
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
