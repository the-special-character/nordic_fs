import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productsReducer } from './productsReducer';
import auth from './authReducer';

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
  auth,
});
