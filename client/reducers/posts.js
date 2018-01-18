import { ADD_POSTS } from '../actions/actionCreators';

function addPostsAction(state = [], action) {
  switch(action.type) {
    case ADD_POSTS:
      return action.payload; // it should contain an array of posts
    default: 
      return state;
  }
}

export default addPostsAction;