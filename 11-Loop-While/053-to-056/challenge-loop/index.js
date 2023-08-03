let myAdmin = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];
let myEmployees = [
  'Amgad',
  'Samah',
  'Ameer',
  'Omar',
  'Othman',
  'Amany',
  'Samia',
];
let iteration = 0;
// cheek if an array in includes "Stop" make break to loop
for (i = 0; i < myAdmin.length; i++) {
  if (myAdmin[i] === 'Stop') break;
  iteration++;
}
document.write(`<div> we Have ${i} Admin <hr>`);
let a = [];
let o = [];
let s = [];

for (i = 0; i < myEmployees.length; i++) {
  switch (myEmployees[i][0]) {
    case 'A':
      a.splice(1, 0, myEmployees[i]);
      break;
    case 'O':
      o.splice(1, 0, myEmployees[i]);
      break;
    case 'S':
      s.splice(1, 0, myEmployees[i]);
  }
}

document.write(
  `<div>
  The Admin For Team Is ${i} ${myAdmin[0]}
  <h3> Team Members:</h3>
  </div> `
);
for (i = 0; i < a.length; i++) {
  document.write(`<p>- ${i + 1} ${a[i]}</p>`);
}
document.write(`<hr>
The Admin For Team Is ${i} ${myAdmin[1]}
<h3> Team Members:</h3>
`);
for (i = 0; i < o.length; i++) {
  document.write(`<p>- ${i + 1} ${o[i]}</p>
  `);
}
document.write(`<hr>
The Admin For Team Is {counter} ${myAdmin[2]}
<h3> Team Members:</h3>
`);
for (i = 0; i < s.length; i++) {
  document.write(`<p> - ${i + 1} ${s[i]}<p>
  `);
}
