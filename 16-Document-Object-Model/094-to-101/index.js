let addInput = document.querySelector('.classes-to-add')
let removeInput = document.querySelector('.classes-to-remove')
let thereDiv = document.querySelectorAll('div')[3]
// console.log(allDiv);
window.onload = function () {
  addInput.focus()
}

addInput.addEventListener('blur', function (e) {
  let classValue = e.target.value
  addInput.classList.add(classValue.toLowerCase())
  if (classValue !== '') {
    e.target.value = ''
  }
  for (i = 0; i < 1; i++) {
    let mySpan = document.createElement('span')
    thereDiv.append(mySpan)
    mySpan.prepend(classValue)
  }
})

removeInput.addEventListener('blur', function (e) {
  let checkAtr = addInput.getAttribute('class')
  let remove = checkAtr.classList.remove(checkAtr)
  console.log(checkAtr)
})
let input = document.querySelector('.classes-to-add')
input.onblur = function () {
  console.log('yes')
}

// use addEventListener and create an anonmus function
document
  .querySelector('.classes-to-add')
  .addEventListener('blur', function () {})

// use addEventListener and crross the function  as a prammter
document.querySelector('.classes-to-add').addEventListener('blur', print)
function print() {
  console.log('yes')
}
/////////////////////////////////////////////////////////

// ** use classlist or use addClass**

// frsit method
Value = document.querySelector('.classes-to-add').value

let classesAdd = document.querySelector('.classes-to-add')
let elementCurrent = document.querySelector('.element')

classesAdd.onblur = function (e) {
  if (e.target.value !== '') {
    // this var called value of input
    ValueToInput = classesAdd.value.toLowerCase().trim().split(' ').sort()
    elementCurrent.classList.add(...ValueToInput)
    e.target.value = ''
    let ParentDiv = document.querySelectorAll('div')[3]
    for (i = 0; i < ValueToInput.length; i++) {
      let createSpan = document.createElement('span')
      ParentDiv.appendChild(createSpan)
      createSpan.textContent = ValueToInput[i]
    }
  }
}
document
  .querySelector('.classes-to-remove')
  .addEventListener('blur', function (e) {
    let getSpan = document.querySelectorAll('span')
    console.log(getSpan)
    for (j = 0; j < getSpan.length; j++) {
      if (e.target.value !== ' ' && this.value !== getSpan[j].innerHTML) {
        // let valueOF = document.querySelector('.classes-to-remove').value;
        // for (i = 0; i < valueOF.length; i++) {
        //   console.log(valueOF[i].split(''));
        // }
        for (i = 0; i < getSpan.length; i++) {
          console.log(this.value === getSpan[i].innerHTML)
          console.log('getspan', getSpan[i].innerHTML)
          console.log('this value', this.value)
          if (this.value === getSpan[i].innerHTML) {
            document.querySelector('.element').innerHTML = 'Current Element'
            getSpan[i].remove()
          }
        }
        // }
        e.target.value = ''
      } else if (this.value !== getSpan[i].innerHTML) {
        document.querySelector('.element').innerHTML =
          'الي بتدور عليه مش موجود هنا ي حبيبي'
      }
    }
  })
window.onload = function () {
  let Current = elementCurrent.getAttribute('class')
  console.log(Current)

  let thereDiv = document.querySelectorAll('div')[3]
  console.log(thereDiv)
  for (i = 0; i < 2; i++) {
    let Span = document.createElement('span')
    thereDiv.append(Span)
    Span.textContent = Current.split(' ').sort()[i]
  }
}

// assignments 03
// let p = document.querySelector('p');
// p.remove();

// let our_element = document.querySelector('.our-element');
// let clone_div = our_element.cloneNode(false);
// let clone_div_2 = our_element.cloneNode(false);

// // our_element.before(clone_div);
// // our_element.after(clone_div_2);
// //  or
// our_element.prepend(clone_div);
// our_element.append(clone_div_2);
// function setAttributes(el, attrs) {
//   for (var key in attrs) {
//     el.setAttribute(key, attrs[key]);
//   }
//   clone_div.innerHTML = 'Start';
//   clone_div_2.innerHTML = 'End';
// }
// // call like this
// setAttributes(clone_div, {
//   class: 'start',
//   title: 'Start Element',
//   data_value: 'Start',
// });
// setAttributes(clone_div_2, {
//   class: 'End',
//   title: 'End Element',
//   data_value: 'End',
// });

// assignments 04
// let d = document.querySelector('div');
// console.log(d.textContent.trim().split(' ').pop());

// assignments 05
// let span = document.querySelector('span');
// let div = document.querySelector('div');
// let p = document.querySelector('p');
// let article = document.querySelector('article');
// let section = document.querySelector('section');

// let arr = [span, div, p, article, section];
// for (i = 0; i < arr.length; i++) {
//   arr[i].onclick = function () {
//     console.log(`this is ${this.tagName}`);
//   };
// }
