// 1 method

let myString = '1,2,3,EE,l,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,z';
// let result = myString
//   .split(",")
//   .map((item) => (isNaN(item) ? item : ""))
//   .reduce((acc, curr) => acc + curr)
//   .slice(true)
//   .slice(false, -1)
//   .replace(/_/g, " ");
// console.log(result);

// 2 method
var result = myString
  .substring(0, myString.length - 1)
  .replace(/,/g, '')
  .split('')
  .filter((item) => isNaN(item));
// .splice(true)
// .join("")
// .replace(/_/g, " ");
console.log(result);
