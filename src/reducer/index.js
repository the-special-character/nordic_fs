import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productsReducer } from './productsReducer';
import auth from './authReducer';
import loading from './loadingReducer';
import errors from './errorReducer';

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
  auth,
  loading,
  errors,
});
