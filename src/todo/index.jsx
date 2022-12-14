<<<<<<< HEAD
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
} from 'react';
=======
import React, { Component, createRef } from 'react';
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
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

<<<<<<< HEAD
// export default class Index extends PureComponent {
=======
function Xyz() {
  return(
    <div>
      <button type='button' onClick={increament}>
        +
      </button>
      <button type='button' onClick={increament}>
        -
      </button>
    </div>
  )
}

// export default class Index extends Component {
//   state = { todoList: [], filterType: 'all' };

//   intputTextRef = createRef();
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
//   filterBtns = [
//     {
//       name: 'All',
//       key: 'all',
//     },
//     {
//       name: 'Pending',
//       key: 'pending',
//     },
//     {
//       name: 'Completed',
//       key: 'completed',
//     },
//   ];

<<<<<<< HEAD
//   constructor(props) {
//     super(props);
//     this.state = {
//       todoList: [],
//       filterType: 'all',
//       isLoading: false,
//       hasError: false,
//     };
//     this.intputTextRef = createRef();
//   }

//   async componentDidMount() {
//     this.loadTodo('all');
//   }

//   loadTodo = async filterType => {
//     try {
//       this.setState({ isLoading: true });
//       let url = 'http://localhost:3000/todoList';
//       if (filterType !== 'all') {
//         url += `?isDone=${filterType === 'completed'}`;
//       }
//       const res = await fetch(url);
//       const json = await res.json();
//       this.setState({ todoList: json, filterType });
//     } catch (error) {
//       console.error(error);
//       this.setState({ hasError: error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
=======
//   async componentDidMount() {
//     this.loadTodo();
//   }

//   loadTodo = async () => {
//     try {a
//       const res = await fetch('http://localhost:3000/todoList');
      
//       const json = await res.json();
//       console.log(json);
//       this.setState({ todoList: json });
//     } catch (error) {}
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
//   };

//   addTodo = async event => {
//     try {
<<<<<<< HEAD
//       this.setState({ isLoading: true });
=======
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
//       event.preventDefault();

//       const res = await fetch('http://localhost:3000/todoList', {
//         method: 'POST',
//         body: JSON.stringify({
//           text: this.intputTextRef.current.value,
//           isDone: false,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       });

//       const json = await res.json();

//       this.setState(
//         ({ todoList }) => ({
//           todoList: [...todoList, json],
//         }),
//         () => {
//           this.intputTextRef.current.value = '';
//         }
//       );
<<<<<<< HEAD
//     } catch (error) {
//       this.setState({ hasError: error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
=======
//     } catch (error) {}
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
//   };

//   toggleComplete = async item => {
//     try {
<<<<<<< HEAD
//       this.setState({ isLoading: true });
=======
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
//       const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ ...item, isDone: !item.isDone }),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       });

//       const json = await res.json();

//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === item.id);
//         return {
//           todoList: [
//             ...todoList.slice(0, index),
//             json,
//             ...todoList.slice(index + 1),
//           ],
//         };
//       });
<<<<<<< HEAD
//     } catch (error) {
//       this.setState({ hasError: error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
=======
//     } catch (error) {}
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
//   };

//   deleteTodo = async item => {
//     try {
<<<<<<< HEAD
//       this.setState({ isLoading: true });
=======
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
//       await fetch(`http://localhost:3000/todoList/${item.id}`, {
//         method: 'DELETE',
//       });

//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === item.id);
//         return {
//           todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
//         };
//       });
<<<<<<< HEAD
//     } catch (error) {
//       this.setState({ hasError: error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   render() {
//     const { todoList, filterType, isLoading, hasError } = this.state;

//     if (hasError) {
//       return <h1>Something went wrong. try after sometime</h1>;
//     }

=======
//     } catch (error) {}
//   };

//   render() {
//     const { todoList, filterType } = this.state;
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
//     console.log('render');
//     return (
//       <div className="wrapper">
//         <h1 className="heading">Todo App</h1>
<<<<<<< HEAD
//         <TodoForm addTodo={this.addTodo} ref={this.intputTextRef} />
//         <TodoList
//           todoList={todoList}
//           toggleComplete={this.toggleComplete}
//           deleteTodo={this.deleteTodo}
//         />
//         <TodoFilter
//           filterBtns={this.filterBtns}
//           filterType={filterType}
//           loadTodo={this.loadTodo}
//         />
=======
//         <form onSubmit={this.addTodo}>
//           <input
//             type="text"
//             className="rounded-l-md"
//             ref={this.intputTextRef}
//           />
//           <button type="submit" className="btn rounded-l-none">
//             Add Todo
//           </button>
//         </form>
//         <div className="w-full flex-1">
//           {todoList
//             .filter(x => {
//               switch (filterType) {
//                 case 'pending':
//                   return !x.isDone;

//                 case 'completed':
//                   return x.isDone;

//                 default:
//                   return true;
//               }
//             })
//             .map(item => (
//               <div key={item.id} className="flex items-center m-4">
//                 <input
//                   type="checkbox"
//                   checked={item.isDone}
//                   onChange={() => this.toggleComplete(item)}
//                 />
//                 <p className="flex-1 px-8">{item.text}</p>
//                 <button
//                   type="button"
//                   className="btn"
//                   onClick={() => this.deleteTodo(item)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//         </div>
//         <div className="w-full flex">
//           {this.filterBtns.map(x => (
//             <button
//               key={x.key}
//               type="button"
//               className="btn flex-1 rounded-none"
//               onClick={() => this.setState({ filterType: x.key })}
//             >
//               {x.name}
//             </button>
//           ))}
//         </div>
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
//       </div>
//     );
//   }
// }
<<<<<<< HEAD
=======
export default first
>>>>>>> b9391b3415c7971ec3d3c61fa2f006b37cd7f4a6
