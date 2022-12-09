import React, { memo } from 'react';

function todoItem({ item, toggleComplete, deleteTOdo }) {
  console.log('Todo item Render');
  return (
    <div className="flex item-center m-4">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => toggleComplete(item)}
      />
      <p className="flex-1 px-8">{item.text}</p>
      <button type="button" className="btn" onClick={() => deleteTodo}>
        Delete
      </button>
    </div>
  );
}

export default memo(todoItem);
