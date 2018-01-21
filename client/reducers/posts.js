function loadPosts(state = [], action) {
  switch(action.type) {
    case 'LOAD_POSTS':
      // API returns 500, we only grab the first 25
      return action.payload.slice(0, 25);
    default:
      return state;
  }
}

export default loadPosts;
