const array = [
    {
        "id": 5,
        "next_todo": 10,
        "previous_todo": 6,
    },
    {
        "id": 1,
        "next_todo": 6,
        "previous_todo": 0,
    },
    {
        "id": 10,
        "next_todo": 0,
        "previous_todo": 5,
    },
    {
        "id": 6,
        "next_todo": 5,
        "previous_todo": 1,
    } 
]

const sortTodos = (array) => {
    const sortedArray = []
    let firstTodo = array.find(todo => todo.previous_todo === 0)
    sortedArray.push(firstTodo)

    const todoObj = {};
    array.forEach(todo => {
        todoObj[todo.id] = todo;
    });

    while (sortedArray.length < array.length){
        let next_todo = todoObj[sortedArray[sortedArray.length - 1].next_todo]
        sortedArray.push(next_todo) 
    }
    return sortedArray
}

function reorderTodos(todos) {
    const new_list = [];
    const used_ids = new Set();
    while (new_list.length < todos.length) {
      // Find a start-todo with previous_todo value of 0
      const start_todo = todos.find(todo => todo.previous_todo === 0 && !used_ids.has(todo.id));
      used_ids.add(start_todo.id);
      new_list.push(start_todo);
      let next_todo_id = start_todo.next_todo;
      // Add successive todos until next_todo value is 0
      while (next_todo_id !== 0) {
        const next_todo = todos.find(todo => todo.id === next_todo_id && !used_ids.has(todo.id));
        used_ids.add(next_todo.id);
        new_list.push(next_todo);
        next_todo_id = next_todo.next_todo;
      }
    }
    return new_list;
  }

const t3 = performance.now(); // Get start timestamp
reorderTodos(array)
const t4 = performance.now(); // Get end timestamp
const duration2 = t4 - t3; // Calculate duration in milliseconds
console.log(`CHatGPT Function took ${duration2} milliseconds to execute`);

const t0 = performance.now(); // Get start timestamp
sortTodos(array)
const t1 = performance.now(); // Get end timestamp
const duration = t1 - t0; // Calculate duration in milliseconds
console.log(`Function took ${duration} milliseconds to execute`);
