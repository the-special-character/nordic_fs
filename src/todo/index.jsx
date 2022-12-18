import React, { Component } from 'react';
import './todo.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

const todoInitialState = {
  todoList: [],
  filterType: 'all',
  isLoading: false,
  hasError: null,
};

const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_TODO_REQUEST':
    case 'ADD_TODO_REQUEST':
    case 'UPDATE_TODO_REQUEST':
    case 'DELETE_TODO_REQUEST': {
      return { ...state, isLoading: true };
    }
    case 'LOAD_TODO_SUCCESS': {
      return { ...state, isLoading: false, ...payload };
    }

    case 'ADD_TODO_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        todoList: [...state.todoList, payload],
      };
    }

    case 'UPDATE_TODO_SUCCESS': {
      const index = state.todoList.findIndex(x => x.id === payload.id);
      return {
        ...state,
        isLoading: false,
        todoList: [
          ...state.todoList.slice(0, index),
          payload,
          ...state.todoList.slice(index + 1),
        ],
      };
    }

    case 'DELETE_TODO_SUCCESS': {
      const index = state.todoList.findIndex(x => x.id === payload.id);
      return {
        ...state,
        isLoading: false,
        todoList: [
          ...state.todoList.slice(0, index),
          ...state.todoList.slice(index + 1),
        ],
      };
    }

    case 'LOAD_TODO_FAIL':
    case 'ADD_TODO_FAIL':
    case 'UPDATE_TODO_FAIL':
    case 'DELETE_TODO_FAIL': {
      return { ...state, isLoading: false, ...payload };
    }

    default:
      return state;
  }
};

function TodoApp() {
  const [{ todoList, filterType, isLoading, hasError }, dispatch] = useReducer(
    todoReducer,
    todoInitialState
  );
  // const [todoList, setTodoList] = useState([]);
  // const [filterType, setFilterType] = useState('all');
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasError, setHasError] = useState(null);
  const intputTextRef = useRef();

  const addTodo = useCallback(async event => {
    try {
      event.preventDefault();
      dispatch({ type: 'ADD_TODO_REQUEST' });
      const res = await fetch('http://localhost:3000/todoList', {
        method: 'POST',
        body: JSON.stringify({
          text: intputTextRef.current.value,
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      dispatch({ type: 'ADD_TODO_SUCCESS', payload: json });
      intputTextRef.current.value = '';
    } catch (error) {
      dispatch({ type: 'ADD_TODO_FAIL', payload: { hasError: error } });
    }
  }, []);

  const toggleComplete = useCallback(async item => {
    try {
      dispatch({ type: 'UPDATE_TODO_REQUEST' });
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      dispatch({ type: 'UPDATE_TODO_SUCCESS', payload: json });
    } catch (error) {
      dispatch({ type: 'UPDATE_TODO_FAIL', payload: { hasError: error } });
    }
  }, []);

  const deleteTodo = useCallback(async item => {
    try {
      dispatch({ type: 'DELETE_TODO_REQUEST' });
      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'DELETE_TODO_SUCCESS', payload: item });
    } catch (error) {
      dispatch({ type: 'DELETE_TODO_FAIL', payload: { hasError: error } });
    }
  }, []);

  const loadTodo = useCallback(async ft => {
    try {
      dispatch({ type: 'LOAD_TODO_REQUEST' });
      // setIsLoading(true);
      let url = 'http://localhost:3000/todoList';
      if (ft !== 'all') {
        url += `?isDone=${ft === 'completed'}`;
      }
      const res = await fetch(url);
      const json = await res.json();
      dispatch({
        type: 'LOAD_TODO_SUCCESS',
        payload: {
          todoList: json,
          filterType: ft,
        },
      });
    } catch (error) {
      dispatch({ type: 'LOAD_TODO_FAIL', payload: { hasError: error } });
    }
  }, []);

  useEffect(() => {
    loadTodo('all');
  }, []);

  const filterBtns = useMemo(
    () => [
      {
        name: 'All',
        key: 'all',
      },
      {
        name: 'Pending',
        key: 'pending',
      },
      {
        name: 'Completed',
        key: 'completed',
      },
    ],
    []
  );

  return (
    <div className="wrapper">
      <h1 className="heading">Todo App</h1>
      <TodoForm addTodo={addTodo} ref={intputTextRef} />
      {hasError && <p>{hasError.message}</p>}
      {isLoading && <p>Loading...</p>}
      {todoList && (
        <TodoList
          todoList={todoList}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      )}

      <TodoFilter
        filterBtns={filterBtns}
        filterType={filterType}
        loadTodo={loadTodo}
      />
    </div>
  );
}

export default TodoApp;

// Hooks

// in which scenaio we have to use "Class Component" and "Function Conponent"

// when we want to use life cycle method
// state

// react 16.8

// function Xyz() {
//   const [counter, setCounter] = useState(0);
//   const [number, setNumber] = useState(0);
//   const isMounted = useRef(false);

//   const increment = () => {
//     // setCounter(counter + 1);
//     setCounter(value => value + 1);
//   };

//   const decrement = () => {
//     // setCounter(counter - 1);
//     setCounter(value => value - 1);
//   };

//   // component did update
//   useEffect(() => {
//     if (isMounted.current === true) {
//       console.log('component mounted & updated for counter');
//     }
//   }, [counter]);

//   // component did update
//   useEffect(() => {
//     if (isMounted.current === true) {
//       console.log('component mounted & updated for counter and number');
//     }
//   }, [counter, number]);

//   // component did mount
//   useEffect(() => {
//     console.log('component mounted');
//     isMounted.current = true;
//   }, []);

//   return (
//     <div>
//       <div>
//         <button type="button" onClick={increment}>
//           +
//         </button>
//         {counter}
//         <button type="button" onClick={decrement}>
//           -
//         </button>
//       </div>
//       <div>
//         <button type="button" onClick={() => setNumber(val => val + 1)}>
//           +
//         </button>
//         {number}
//         <button type="button" onClick={() => setNumber(val => val + 1)}>
//           -
//         </button>
//       </div>
//       {counter < 5 && <Child2 />}
//     </div>
//   );
// }

// export default Xyz;

// create a component which has two child component
// and each child component has click evnt.

// if any error occurs during this click we have to handle this on parent component

export default class Index extends Component {
  state = { todoText: '', todoList: [] };

  changeTodoText = event => {
    // console.log(event.target.value);
    this.setState({ todoText: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState(({ todoList, todoText }) => ({
      todoList: [...todoList, todoText],
      todoText: '',
    }));

    console.log('hello');
  };

  render() {
    const { todoText } = this.state;
    return (
      <div className="wrapper">
        <h1 className="heading">Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            className="rounded-l-md"
            value={todoText}
            onChange={this.changeTodoText}
          />
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        <div className="w-full flex-1">
          <div className="flex items-center m-4">
            <input type="checkbox" name="" id="" />
            <p className="flex-1 px-8">Lorem ipsum dolor sit amet.</p>
            <button type="button" className="btn">
              Delete
            </button>
          </div>
          <div className="flex items-center m-4">
            <input type="checkbox" name="" id="" />
            <p className="flex-1 px-8">Lorem ipsum dolor sit amet.</p>
            <button type="button" className="btn">
              Delete
            </button>
          </div>
        </div>
        <div className="w-full flex">
          <button type="button" className="btn flex-1 rounded-none">
            All
          </button>
          <button type="button" className="btn flex-1 rounded-none">
            Pending
          </button>
          <button type="button" className="btn flex-1 rounded-none">
            Completed
          </button>
        </div>
      </div>
    );
  }
}
