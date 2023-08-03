`                                                             // Plus And Minus Puzzle
`;

// let a = 10;
// let b = '20';
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// /*
//   Examples:
//           1/ [++a][+][+b++][+][+c++][-][+a++]
//  - Value: 1/  11      20        80       11
//           2/ [++a][+][-b][+][+c++][-][-a++][+][+a]'
//   - Value:2/  11     -20      80      -11      12
//           3/ [--c][+][+b][+][--a][*][+b++][-][+b][*][a][+][--a][-][+true]
//   - Value:3/  79      20      9       20      21     9      8         1
//   - Explain:[++a] => pre incremant
//             [--a] => pre decremant
//             [+] => concatenat oprators
//             [+b++] => post incremant
//             [-] => subtraction
//             [++var] => Addition Operator
// */
// // this output = 100 when you play frist code and second and there togther
// // .and the output wiil be equal to  some of them
// // this frist code output
// console.log(11 + 20 + 80 - +11);
// // this second code output
// console.log(13 + -21 + 81 - -13 + 14);
// // this there code output
// console.log(81 + 21 + 12 * 19 - 20 * 12 + 11 - +1);

// // this frist code output
// console.log(11 + 20 + 80 - +11);
// // this code play it alone and will appears seame output
// // this second code output
// console.log(11 + -20 + 80 - -11 + +12);
// // // this there code output
// console.log(79 + 20 + 9 * 20 - 21 * 9 + 8 - +1);
`                                                             // Play With Variables Values
`;
let d = '-100';
let e = '20';
let f = 30;
let g = true;

console.log(-d * e); // 2000
console.log(++g * ++e + ++f + -d); // 173
