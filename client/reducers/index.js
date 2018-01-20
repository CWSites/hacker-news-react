import { combineReducers } from 'redux';

import loadPosts from './posts';
import loadStories from './stories';

const rootReducer = combineReducers({posts: loadPosts, stories: loadStories});

export default rootReducer;
