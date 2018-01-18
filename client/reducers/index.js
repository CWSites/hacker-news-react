import { combineReducers } from 'redux';

import addPosts from './posts';

const rootReducer = combineReducers({posts: addPosts});

export default rootReducer;
