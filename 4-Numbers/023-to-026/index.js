// 01-assignment
// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_000_000) // 100000
console.log(1e6) // 100000
console.log(10 ** 6) // 100000
console.log(2000000 - 1000000) // 100000
console.log(+'1000000') // 100000
console.log(Number('1000000')) // 100000 true
console.log(1000 * 1000) // 100000
console.log(1000000) // 100000
console.log(Number('1000' + '000')) // 100000
console.log(Math.ceil(999999.7)) // 100000
console.log(Math.round(999999.7))
console.log(Math.floor(1000000.58).toFixed(2))
console.log(Math.trunc(1000000.555))
console.log(Math.pow(10, 6))
console.log(Math.sqrt(1000000000000))
console.log(Math.abs(-1000000))
// 02-assignment
console.log(Math.abs(Number.MIN_SAFE_INTEGER)) // 9007199254740991

// 03-assignment
console.log(Math.floor(Math.trunc(Number.MAX_SAFE_INTEGER)))
console.log(Math.ceil(Math.log10(Number.MAX_SAFE_INTEGER)))

// 04-assignment
let myVar = '100.56789 Views'
console.log(Number.parseInt(myVar)) // 100
console.log(Number(Number.parseFloat(myVar).toFixed(2))) // 100.57

// 05-assignment
let num = 10
console.log(Number.isInteger(num) + true)

// 05-assignment
let flt = 10.4
console.log(Math.floor(flt)) // 10
console.log(Math.trunc(flt)) // 10
console.log(Math.round(flt)) // 10
console.log(Math.ceil(flt - true)) // 10
console.log(Math.sign(flt) + Math.floor(flt - true)) // 10

// 06-assignment
console.log(Math.ceil(Math.random() * 4))
