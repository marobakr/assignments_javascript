// 01 assignment
// this Example access fullDetails as a function: member.fullDetails().
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return this.name + " " + this.age + " " + this.country;
  },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());

// this Example  access fullDetails as a property: member.fullDetails.
// 2 method
// let member = {
//   name: "Elzero",
//   age: 38,
//   country: "Egypt",
//   get fullDetails() {
//     return this.name + " " + this.age + " " + this.country;
//   },
// };
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails);

// 02 assignment
// Method One
objMethodOne = { property: "Method One" };
console.log(objMethodOne.property); // "Method One"

// Method Two
var object_2 = { property: "Method Two" };
var objMethodTwo = Object.create(object_2);
console.log(objMethodTwo.property);

// "Method Three"
let objMethodThree = new Object();
objMethodThree.property = "Method Three";
console.log(objMethodThree.property);

// "Method Four"
function object_4(name) {
  this.property = name;
}
const user = new object_4("Method Four");
console.log(user.property);

// 03 assignment
let a = 1;
let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a }, threeNums, twoNums);
finalObject = JSON.stringify(finalObject);
console.log(finalObject);

// // 04 assignment -- challenge
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

let objectLength = Object.keys(myFavGames).length;
for (let [key, values] of Object.entries(myFavGames)) {
  console.log(`The Game Name Is ${key}`);
  console.log(`The Publisher Is ${values.publisher}`);
  console.log(`The Price Is ${values.price}`);
  // console.log(ty values.bestThree);

  //   // Check If Nested Object Has Property (bestThree)
  if (typeof values.bestThree === "object") {
    console.log("- Game Has Releases");
    console.log(`First => ${values.bestThree.one}`);
    console.log(`Second => ${values.bestThree.two}`);
    console.log(`Third => ${values.bestThree.three}`);
  }
  console.log("#".repeat(20));
}
