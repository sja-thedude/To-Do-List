export const isComp = (complete, description) => {
  if (complete) {
    description.style.textDecoration = 'line-through';
    description.style.color = '#414141';
  } else {
    description.style.textDecoration = 'none';
    description.style.color = '#000';
  }
};

export const checkBox = (checkbox, todo, dataList, saveToLocalStorage, refreshPage) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      todo.completed = true;
      saveToLocalStorage(dataList);
      refreshPage();
    } else {
      todo.completed = false;
      saveToLocalStorage(dataList);
      refreshPage();
    }
  });
};