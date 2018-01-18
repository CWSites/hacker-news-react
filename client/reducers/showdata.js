import { ADD_POSTS } from '../actions/actionCreators';

function addPosts(state = [], action) {
    switch(action.type) {
        case ADD_POSTS:
            return action.payload; // it should contain an array of posts
            console.log(action.payload);
        default: 
            return state;
    }
}

export default addPosts;