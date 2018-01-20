function loadStories(state = [], action) {
  switch(action.type) {
    case 'LOAD_STORIES':
      return action.payload; // it should contain an array of posts
    default:
      return state;
  }
}

export default loadStories;
