// 01 assingment
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    document.write(` hello MR ${theName} Are You ${theGender} ^_^ <br>`);
  } else if (theGender === "Famel") {
    document.write(` hello Miss ${theName} Are You ${theGender} ^_^ <br>`);
  } else document.write(` hello ${theName}  ^_^ <br>`);
}
sayHello("Osama", "Male");
sayHello("Eman", "Famel");
sayHello("Sameh");

// 02 assingment  // method 1
function calculate(fristNum, secondNum, operation) {
  if (operation === "add") {
    document.write(` The Resulte = ${fristNum + secondNum}<br> `);
  } else if (operation === "subtract") {
    document.write(` The Resulte = ${fristNum - secondNum}<br> `);
  } else if (operation === "multiply") {
    document.write(` The Resulte = ${fristNum * secondNum}<br> `);
  } else if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === undefined) {
    document.write(` The Resulte = ${fristNum + secondNum}<br> `);
  }
}
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// method 2
function calculatoin_2(fristNum, secondNmu, operation) {
  if (secondNmu === undefined || operation === undefined) {
    console.log("Second Number Not Found");
  }
  operation === "add"
    ? console.log(fristNum + secondNmu)
    : operation === "subtract"
    ? console.log(fristNum - secondNmu)
    : operation === "multiply"
    ? console.log(fristNum * secondNmu)
    : operation === undefined
    ? console.log(fristNum + secondNmu)
    : false;
}
// Needed Output
calculatoin_2(20); // Second Number Not Found
calculatoin_2(20, 30); // 50
calculatoin_2(20, 30, "add"); // 50
calculatoin_2(20, 30, "subtract"); // -10
calculatoin_2(20, 30, "multiply"); // 600// // 03 assingment
// method 3
function calculatoin_3(fristNum, secondNmu, operation) {
  let fristResult = 0;
  let secondeResult = 0;
  let threeResult = 0;
  let fourResult = 0;

  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] === "add") {
      fristResult += fristNum + secondNmu;
      console.log(fristResult);
    } else if (arguments[i] === "subtract") {
      secondeResult += fristNum - secondNmu;
      console.log(secondeResult);
    } else if (arguments[i] === "multiply") {
      threeResult += fristNum * secondNmu;
      console.log(threeResult);
    } else if (arguments.length === 1) {
      console.log("Second Number Not Found");
    } else if (arguments.length === 2) {
      fourResult += fristNum + secondNmu;
      console.log(fourResult);
    }
  }
}
calculatoin_3(20); // Second Number Not Found
calculatoin_3(20, 30); // 50
calculatoin_3(20, 30, "add"); // 50
calculatoin_3(20, 30, "subtract"); // -10
calculatoin_3(20, 30, "multiply"); // 600// // 03 assingment

// 03 assingment
function ageInTime(theAge) {
  let months = theAge * 12,
    days = months * 30,
    hours = days * 24,
    minutes = 60 * hours,
    seconds = 60 * minutes;

  theAge < 10 || theAge > 100
    ? console.log(`Age Out Of Range`)
    : console.log(
        `Your Age is ${theAge} Years\n\nYour Age is ${months} Months\n\nYour Age is ${days} Days\n\nYour Age is ${hours} Hours\n\nYour Age is ${minutes} Minutes\n\nYour Age is ${seconds} Seconds`
      );
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38);

// 04 assingment // challenge // 1 method
function checkStatus(a, b, c) {
  for (i = 0; i < arguments.length; i++) {
    typeof arguments[i] === "string"
      ? (s = arguments[i])
      : typeof arguments[i] === "number"
      ? (x = arguments[i])
      : typeof arguments[i] === "boolean"
      ? (a = arguments[i])
      : false;
    if (arguments[i] === true) {
      a = "You Are Available For Hire";
    } else if (arguments[i] === false) {
      a = "You Are Not Available For Hire";
    }
  }
  console.log(` Hello ${s} Your ${x} ${a} `);
}
checkStatus("Osama", true, 38); // "Hello Osama, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); /// "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus("Osama", false, 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// 02 method
function checkStatus_2(a, b, c) {
  let = str = "";
  if (
    typeof a === "string" &&
    typeof b === "boolean" &&
    b === true &&
    typeof c === "number"
  ) {
    console.log(`Hello ${a} Your Age Is ${c} You Are Available For Hire`);
  } else if (
    typeof a === "number" &&
    typeof b === "string" &&
    typeof c === "boolean"
  ) {
    console.log(`Hello ${b} Your Age Is ${a} You Are Available For Hire`);
  } else if (
    typeof a === "boolean" &&
    typeof b === "number" &&
    typeof c === "string"
  ) {
    console.log(`Hello ${c} Your Age Is ${b} You Are Available For Hire`);
  } else
    console.log(`Hello ${a} Your Age Is ${c} You Are Not Available For Hire`);
}
checkStatus_2("Osama", true, 38); // "Hello Osama, You Are Available For Hire"
checkStatus_2(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus_2(true, 38, "Osama"); /// "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus_2("Osama", false, 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// 03 method
function checkStatus_3(a, b, c) {
  let paramter = [a, b, c];
  let string = "";
  let age = 0;
  let status = false;
  for (i = 0; i < paramter.length; i++) {
    typeof paramter[i] === "string"
      ? (string += paramter[i])
      : typeof paramter[i] === "number"
      ? (age += paramter[i])
      : paramter[i] === false
      ? (status = "You Are Not Available For Hire")
      : typeof paramter[i] === "boolean"
      ? (status = "You Are Available For Hire")
      : false;
  }
  console.log(`Hello ${string} You Are Is ${age} ${status}`);
}
checkStatus_3("Osama", true, 38); // "Hello Osama, You Are Available For Hire"
checkStatus_3(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus_3(true, 38, "Osama"); /// "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus_3("Osama", false, 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// 05 assingment
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (i = startYear; i <= endYear; i++) {
    document.write(`<option valeu="${i}" style=color:blue;> ${i}</option>`);
  }
  document.write(` </select>`);
}
createSelectBox(2000, 2021);

// 06 assingment

// 1 method
function multiply(...numbers) {
  let result = 1;
  for (i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      result *= Number.parseInt(numbers[i]);
    }
  }
  return result;
}
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000

// 2 method
function multiply_2(...numbers) {
  let result = 1;
  for (i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      result *= Number.parseInt(arguments[i]);
    }
  }
  console.log(result);
}
multiply_2(10, 20); // 200
multiply_2("A", 10, 30); // 300
multiply_2(100.5, 10, "B"); // 1000
