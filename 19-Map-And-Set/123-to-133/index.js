// assignments 01
// let setOfNumbers = new Set([10])
// setOfNumbers.add(20).add(setOfNumbers.size)
// console.log(setOfNumbers)
// console.log(Array.from(setOfNumbers).pop())
// Needed Output
// Set(3) {10, 20, 2}
// 2

// assignments 02
// let myFriends = ['Osama', 'Ahmed', 'Sayed', 'Sayed', 'Mahmoud', 'Osama']
// let unique = new Set(myFriends.sort())
// console.log(unique)
// Needed Output(4)[('Ahmed', 'Mahmoud', 'Osama', 'Sayed')]

// assignments 03
// let myInfo = {
//   username: 'Osama',
//   role: 'Admin',
//   country: 'Egypt',
// }

// 01 method
// new Map([myInfo])
// console.log(myInfo)

// 02 method
// Object.keys(myInfo).map(function (key, index) {
//   return index
// })
// console.log(myInfo)

// 03 method
let myInfo = {
  username: 'Osama',
  role: 'Admin',
  country: 'Egypt',
}

/*  just for reference */
// to get keys and value from object

// let MyMap = new Map()
// let keys = Object.keys(myInfo)
// let value = Object.values(myInfo)
// MyMap.set({ keys }, value)
// console.log(MyMap)

let myMap = new Map()
  .set(Object.keys(myInfo)[0], myInfo.username)
  .set(Object.keys(myInfo)[1], myInfo.role)
  .set(Object.keys(myInfo)[2], myInfo.country)
// console.log(myMap)
// console.log(myMap.size)
// console.log(myMap.has('role'))

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// assignments 04
let theNumber = 100020003000
newNumber = [...new Set([theNumber].join(''))]
  .sort()
  .slice(true)
  .map((num) => parseInt(num))
// console.log(...newNumber)
// Needed Output
// 123

// assignments 05
let theName = 'Elzero'

// 01 method
// console.log([...theName])
// 02 method
// console.log(new Set(theName))
// 03 method
// console.log(theName.split(''))
// 04 method
// console.log(Array.from(theName))
// 05 method
// console.log(Array.prototype.map.call(theName, (eachLetter) => eachLetter))
// Needed Output
// ;['E', 'l', 'z', 'e', 'r', 'o']

// assignments 06 + challenge

let resalt = 0

let chars = ['A', 'B', 'C', 'D', 'E', 10, 15, 6]
let chars2 = ['A', 'B', 'C', 20, 'D', 'E', 10, 15, 6]
let chars3 = ['Z', 'Y', 'A', 'D', 'E', 10, 1]

let copy = function (arr) {
  arr.sort().forEach(function (e) {
    if (typeof e === 'number') {
      resalt++
    }
    arr.copyWithin(0, resalt, resalt * 2)
  })
  return arr
}
console.log(copy(chars))
console.log(copy(chars2))
console.log(copy(chars3))
