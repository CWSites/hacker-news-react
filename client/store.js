import { createStore, compse } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

// import default data for testing purposes
// import post_ids from './data/posts';

// create an object for the default data
const defaultState = {
  posts: []
};

const store = createStore(rootReducer, defaultState);

export default store;
