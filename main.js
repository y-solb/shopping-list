const items = document.querySelector('.items');
const input = document.querySelector('.item__input');
const addBtn = document.querySelector('.add__btn');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const newItem = createItem(text);
  items.appendChild(newItem);
  newItem.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  itemName.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'delete__btn');
  deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  item.appendChild(itemName);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
