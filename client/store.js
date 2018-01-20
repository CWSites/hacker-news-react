import { createStore, compse } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
  posts: [],
  stories: []
};

const store = createStore(rootReducer, defaultState);

export default store;
