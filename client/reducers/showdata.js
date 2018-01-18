import { ADD_POSTS } from '../actions/actionCreators';

function addPosts(state = [], action) {
    switch(action.type) {
        case ADD_POSTS:
            return action.payload; // it should contain an array of posts
        default: 
            return state;
    }
}

export default addPosts;