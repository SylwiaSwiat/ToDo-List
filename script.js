let todoInput; 
let alertInfo; 
let addBtn; 
let ulList; 
let newTask;
let toolsPanel;
let completeBtn;
let editBtn;
let deleteBtn;

let popup;
let popupInfo;
let editedTodo;
let addPopupBtn;
let closeTodoBtn;
let popupInput;

let allTasks;

const main = () => {
prepareDOMElements();
prepareDOMEvents();
}

const prepareDOMElements = () => {
todoInput = document.querySelector('.todoInput')
alertInfo = document.querySelector('.alertInfo')
addBtn = document.querySelector('.addBtn')
ulList = document.querySelector('.todoList ul')
popup = document.querySelector('.popup')
popupInfo = document.querySelector('.popupInfo')
addPopupBtn = document.querySelector('.accept')
closeTodoBtn = document.querySelector('.cancel')
popupInput = document.querySelector('.popupInput')
allTasks = ulList.getElementsByTagName('li')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask)
    ulList.addEventListener('click', checkClick)
    addPopupBtn.addEventListener('click', popupAccept)
    closeTodoBtn.addEventListener('click', popupClose)
    todoInput.addEventListener('keyup', enterCheck)
}

const addNewTask = () => {
    if(todoInput.value!==''){
         newTask = document.createElement('li') 
        ulList.appendChild(newTask).textContent = todoInput.value
        todoInput.value = ''
        alertInfo.innerHTML = ''
createToolsArea()
    } else{
        alertInfo.innerHTML = `You must enter some content`
    }
}

const enterCheck = () => {
    if(event.keyCode=== 13){
        addNewTask();
    }
}

const createToolsArea = () => {
    toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTask.appendChild(toolsPanel)
    completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    toolsPanel.appendChild(completeBtn).innerHTML = `<i class="fas fa-check"></i>`
    toolsPanel.appendChild(editBtn).textContent = `EDIT`
    toolsPanel.appendChild(deleteBtn).innerHTML = `<i class="fas fa-times"></i>`
}

const popupAccept = () => {
    if(popupInput.value!==''){
newTask.textContent = popupInput.value
createToolsArea();
popup.style.display = 'none'
popupInfo.innerText = ''
    } else {
        popupInfo.textContent = `You must enter some content`
    }
}

const popupClose = () => {
    popup.style.display = 'none'
    popupInput.value = ''
    editBtn.textContent = 'EDIT'
    popupInfo.innerText = ''
}

const checkClick = (e) => {
    if(e.target.closest('button').classList.contains('complete')){
e.target.closest('li').classList.toggle('completed')
e.target.closest('button').classList.toggle('completed')
    } else if(e.target.closest('button').className==='edit'){
popup.style.display = 'flex';
editBtn.textContent = ''
popupInput.value = newTask.innerText
    } else if(e.target.closest('button').className==='delete'){
deleteTask(e)
    }
}

const deleteTask = (e) => {
   const deleTodo = e.target.closest('li')
   deleTodo.remove();

   if(allTasks.length===0){
alertInfo.innerText = 'No tasks on the list'
   }

}

document.addEventListener('DOMContentLoaded', main);