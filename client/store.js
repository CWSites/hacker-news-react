import { createStore, compse } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

// import dummy data for testing purposes
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts
};

const store = createStore(rootReducer, defaultState);

export default store;
