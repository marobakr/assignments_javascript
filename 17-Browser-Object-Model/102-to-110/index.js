let promp = prompt('Print Number From – To', 'Example: 5-20')
let Arrayprom = promp.split('-').sort((a, b) => a - b)
console.log(Arrayprom)
console.log(b)

// for (i = +Arrayprom[0]; i <= Arrayprom[1]; i++) {
//   console.log(i)
//   document.body.style = [
//     `
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   gap: 20px;

//   `,
//   ]
//   let span = document.createElement('span')
//   document.body.appendChild(span)
//   span.style = [
//     `
//     color:#fff;
//     border-radius: 50%;
//     padding: 30px;
//     background-color: #009688;
// }  `,
//   ]
//   let breack = document.createElement('br')
//   document.body.appendChild(breack)
//   span.innerHTML = i
// }

// assignments 02
// setTimeout(() => {
//   // create div parent
//   let div = document.createElement('div');
//   // append the div to body
//   document.body.append(div);
//   let h_1 = document.createElement('h1');
//   // append the h1 to parent div
//   div.appendChild(h_1);
//   let p = document.createElement('p');
//   // append the p to parent div
//   div.appendChild(p);
//   // start style div
//   div.style = [
//     `
//     width: 600px;
//     height: 200px;
//     background-color: #eee;
//     margin: auto;
//     position: relative;

//   `,
//   ];
//   h_1.innerHTML = 'welcome';
//   h_1.style = [
//     `
//     text-align: center;
//     padding-top:5%
//   `,
//   ];
//   p.innerHTML = 'welcome to elzero web school';
//   p.style = [
//     `
//     text-align: center;
//     font-size:20px
//   `,
//   ];
//   // create button to close
//   let button = document.createElement('button');
//   button.innerHTML = 'x';
//   button.style = [
//     `
//     color: rgb(255, 255, 255);
//     background-color: red;
//     border-radius: 50%;
//     width: 35px;
//     height: 35px;
//     border: none;
//     position: absolute;
//     top: -15px;
//     left: 96%;
//     `,
//   ];
//   div.appendChild(button);
//   function myFunction() {
//     div.remove();
//   }
//   button.onclick = function () {
//     myFunction();
//   };
// }, 5000);
// assignments 03
// let div = document.createElement('div');
// document.body.appendChild(div);
// div.innerHTML = 10;
// let counterDowmn = setInterval(counter, 1000);
// function counter() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === '0') {
//     clearInterval(counterDowmn);
//   }
// }
// // assignments 04
// let div = document.createElement('div');
// document.body.appendChild(div);
// let span = document.createElement('span');
// div.appendChild(span);
// span.innerHTML = 10;
// div.style = [
//   `
//   border-radius: 50%;
//   font-size: 50px;
//   width: 300px;
//   height: 300px;
//   margin: auto;
//   background-color: #9e9e9e;
//   text-align: center;
// `,
// ];
// let counterDowmn = setInterval(counter, 1000);
// function counter() {
//   span.innerHTML -= 1;
//   if (span.innerHTML === '0') {
//     function moveinelzero() {
//       clearInterval(counterDowmn);
//       window.location.assign('https://elzero.org/');
//     }
//     moveinelzero();
//   }
// }

// // assignments 05
// let div = document.createElement('div');
// document.body.appendChild(div);
// let span = document.createElement('span');
// div.appendChild(span);
// span.innerHTML = 10;
// div.style = [
//   `
//   border-radius: 50%;
//   font-size: 50px;
//   width: 300px;
//   height: 300px;
//   margin: auto;
//   background-color: #9e9e9e;
//   text-align: center;
// `,
// ];
// let counterDowmn = setInterval(counter, 1000);
// function counter() {
//   span.innerHTML -= 1;
//   if (span.innerHTML === '5') {
//     function moveinelzero() {
//       const width = 300;
//       const height = 400;
//       const left = screen.availLeft + (screen.availWidth - width - 50);
//       const top = screen.availTop + (screen.availHeight - height);
//       window.open(
//         'https://elzero.org/',
//         '_blank',
//         `width=${width},height=${height},left=${left},top=0`
//       );
//     }
//     moveinelzero();
//   } else if (span.innerHTML === '0') {
//     clearInterval(counterDowmn);
//   }
// }
