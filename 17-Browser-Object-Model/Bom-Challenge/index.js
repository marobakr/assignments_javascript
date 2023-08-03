document.querySelector('.container').style = [
  `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
`,
]
document.querySelector('.form').style = [
  `
    text-align: center;
    height: 100px;
    width: 90%;
    background-color: rgb(204, 204, 204);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius :4px

`,
]
document.querySelector('.input').style = [
  `
    height: 35px;
    border: none;
    background-color: #ffffffee;
    border-radius: 5px;
    width: 45%;
    outline:none;
`,
]
document.querySelector('.addTask').style = [
  `
    height: 35px;
    border: none;
    background-color: #e91e63;
    color: white;
    border-radius: 5px;
    margin-left: 3px;
    cursor:pointer;
`,
]
document.querySelector('.my-tasks').style = [
  `
    border: none;
    background-color: rgb(204, 204, 204);
    border-radius: 5px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding:20px;
    gap:20px;
    flex-wrap:wrap;
}
`,
]

// Function create elemnts and Append
function createElement() {
  let valueInput = document.querySelector('.input')
  let parentDiv = document.querySelector('.my-tasks')
  let createElemntChild = document.createElement('div')
  // outerHTML
  let deleteButton = document.createElement('button')
  let Span = document.createElement('span')
  // Add class name
  createElemntChild.classList.add('item')
  deleteButton.classList.add('Delete-buuton')
  // to cheack if input empty return false
  if (valueInput.value !== '' && valueInput.value !== ' ') {
    parentDiv.appendChild(createElemntChild)
    deleteButton.innerHTML = 'Delet'
    createElemntChild.append(Span)
    Span.innerHTML = valueInput.value
  } else {
    return false
  }
  createElemntChild.append(deleteButton)
  // add to Local Storge
  localStorage.setItem('item', createElemntChild)
  // Start Style Elementes
  function styleElemetns() {
    createElemntChild.style = [
      `
    height: 35px;
    padding-left:10px;
    display:flex;
     border: none;
    background-color: rgba(255, 255, 255, 0.933);
    border-radius: 5px;
    width: 45%;
    align-items: center;
    justify-content: space-between;

`,
    ]
    deleteButton.style = [
      `
   color: white;
   background-color: red;
   border: none;
   border-radius: 5px;
   padding: 10px;
   cursor: pointer;
`,
    ]
  }
  styleElemetns()
}

// infock function createElement

document.querySelector('.addTask').onclick = () => {
  createElement()
  // and after infock function reset value of input
  document.querySelector('.input').value = ''
}

// function remove item
document.addEventListener('click', (e) => {
  if (e.target.className === 'Delete-buuton') {
    document.querySelector('.item').remove()
  }
})
