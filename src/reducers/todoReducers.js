import {
  ADD_TODO_FAIL,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  LOAD_TODO_FAIL,
  LOAD_TODO_REQUEST,
  LOAD_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
} from '../constants';

export const todoInitialState = {
  todoList: [],
  filterType: 'all',
  isLoading: false,
  hasError: null,
};

export default (state, { type, payload }) => {
  switch (type) {
    case LOAD_TODO_REQUEST:
    case ADD_TODO_REQUEST:
    case UPDATE_TODO_REQUEST:
    case DELETE_TODO_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOAD_TODO_SUCCESS: {
      return { ...state, isLoading: false, ...payload };
    }

    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todoList: [...state.todoList, payload],
      };
    }

    case UPDATE_TODO_SUCCESS: {
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

    case DELETE_TODO_SUCCESS: {
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

    case LOAD_TODO_FAIL:
    case ADD_TODO_FAIL:
    case UPDATE_TODO_FAIL:
    case DELETE_TODO_FAIL: {
      return { ...state, isLoading: false, ...payload };
    }

    default:
      return state;
  }
};
