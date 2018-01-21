function loadPosts(state = [], action) {
  switch(action.type) {
    case 'LOAD_POSTS':
      return action.payload.slice(0, 25);
    default:
      return state;
  }
}

export default loadPosts;
