// Start Headr HTML
// create Headr
let createHeard = document.createElement('header')
// append headr to body
document.body.prepend(createHeard)
// create logo
let createLogo = document.createElement('div')
// create text-node
let creteText = document.createTextNode('Elzero')
// append text node to Logo
createLogo.appendChild(creteText)
// append logo insert headr
createHeard.appendChild(createLogo)
// create Ul
createUl = document.createElement('ul')
// append UL to headr **not remmber but the Ul after Logo
createHeard.append(createUl)
// create Lies
let creteLi = document.createElement('li')
// create textnode use for loop
var text = ['home', 'about', 'service', 'contact']
text.map((item) => {
  console.log(item)
  let creteLi = document.createElement('li')
  creteLi.innerHTML = item
  createUl.appendChild(creteLi)
  // Style Li
  creteLi.style = [
    `
      padding-right: 10px;
      `,
  ]
})
// End Headr HTML
// Start Style Headr
// Style Body
document.body.style = [
  `
  margin:0;
  background-color: rgb(236 236 236);
  font-family:Tahoma
  `,
]
// Style Headr
createHeard.style = [
  `
  display: flex;
  padding: 20px;
  background-color: rgb(255 255 255);
  justify-content: space-between;
  align-items: center;
`,
]
// Style Logo
createLogo.style = [
  `
  font-weight: bold;
  color:  rgb(35 169 110);;
  font-size: 26px;
`,
]
// Style Ul
createUl.style = [
  `
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`,
]
// end style Headr
// Start Content HTML
let createContent = document.createElement('div')
// append content to createHeard
createHeard.after(createContent)
// create textnode use for loop
for (var i = 1; i <= 15; i++) {
  // create product div
  createProdact = document.createElement('div')
  creatTextN = document.createTextNode('product')
  createProdact.appendChild(creatTextN)
  // add class list to product
  createProdact.classList = 'product'
  // append product into content
  createContent.appendChild(createProdact)
  // create span
  let createSpan = document.createElement('span')
  // set innerHTML to span
  createSpan.innerHTML = [i]
  // append span to product
  createProdact.prepend(createSpan)
  // End Content HTML
  // Start style product
  createProdact.style = [
    `
    padding: 20px;
    background-color: #fff;
    border: 1px solid rgb(221 221 221);
    width: calc((100% - 40px)/3);
    text-align: center;
    color: rgb(136 136 136);
    box-sizing: border-box;
    border-radius: 6px;  `,
  ]
  // Start style Span

  createSpan.style = [
    `
    font-size: 40px;
    color: #000;
    font-weight: normal;
    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
}
  `,
  ]
}

// Start style Content
createContent.style = [
  `
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    min-height: calc(100vh - 142px);
    box-sizing: border-box;

`,
]

// this function add any attr to ele
function setAttributes(ele, attrs) {
  for (var key in attrs) {
    ele.setAttribute(key, attrs[key])
  }
}
// call like this
setAttributes(createHeard, {
  class: 'website-head',
})
setAttributes(createLogo, {
  class: 'logo',
  title: 'website Logo',
})
setAttributes(createUl, {
  class: 'menu',
})
setAttributes(createContent, {
  class: 'content',
})

// Start footer HTML
let createFooter = document.createElement('footer')
// append footer after content
createContent.after(createFooter)
// create text Node
let TextN = document.createTextNode('copyright 2021')
// append text tode to footer
createFooter.appendChild(TextN)
createFooter.style = [
  `
  background-color: rgb(35 169 110);
  padding: 20px;
  text-align: center;
  color: rgb(255 255 255);
  font-size: 26px;`,
]
