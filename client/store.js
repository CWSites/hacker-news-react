import { createStore, compse } from 'redux';

// import the root reducer
import posts from './reducers/posts';

// create an object for the default data
const defaultState = {
  articles: {}
};

const store = createStore(posts, defaultState);

export default store;
