let input = document.querySelector('.inputField')
let addTaskBtn = document.querySelector('.addTask')
let tasks = document.querySelector('.tasks')

getTasks()

addTaskBtn.onclick = function () {
  // Uesd trim() for input spaces without text
  if (input.value.trim() !== '') {
    addTask(input.value)
    saveTask()
    input.value = ''
  }
}
//------------Add New Task-------//
function addTask(text) {
  let newTask = document.createElement('div')
  newTask.append(text)
  let deleteBtn = document.createElement('button')
  deleteBtn.className = 'delete'
  deleteBtn.append('Delete')

  //----------Delete Task-------------//
  deleteBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove()
    alltasks = JSON.parse(window.localStorage.getItem('tasks'))
    console.log(alltasks)
    alltasks = alltasks.filter((el) => {
      !(el.title === e.target.parentElement.firstChild.nodeValue)
      console.log(el)
    })
    window.localStorage.setItem('tasks', JSON.stringify(alltasks))
  })
  newTask.append(deleteBtn)
  tasks.append(newTask)
}

//----------Save Task To Local Storage-------------//
function saveTask() {
  let alltasks = []
  if (window.localStorage.getItem('tasks')) {
    alltasks = JSON.parse(window.localStorage.getItem('tasks'))
  }
  let newTask = {
    id: Math.floor(Math.random() * 100),
    title: input.value,
  }
  alltasks.push(newTask)
  window.localStorage.setItem('tasks', JSON.stringify(alltasks))
}

//-------------Get Saved Tasks--------//
function getTasks() {
  if (window.localStorage.getItem('tasks')) {
    console.log()
    let alltasks = []
    alltasks = JSON.parse(window.localStorage.getItem('tasks'))
    alltasks.forEach((task) => {
      addTask(task.title)
    })
  }
}
