function loadPosts(state = [], action) {
  switch(action.type) {
    case 'LOAD_POSTS':
      console.log(action);
      return action.payload; // it should contain an array of posts
    default:
      return state;
  }
}

export default loadPosts;
