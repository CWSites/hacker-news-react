import { combineReducers } from 'redux';

import loadPosts from './posts';

const rootReducer = combineReducers({posts: loadPosts});

export default rootReducer;
