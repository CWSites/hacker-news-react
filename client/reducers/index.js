import { combineReducers } from 'redux';

import posts from './posts';
import addPosts from './showdata';

const rootReducer = combineReducers({posts, addPosts});

export default rootReducer;
