export const addToDo = (input, dataList) => {
  const dataObj = {
    index: dataList.length + 1,
    description: '',
    completed: false,
  };

  dataObj.description = input;
  dataList.push(dataObj);
};

export const capitalize = (value) => value.toLowerCase().charAt(0).toUpperCase() + value.slice(1);

const clearPreviousActiveItem = (todoItemArray) => {
  todoItemArray.forEach((item) => {
    if (item.lastElementChild.classList.contains('task-button')) {
      item.style.background = 'rgba(225, 253, 255, 0.25)';
      item.lastElementChild.innerHTML = '<i class=\'ellipsis vertical icon\'></i>';
    }
  });
};

export const clearAll = (clear, dataList, saveToLocalStorage, refreshPage) => {
  clear.addEventListener('click', () => {
    dataList.splice(0);
    saveToLocalStorage(dataList);
    refreshPage();
  });
};

export const clearAllComp = (completed, dataList, indexes, save, refresh) => {
  completed.addEventListener('click', () => {
    dataList = dataList.filter((todo) => todo.completed !== true);
    indexes(dataList);
    save(dataList);
    refresh();
  });
};

const getActiveItemIndex = (dataList, value) => {
  let index = 0;

  dataList.forEach((data) => {
    if (data.description === value.toLowerCase()) {
      index = data.index - 1;
    }
  });

  return index;
};

const changeTaskButton = (listItem, activeDeleteButton) => {
  listItem.style.background = '#ffff0080';
  activeDeleteButton.innerHTML = '<i class=\'trash alternate icon\'></i>';
};

export const itemDelete = (dataList, index, saveToLocalStorage, refreshPage) => {
  const deleteButtonArray = document.querySelectorAll('.task-button');

  deleteButtonArray.forEach((button) => {
    button.addEventListener('click', (e) => {
      let i;

      if (e.target.classList.contains('trash', 'icon')) {
        i = getActiveItemIndex(dataList, e.target.parentNode.parentNode.childNodes[1].value);
      } else {
        i = getActiveItemIndex(dataList, e.target.parentNode.childNodes[1].value);
      }

      dataList.splice(i, 1);
      index(dataList);
      saveToLocalStorage(dataList);
      refreshPage();
    });
  });
};

export const listUpdate = (dataList, saveToLocalStorage, refreshPage) => {
  const todoContainer = document.querySelector('.todo-list-con');
  const todoItemArray = Array.from(document.querySelectorAll('.todo-item'));

  todoContainer.addEventListener('click', (e) => {
    clearPreviousActiveItem(todoItemArray);

    if (e.target.classList.contains('description')) {
      const activeDescription = e.target;
      const activeIndex = getActiveItemIndex(dataList, activeDescription.value);

      changeTaskButton(activeDescription.parentNode, activeDescription.parentNode.lastElementChild);

      activeDescription.addEventListener('change', () => {
        dataList[activeIndex].description = capitalize(activeDescription.value);
        saveToLocalStorage(dataList);
        refreshPage();
      });
    }
  });
};