'use strict';
console.log('fetchAsync.js');

const pEl = document.getElementById('todo');

// fetch('https://dummyjson.com/todos/1')
//   .then((response) => response.json())
//   .then((todo) => console.log('todo ===', todo))
//   .catch((err) => console.warn('klaida gauti todo', err));
//

// asyc fetch
async function getTodo() {
  try {
    const response = await fetch('https://dummyjson.com/todos111/1');
    console.log('response ===', response);
    // jei uklausa nesekminga persoki i catch bloka rankiniu budu
    if (!response.ok) {
      throw response.statusText;
    }
    const todo = await response.text();
    console.log('todo ===', todo);
    return todo;
  } catch (error) {
    console.warn('klaida gauti todo', error);
    return 'not found';
  }
}
const todo1 = getTodo().then((td1) => {
  console.log('td1 ===', td1);
});
console.log('todo1 ===', todo1);
