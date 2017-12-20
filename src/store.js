import { createStore, compse } from 'redux';

// import the root reducer
import posts from './reducers/index';

// create an object for the default data
const defaultState = {
  articles: {}
};

const store = createStore(posts, defaultState);

export default store;
