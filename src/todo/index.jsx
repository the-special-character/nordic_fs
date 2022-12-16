import React from 'react';
import './todo.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';
import useTodo from '../hooks/useTodo';

function TodoApp() {
  const {
    todoState: { hasError, isLoading, todoList, filterType },
    addTodo,
    toggleComplete,
    deleteTodo,
    loadTodo,
    filterBtns,
    intputTextRef,
  } = useTodo();

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

// export default class Index extends PureComponent {
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
//   };

//   addTodo = async event => {
//     try {
//       this.setState({ isLoading: true });
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
//     } catch (error) {
//       this.setState({ hasError: error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   toggleComplete = async item => {
//     try {
//       this.setState({ isLoading: true });
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
//     } catch (error) {
//       this.setState({ hasError: error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   deleteTodo = async item => {
//     try {
//       this.setState({ isLoading: true });
//       await fetch(`http://localhost:3000/todoList/${item.id}`, {
//         method: 'DELETE',
//       });

//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === item.id);
//         return {
//           todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
//         };
//       });
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

//     console.log('render');
//     return (
//       <div className="wrapper">
//         <h1 className="heading">Todo App</h1>
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
//       </div>
//     );
//   }
// }
