// glopal function -- to make addintion acc + cur
function addition(accumulator, currentValue) {
  return `${accumulator}${currentValue}`
}
// assingment 01
let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o']
// this is anonymous function and arrow function
let elzero = mix
  .map((character) => {
    return isNaN(character) ? character : ''
  })
  .reduce((accumulator, currentValue) => `${accumulator}${currentValue}`)
console.log(elzero)

// this is named function and norma function
// excuted all number from string
function excuted(character) {
  return isNaN(character) ? character : ''
}
// addition all character
function addition(accumulator, currentValue) {
  return `${accumulator}${currentValue}`
}
let result = mix.map(excuted).reduce(addition)
console.log(result)

// assingment 02
let myString = 'EElllzzzzzzzeroo'
// this is anonymous function and arrow function
var filters = myString
  .split('')
  .filter((item, pos, arr) => arr.indexOf(item) == pos)
  .reduce((accumulator, currentValue) => `${accumulator}${currentValue}`)
console.log(filters)
// this is named function and norma function
function filters_2(item, pos, arr) {
  return arr.indexOf(item) == pos
}
let result_2 = myString.split('').filter(filters_2).reduce(addition)
console.log(result_2)

// assingment 03 -- challenge
// 01 method
// this is anonymous function and arrow function
let myArray = ['E', 'l', 'z', ['e', 'r'], 'o']
flattenArray_anonymous = myArray
  .reduce((prev, curv) => prev.concat(curv), [])
  .reduce((accumulator, currentValue) => `${accumulator}${currentValue}`)
console.log(flattenArray_anonymous)

// this is named function and norma function
function flattenArray_name(prev, curv) {
  return prev.concat(curv)
}
function addintion_named(accumulator, currentValue) {
  return `${accumulator}${currentValue}`
}
let flattenArray_named = myArray
  .reduce(flattenArray_name, [])
  .reduce(addintion_named)
console.log(flattenArray_named)

// 02 advanced method
var flattenArray = function (myArray) {
  return myArray.reduce(function iter(r, a) {
    if (a === null) {
      return r
    }
    if (Array.isArray(a)) {
      return a.reduce(iter, r)
    }
    if (typeof a === 'object') {
      return Object.keys(a)
        .map((k) => a[k])
        .reduce(iter, r)
    }
    return r.concat(a)
  }, [])
}
console.log(flattenArray(myArray).reduce(addition))

// assingment 04
// method 1
let numsAndStrings_anonymous_function = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C']
let ignorit_string = numsAndStrings_anonymous_function
  .filter((item) => {
    return !isNaN(item)
  })
  .map((num) => {
    return +num ? -num : +num
  })
console.log(ignorit_string)
// method 2
let numsAndStrings_named_function = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C']
function ignor(item) {
  return !isNaN(item)
}
function revarce(num) {
  return +num ? -num : +num
}
let ignorit_string_2 = numsAndStrings_named_function.filter(ignor).map(revarce)
console.log(ignorit_string_2)

// assingment 05 challenge
// this is anonymous function and arrow function
let nums = [2, 12, 11, 5, 10, 1, 99].reduce((accumulator, currentValue) => {
  return currentValue % 2 !== 0
    ? accumulator + currentValue
    : currentValue % 2 === 0
    ? accumulator * currentValue
    : ''
}, 1)
console.log(nums)

// this is named function and norma function
function fainaly_result(accumulator, currentValue) {
  return currentValue % 2 !== 0
    ? accumulator + currentValue
    : currentValue % 2 === 0
    ? accumulator * currentValue
    : ''
}
let fainaly = (nums = [2, 12, 11, 5, 10, 1, 99].reduce(fainaly_result))
console.log(fainaly)
