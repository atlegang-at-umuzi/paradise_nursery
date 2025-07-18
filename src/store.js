import { createStore } from 'redux';

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

// Action Creators
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page
});

export const addToCart = (plant) => ({
  type: ADD_TO_CART,
  payload: plant
});

export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity }
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id
});

export const clearCart = () => ({
  type: CLEAR_CART
});

// Initial State
const initialState = {
  currentPage: 'landing',
  cart: []
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    
    case ADD_TO_CART:
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    
    case UPDATE_QUANTITY:
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id)
        };
      }
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id 
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    
    default:
      return state;
  }
};

// Create Store
const store = createStore(rootReducer);

export default store;