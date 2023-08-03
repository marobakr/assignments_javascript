// this is your variables
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// 01 required
// Find Smallest Number In All Variables And Return Integer
//..my soluation
console.log(parseInt(Math.min(a, b, c, d)));

// // 02 required
// // Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.floor(d))); // 10000

// // / Get Integer "2" From d Variable With 4 Methods
// 03 required
console.log(Math.floor(d)); // 2
console.log(Math.round(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(parseInt(d)); // 2

// 04 required
// Use Variables b + d To Get This Valus
console.log(parseFloat(Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// I resolve this bug use tow way ^_^
console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); //  67 => Number
console.log(Math.ceil(b / Math.ceil(d))); // 67 => Number
