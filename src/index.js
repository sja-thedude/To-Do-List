import './style.css';

let dataList = [
  {
    index: 0,
    description: 'Wash The Dishes',
    completed: false,
  },
  {
    index: 1,
    description: 'Read For 30 mins',
    completed: false,
  },
];

const index = () => {
  for (let i = 0; i < dataList.length; i + 1) {
    dataList[i].index = i;
  }
};

const saveToLocalStorage = () => {
  localStorage.setItem('todo_list', JSON.stringify(dataList));
};

const addToDo = (input) => {
  const dataObj = {
    index: 0,
    description: '',
    completed: false,
  };

  dataObj.description = input;
  dataList.push(dataObj);
  index();
  saveToLocalStorage();
  window.location.reload();
};

const component = () => {
  const todoContainer = document.querySelector('.todo-list-con');
  let element = document.createElement('li');
  element.className = 'todo-item';

  const heading = document.createElement('h2');
  heading.className = 'heading';
  heading.textContent = 'Today\'s To Do';
  element.appendChild(heading);

  const clear = document.createElement('button');
  clear.className = 'clear';
  clear.innerHTML = '<i class=\'sync alternate icon\'></i>';
  element.appendChild(clear);
  todoContainer.appendChild(element);

  element = document.createElement('li');
  element.className = 'todo-item';

  const addItem = document.createElement('input');
  addItem.className = 'add-item';
  addItem.placeholder = 'Add to your list';
  addItem.value = '';
  element.appendChild(addItem);

  const btn = document.createElement('button');
  btn.className = 'enter-button';
  btn.innerHTML = '<i class=\'level down alternate icon\'></i>';
  element.appendChild(btn);
  todoContainer.appendChild(element);

  addItem.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      addToDo(addItem.value);
    }
  });

  btn.addEventListener('click', () => {
    addToDo(addItem.value);
  });

  dataList.forEach((todo) => {
    element = document.createElement('li');
    element.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = todo.completed;
    element.appendChild(checkbox);

    const description = document.createElement('textarea');
    description.className = 'description';
    description.rows = 'auto';
    description.value = todo.description.toLowerCase().charAt(0).toUpperCase();
    description.value += todo.description.slice(1);
    element.appendChild(description);

    const taskButton = document.createElement('button');
    taskButton.className = 'task-button';
    taskButton.innerHTML = '<i class=\'ellipsis vertical icon\'></i>';
    element.appendChild(taskButton);

    todoContainer.appendChild(element);
  });

  element = document.createElement('li');

  const clearCompleted = document.createElement('button');
  clearCompleted.className = 'clear-completed';
  clearCompleted.innerHTML = 'Clear all completed';
  element.appendChild(clearCompleted);
  todoContainer.appendChild(element);
};

const onPageLoad = () => {
  window.onload = () => {
    if (localStorage.getItem('todo_list') !== null) {
      dataList = JSON.parse(localStorage.getItem('todo_list'));
      component();
    } else {
      component();
    }
  };
};

onPageLoad();