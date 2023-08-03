// document.getElementById('elzero').innerHTML =
//   'This is 01 method to get element';

// document.querySelector('div').innerHTML = 'This is 02 method to get element';

// document.querySelector('.element').innerHTML =
//   'This is 03 method to get element';

// document.querySelector('div.element').innerHTML =
//   'This is 04 method to get element';

// document.querySelector('#elzero').innerHTML =
//   'This is 05 method to get element';

// document.getElementsByName('js')[0].innerHTML =
//   'This is 06 method to get element';

// document.getElementsByTagName('div')[0].innerHTML =
//   'This is 07 method to get element';

// document.getElementsByClassName('element')[0].innerHTML =
//   'This is 08 method to get element';

// document.querySelectorAll('div')[0].innerHTML =
//   'This is 09 method to get element';

// document.querySelectorAll('#elzero')[0].innerHTML =
//   'This is 10 method to get element';

// document.querySelectorAll('.element')[0].innerHTML =
//   'This is 11 method to get element';

// document.querySelectorAll('div[name')[0].innerHTML =
//   'This is 12 method to get element';

// document.querySelectorAll('div[name')[0].innerHTML =
//   'This is 13 method to get element';

// document.body.innerHTML = 'This is 14 method to get element';

// document.body.children.namedItem('js').innerHTML =
//   'This is 15 method to get element';

//  02 assignments

// let allphoto = document.querySelectorAll("img");
// for (i = 0; i < allphoto.length; i++) {
//   if (
//     allphoto[i].setAttribute(
//       "src",
//       "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//     ) ||
//     allphoto[i].setAttribute("alt", "Elzero Logo")
//   );
// }

// //  03 assignments
// function convertPrice() {
//   let dolaarPrice = 15.6;
//   inputValue = document.querySelector("input").value;
//   let resut = inputValue * dolaarPrice;
//   document.getElementsByClassName(
//     "result"
//   )[0].innerHTML = `{${inputValue}} USD Dollar = {${resut.toFixed(
//     2
//   )}} Egyptian Pound`;
// }

//  04 assignments
// let div = document.querySelectorAll("div");
// function convert() {
//   for (i = 0; i < div.length; i++) {
//     if (div[i].getAttribute("class") === "one") {
//       div[i].setAttribute("title", "one");
//       div[i].innerHTML = "one";
//     } else if (div[i].getAttribute("class") !== "tow") {
//       div[i].setAttribute("title", "tow");
//       div[i].innerHTML = "tow";
//     }
//   }
// }
// convert();

//  05 assignments

// let allImge = document.querySelectorAll("img");
// function cheekAttribute() {
//   for (i = 0; i < allImge.length; i++) {
//     if (allImge[i].getAttribute("alt") === null) {
//       allImge[i].setAttribute("alt", "Elzero New");
//       //   console.log(allImge[i].getAttribute("alt"));
//     } else allImge[i].setAttribute("alt", "old");
//   }
// }
// cheekAttribute();

//  06 assignments
document.body.style = [
  `
  width: 95%;
  height: 600px;
  `,
]

document.getElementsByTagName('form')[0].style = [
  `
  display: flex;
  flex-direction: column;
  height: 80%;
  gap: 16px;
  width: 100%;
  align-items: center;
`,
]
document.querySelectorAll('input')[0].style = [
  `
  width : 16% ;
  padding: 10px;
  padding:10px;
  border-radius:10px;
  border:0;
  outline:none;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  `,
]
document.querySelectorAll('input')[1].style = [
  `
  width : 16% ;
  padding: 10px;
  padding:10px;
  border-radius:10px;
  border:0;
  outline:none;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  `,
]

document.querySelectorAll('input')[2].style = [
  `
  width : 17% ;
  padding: 10px;
  padding:10px;
  border-radius:10px;
  border:0;
  outline:none;
  background-color: #009688;

  `,
]
document.querySelector('select').style = [
  `
  width : 17% ;
  padding: 10px;
  padding:10px;
  border-radius:10px;
  border:0;
  outline:none;
  background-color: #eee;

  `,
]
document.getElementsByClassName('results')[0].style = [
  `
display: flex;
width: 60%;
height: 70%;
align-items: center;
background-color: #eee;
flex-wrap: wrap;
justify-content: space-evenly;
overflow: hidden;
gap: 5px;
`,
]

function cheekofElement() {
  let number_Of_Elements = document.querySelector("[name= 'elements']").value
  let optionOfValue = document.querySelector("[name='type']").value
  console.log(number_Of_Elements)
  let elements_Text = document.querySelector("[type='text']").value
  let result = document.getElementsByClassName('results')[0]
  document.querySelector('form').onclick = function (e) {
    e.preventDefault()
  }
  for (i = 0; i < number_Of_Elements; i++) {
    let createElement = document.createElement(optionOfValue)
    result.appendChild(createElement)
    createElement.innerHTML = elements_Text
    createElement.setAttribute('class', 'box')
    createElement.setAttribute('title', 'Element')
    createElement.setAttribute('id', `"id-${[i + 1]}"`)
    createElement.style = [
      `
      width: 20%;
      height: 15%;
      background-color: orange;
      color:#fff;
      gap:15px;
      width: calc(99%/3);
      display: flex;
      align-items: center;
      justify-content: center`,
    ]
  }
}

function remove() {
  console.log('removing')
  let allChild = document.getElementsByClassName('box')
  console.log(allChild)
  while (allChild.length > 0) {
    allChild[0].parentNode.removeChild(allChild[0])
  }
}
