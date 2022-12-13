import React, { forwardRef, memo } from 'react';

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log('Todo Form render');
  return (
    <form onSubmit={addTodo}>
      <input type="text" className="rounded-l-md" ref={ref} />
      <button type="submit" className="btn rounded-l-none">
        Add Todo
      </button>
    </form>
  );
});

export default memo(TodoForm);
