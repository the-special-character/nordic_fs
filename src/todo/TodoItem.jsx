import React, { memo } from 'react';

function TodoItem({ item, toggleComplete, deleteTodo }) {
  console.log('Todo Item Render');
  return (
    <div className="flex items-center m-4">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => toggleComplete(item)}
      />
      <p className="flex-1 px-8 ">{item.text}</p>
      <button type="button" className="btn mx-1" onClick={() => editTodo(item)}>
        Edit
      </button>
      <button type="button" className="btn mx-1" onClick={() => deleteTodo(item)}>
        Delete
      </button>

    </div>
  );
}

export default memo(TodoItem);
