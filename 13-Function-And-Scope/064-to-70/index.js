// // 01 assinment
function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    zName = `${zName.slice(0, 6)}${zName.slice(6, 7).toUpperCase()}.`;
  }
  namePattern();

  function ageWithMessage() {
    zAge = zAge.replace(`${zAge}`, "Your Age Is 38");
    zAge = zAge.replace(`${zAge}, "Your Age Is 32"`);
  }
  ageWithMessage();
  function countryTwoLetters() {
    zCountry = zCountry.slice(0, 2).toUpperCase();

    // console.log(zCountry);
    // Syria => You Live In SY
  }
  countryTwoLetters();
  function fullDetails() {
    return `${zName} ${zAge} ${zCountry}`;
  }
  return `Hello ${fullDetails()}`; // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// // 02 assinment
// // convert the function to arrow function syntax

// 01 function
itsMe = () => {
  return `Iam A Not A Normal Function`;
};
console.log(itsMe());
// 02 function

urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
// // convert the function to arrow function syntax
// // 03 assinment => challenge
// function checker(zName) {
function checker(zName) {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}
console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// 04 assinment
//  01 method
function specialMix(...data) {
  var result = 0;
  var str = "";
  var regex = /\d+/g;
  for (i = 0; i < data.length; i++) {
    if (typeof data[i] == "number") {
      result += data[i];
    } else if (regex.test(data[i]) === true) {
      result += Number(data[i].match(regex));
    }
  }
  return result === 0 || typeof result[i] === "string"
    ? "All Is Strings"
    : result;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
//  0 method

function specialMix(...data) {
  result = 0;
  for (i = 0; i < data.length; i++) {
    if (parseInt(data[i])) result += parseInt(data[i]);
  }
  return result === 0 && typeof data[1] === "string"
    ? "All Is Strings"
    : result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
