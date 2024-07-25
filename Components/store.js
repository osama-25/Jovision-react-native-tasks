import { createStore } from 'redux';

const initialState = {
  text: '',
  isComponentOneVisible: true,
};

const SET_TEXT = 'SET_TEXT';
const TOGGLE_COMPONENT_ONE = 'TOGGLE_COMPONENT_ONE';

export const setText = (text) => ({
  type: SET_TEXT,
  payload: text,
});

export const toggleComponentOne = () => ({
  type: TOGGLE_COMPONENT_ONE,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return { ...state, text: action.payload };
    case TOGGLE_COMPONENT_ONE:
      return { ...state, isComponentOneVisible: !state.isComponentOneVisible };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;