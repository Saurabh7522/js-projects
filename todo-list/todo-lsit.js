const todoData = document.querySelector('#todo-data');
const btn = document.querySelector('.btn');
const toDoLists = document.querySelector('.todo-list');
const todoOutput = document.querySelector('.todoListOutput');
const wrongDataAlert = document.querySelector('.alertTodo');

// setItem in Local Storage///
const setTodoListLocalStorage = (todo)=>{
    return localStorage.setItem('todoData', JSON.stringify(todo));
};


// getItem from localStorage///
const getTodoListLocalStorage = () =>{ 
    return JSON.parse(localStorage.getItem('todoData')) || [];
}


// delete todo list ///
const removeTodoItem = (todoItem) => {
  const updatedTodoList = getTodoListLocalStorage().filter((todo) => todo !== todoItem);
  setTodoListLocalStorage(updatedTodoList);
  showTodoList();
};



// locoal storage data show on display always///
const showTodoList = () => {
    let todoList = getTodoListLocalStorage();
    toDoLists.innerHTML = ''; // Clear the list before appending new items
    todoList.forEach((currTodo) => {
      const liElement = document.createElement('li');
      liElement.innerHTML = currTodo;
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = "Delete";
      deleteBtn.addEventListener('click', () => {
        removeTodoItem(currTodo);
      });
      toDoLists.appendChild(liElement);
      liElement.appendChild(deleteBtn);
    });
  };
  

// click function for addtodo btn ///

const addTodolist = (e) => {
    e.preventDefault();
    let todoList = getTodoListLocalStorage();
    let newTodoData = todoData.value.trim();
    if (newTodoData.length === 0 ) {
      wrongDataAlert.innerHTML = 'Please enter a todo item';
      
    }else if(todoList.includes(newTodoData)){
      wrongDataAlert.innerHTML = 'Todo item already exists in the list';
    }
    else{
      todoList.push(newTodoData);
      setTodoListLocalStorage(todoList);
      const liElement = document.createElement('li');
      liElement.innerHTML = newTodoData;
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = "Delete";
      deleteBtn.addEventListener('click', () => {
        removeTodoItem(newTodoData);
      });
      toDoLists.appendChild(liElement);
      liElement.appendChild(deleteBtn);
      todoData.value = "";  
      wrongDataAlert.innerHTML = '';
    }
  };
  
  

showTodoList();

// click addEventListener on add todo button///
btn.addEventListener('click', (e)=>{
    addTodolist(e);
})