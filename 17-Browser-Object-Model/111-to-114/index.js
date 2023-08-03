// const styleBody = ['Roboto', 'Open Sans', 'Cairo']
// const allColor = ['red', 'black', 'yellow', 'green', 'purple', 'pink']

// /* first select */
// // create box
// let createFristOption
// let createFristSelect
// for (i = 0; i < styleBody.length; i++) {
//   // create box
//   createSelect = document.createElement('select')
//   // append box to body
//   document.body.appendChild(createSelect)
//   for (j = 0; j < styleBody.length; j++) {
//     // create option
//     createFristOption = document.createElement('option')
//     // create innerHTML
//     createFristOption.innerHTML = styleBody[i]
//   }
//   // to selcet frist select
//   createFristSelect = document.querySelectorAll('select')[0]
//   //  append child option
//   createFristSelect.appendChild(createFristOption)
//   // to get value of option
//   // let valueLocal = createFristSelect.value ;
//   createFristSelect.onclick = (e) => {
//     valueOption = e.target.value
//     window.localStorage.setItem('font-family', valueOption)
//     document.body.style.fontFamily = e.target.value
//   }
//   //  to save last value
//   createFristSelect.value = localStorage.getItem('font-family')
// }
// /* Second select */
// for (i = 0; i < allColor.length; i++) {
//   // create option
//   let createSeconOtion = document.createElement('option')
//   // create innerHTML
//   createSeconOtion.innerHTML = allColor[i]
//   // append option to box
//   document.querySelectorAll('select')[1].appendChild(createSeconOtion)
//   let createSecondSelect = document.querySelectorAll('select')[1]
//   createSecondSelect.onclick = (e) => {
//     valueOptionSecond = e.target.value
//     window.localStorage.setItem('background-color', valueOptionSecond)
//     document.body.style.backgroundColor = e.target.value
//   }
//   //  to save last value
//   createSecondSelect.value = localStorage.getItem('background-color')
// }
// /* Thre select */
// for (i = 16; i <= 30; i++) {
//   // create option
//   let createThereOtion = document.createElement('option')
//   // create innerHTML
//   createThereOtion.innerHTML = [i]
//   // append option to box
//   document.querySelectorAll('select')[2].appendChild(createThereOtion)
//   let createThereSelect = document.querySelectorAll('select')[2]
//   createThereSelect.onclick = (e) => {
//     valueOptionThere = e.target.value
//     //  when i make click setitem and put item in localstorge
//     window.localStorage.setItem('font-size', valueOptionThere)
//     document.body.style.fontSize = `${e.target.value}px`
//   }
//   //  to save last value
//   createThereSelect.value = localStorage.getItem('font-size')
// }

// document.body.style = [
//   `background-color:${localStorage.getItem('background-color')};
//   font-size:${localStorage.getItem('font-size')}px;
//   font-family:${localStorage.getItem('font-family')};

//   `,
// ]

/* assignment 02 */

var formdata = document.getElementsByClassName('value')
var selectValue = document.querySelector('.valueSelect')
var option = document.querySelectorAll('option')
var form = [].map.call(formdata, (valueParam) => {
  valueParam.onkeyup = function () {
    sessionStorage.setItem('name', formdata[0].value)
    sessionStorage.setItem('email', formdata[1].value)
    sessionStorage.setItem('message', formdata[2].value)
  }
  selectValue.onclick = function (e) {
    sessionStorage.setItem('option', this.value)
  }
  selectValue.value = sessionStorage.getItem('option')
  console.log(sessionStorage.getItem('option'))
  formdata[0].value = window.sessionStorage.getItem('name')
  formdata[1].value = window.sessionStorage.getItem('email')
  formdata[2].value = window.sessionStorage.getItem('message')
})
